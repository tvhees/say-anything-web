import { Machine, assign, interpret } from "xstate";
import { countKeys, removeKey } from '../common/utilities';

const isEnoughPlayers = ({ players }) => countKeys(players) >= 4;

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

const setJudge = assign({
  judgeId: ({ players }) => Object.keys(players)[0]
});

const setQuestionSelection = assign({
  questions: {
    c1q1: 'What\'s the best video game of all time?',
    c1q2: 'What\'s the best excuse for forgetting your anniversary?',
    c1q3: 'What would be the coolest name for a band?',
    c1q4: 'What would be the worst thing to scream during church?',
    c1q5: 'There\'s no crying in ________!',
  }
})

const gameStates = {
  initial: 'judge pick question',
  context: {
    judgeId: false,
  },
  states: {
    "judge pick question": {
      entry: [
        setJudge, setQuestionSelection
      ]
    },
    "write answers": {

    },
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