import { assign } from "xstate";
import { countKeys, removeKey } from '../common/utilities';

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

const setLobbyIsReady = (value) => assign({
  isReady: value
});

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

export default {
  setHostId,
  addPlayer,
  removePlayer,
  setLobbyIsReady,
  setInitialGameState,
  incrementRound,
  setNextJudge,
  setNextQuestionSelection,
  setNextQuestion,
  setPlayerAnswer
}