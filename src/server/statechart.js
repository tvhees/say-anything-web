import { Machine, assign, interpret } from "xstate";
import { countKeys, removeKey } from '../common/utilities';
import { minPlayers } from '../common/rules';

const isEnoughPlayers = ({ players }) => countKeys(players) >= minPlayers;

const setHostId = assign({
  hostId: ({ players, hostId }, { id }) => countKeys(players) ? hostId : id
});

const addPlayer = assign({
  players: ({ players }, { id, name }) => ({
      ...players,
      [id]: {
        name
      }
    })
});

const removePlayer = assign({
  players: ({ players }, { id }) => removeKey(players, id)
});

const setGameIsReady = (value) => assign({
  isReady: value
});

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
      entry: [setGameIsReady(false)],
      on: {
        PLAYER_NAME: {
          target: "count players",
          actions: [
            setHostId,
            addPlayer
          ],
        },
        PLAYER_LEAVE: {
          target: "count players",
          actions: [
            removePlayer
          ],
        },
      },
    },
    ready: {
      entry: [setGameIsReady(true)],
      on: {
        PLAYER_LEAVE: {
          target: "count players",
          actions: [
            removePlayer
          ],
        },
      }
    },
  },
};

const setInitialGameState = assign({
  round: 0,
  judgeId: false,
  questions: {},
  question: false,
  answers: {}
});

const incrementRound = assign({
  round: ({ round }) => round + 1
});

const setNextJudge = assign({
  judgeId: ({ players }) => Object.keys(players)[0]
});

const setNextQuestionSelection = assign({
  questions: {
    c1q1: 'What\'s the best video game of all time?',
    c1q2: 'What\'s the best excuse for forgetting your anniversary?',
    c1q3: 'What would be the coolest name for a band?',
    c1q4: 'What would be the worst thing to scream during church?',
    c1q5: 'There\'s no crying in ________!',
  }
});

const setNextQuestion = assign({
  question: ({ questions }, { questionId }) => questions[questionId]
});

const setPlayerAnswer = assign({
  answers: ({ answers }, { id, answer }) => ({
    ...answers,
    [id]: answer
  })
});

const isEnoughAnswers = ({ players, answers }) => countKeys(players) === countKeys(answers) + 1;

const gameStates = {
  initial: 'setup',
  states: {
    setup: {
      on: {
        "": "judge pick question"
      },
      entry: [
        setInitialGameState
      ]
    },
    "judge pick question": {
      entry: [
        incrementRound, setNextJudge, setNextQuestionSelection
      ],
      on: {
        PLAYER_QUESTION: {
          target: "write answers",
          actions: [setNextQuestion]
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
              actions: [setPlayerAnswer]
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