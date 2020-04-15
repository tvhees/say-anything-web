export default {
  server: {
    message: 'message',
    clientConnect: 'connect',
    clientDisconnect: 'disconnect'
  },
  client: {
    connect: 'connect',
    disconnect: 'disconnect'
  },
  game: {
    state: 'GAME_STATE',
    start: 'GAME_START'
  },
  player: {
    join: 'PLAYER_JOIN',
    leave: 'PLAYER_LEAVE',
    setName: 'PLAYER_NAME',
    setAnswer: 'PLAYER_ANSWER'
  }
};