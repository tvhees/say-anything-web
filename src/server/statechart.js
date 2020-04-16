import { Machine, interpret } from "xstate";
import { countKeys } from '../common/utilities';
import { minPlayers } from '../common/rules';
import actions from './actions';

const isEnoughPlayers = ({ players }) => countKeys(players) >= minPlayers;

const lobbyStates = {
  initial: "count players",
  context: {
    isReady: false
  },
  states: {
    "count players": {
      on: {
        "": [
          { target: "ready", cond: isEnoughPlayers },
          { target: "waiting" }
        ],
      },
    },
    waiting: {
      entry: [actions.setLobbyIsReady(false)],
      on: {
        PLAYER_NAME: {
          target: "count players",
          actions: [
            actions.setHostId,
            actions.addPlayer
          ],
        },
        PLAYER_LEAVE: {
          target: "count players",
          actions: [
            actions.removePlayer
          ],
        },
      },
    },
    ready: {
      entry: [actions.setLobbyIsReady(true)],
      on: {
        PLAYER_LEAVE: {
          target: "count players",
          actions: [
            actions.removePlayer
          ],
        },
      }
    },
  },
};

const isEnoughAnswers = ({ players, answers }) => countKeys(players) === countKeys(answers) + 1;

const gameStates = {
  initial: 'setup',
  states: {
    setup: {
      on: {
        "": "judge pick question"
      },
      entry: [
        actions.setInitialGameState
      ]
    },
    "judge pick question": {
      entry: [
        actions.incrementRound,
        actions.setNextJudge,
        actions.setNextQuestionSelection
      ],
      on: {
        PLAYER_QUESTION: {
          target: "write answers",
          actions: [actions.setNextQuestion]
        }
      }
    },
    "write answers": {
      initial: 'waiting',
      states: {
        waiting: {
          on: {
            PLAYER_ANSWER: {
              target: "count answers",
              actions: [actions.setPlayerAnswer]
            }
          }
        },
        "count answers": {
          on: {
            "": [
              { target: "#judge-answer", cond: isEnoughAnswers },
              { target: "waiting" }
            ],
          },
        }
      }
    },
    "judge choose answer": {
      id: 'judge-answer'
    }
  },
};

const appMachineConfig = {
  initial: 'lobby',
  context: {
    players: {},
    hostId: false,
  },
  states: {
    lobby: {
      on: {
        GAME_START: 'game'
      },
      ...lobbyStates
    },
    game: {
      ...gameStates
    }
  }
}

const appMachine = Machine(appMachineConfig);
const game = interpret(appMachine);

export default game;