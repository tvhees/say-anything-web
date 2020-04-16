import { Machine, interpret } from 'xstate';
import { countKeys } from '../common/utilities';
import { minPlayers } from '../common/rules';
import messages from '../common/messages';
import actions from './actions';

const isEnoughPlayers = ({ players }) => countKeys(players) >= minPlayers;

const lobbyStates = {
  initial: 'waiting',
  on: {
    [messages.player.setName]: {
      target: '.count players',
      actions: [
        actions.setHostId,
        actions.addPlayer
      ],
    },
    [messages.player.leave]: {
      target: '.count players',
      actions: [
        actions.removePlayer
      ],
    },
  },
  states: {
    'count players': {
      on: {
        '': [
          { target: 'ready', cond: isEnoughPlayers },
          { target: 'waiting' }
        ],
      },
    },
    waiting: {
    },
    ready: {
      on: {
        [messages.game.start]: 'closed'
      }
    },
    closed: {
      type: 'final'
    }
  },
};

const isEnoughAnswers = ({ players, answers }) => countKeys(players) === countKeys(answers) + 1;

//TODO Vote counting function
const isEnoughVotes = ({ players, votes }) => false;

const gameStates = {
  initial: 'judge pick question',
  states: {
    'judge pick question': {
      entry: [
        actions.incrementRound,
        actions.setNextJudge,
        actions.setNextQuestionSelection
      ],
      on: {
        [messages.player.setQuestion]: {
          target: 'write answers',
          actions: [actions.setJudgeQuestion]
        }
      }
    },
    'write answers': {
      initial: 'waiting',
      on: {
        [messages.player.setAnswer]: {
          target: '.count answers',
          actions: [actions.setPlayerAnswer]
        }
      },
      onDone: 'judge choose answer',
      states: {
        'count answers': {
          on: {
            '': [
              { target: 'closed', cond: isEnoughAnswers },
              { target: 'waiting' }
            ],
          },
        },
        waiting: {
        },
        closed: {
          type: 'final'
        },
      },
    },
    'judge choose answer': {
      on: {
        [messages.player.chooseAnswer]: {
          target: 'vote for answers',
          actions: [actions.setJudgeAnswer]
        }
      }
    },
    'vote for answers': {
      initial: 'waiting',
      on: {
        [messages.player.voteAnswer]: {
          target: '.count votes',
          actions: [actions.setPlayerVote]
        }
      },
      onDone: 'score round',
      states: {
        'count votes': {
          on: {
            '': [
              { target: 'closed', cond: isEnoughVotes },
              { target: 'waiting' }
            ],
          },
        },
        waiting: {
        },
        closed: {
          type: 'final'
        },
      }
    },
    'score round': {
      entry: [actions.scoreRound]
    },
    'end game': {
      type: 'final'
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
      onDone: 'game',
      ...lobbyStates
    },
    game: {
      entry: [
        actions.setInitialGameState
      ],
      ...gameStates
    }
  }
}

const appMachine = Machine(appMachineConfig);
const game = interpret(appMachine);

export default game;