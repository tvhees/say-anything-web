import { Machine, assign, interpret } from "xstate";

const countKeys = (obj) => Object.keys(obj).length;

const isEnoughPlayers = ({ players }) => countKeys(players) >= 4;

const addPlayer = assign({
  players: ({ players }, { id, name }) => {
    return {
      ...players,
      [id]: {
        name
      },
    };
  },
});

const lobbyMachineConfig = {
  id: "lobby",
  initial: "count players",
  context: {
    players: {},
    hostId: false,
    judgeId: false,
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
      on: {
        PLAYER_NAME: {
          target: "count players",
          actions: [
            addPlayer
          ],
        },
      },
    },
    ready: {
      type: "final",
    },
  },
};

const lobbyMachine = Machine(lobbyMachineConfig);
const game = interpret(lobbyMachine);

const gameMachine = Machine({
  id: "Game",
  context: {
    players: {},
  },
  states: {
    "Pick Question": {
      id: "Pick Question",
    },
    "Write Answer": {
      id: "Write Answer",
    },
  },
});

export default game;