/*
Outer states:
1. Lobby setup
  - PLAYERs join
  - First PLAYER is HOST
  - PLAYERs can type and submit NAME
  - HOST can start GAME when 4+ PLAYERs have joined
  - Transition on HOST submitting GAME

Game loop states:
1. Judge asks a question
  - JUDGE selected from PLAYERs
  - JUDGE can see list of QUESTIONs
  - JUDGE can select a QUESTION and submit
  - Transition on JUDGE has selected a QUESTION
2. Everyone writes an answer
  - ALL can see QUESTION and submitted ANSWERs
  - PLAYERs can type and submit ANSWER
  - Transition on all PLAYERs having submitted an ANSWER
3. Judge secretly picks their favourite
  - ALL can see QUESTION and submitted ANSWERs
  - JUDGE can selected an ANSWER
  - Transition on JUDGE has selected an ANSWER
4. Everyone else guesses
  - ALL can see QUESTION and submitted ANSWERs
  - PLAYERs can select one or two ANSWERs and submit
  - Transition on all PLAYERs have submitted
5. Judge reveals and scoring happens
  - ALL can see QUESTION and submitted ANSWERs
  - ALL can see selected ANSWER
  - ALL can see updated SCOREBOARD
*/

function judgeAsksQuestion () {
  return {
    enter: function () {
      // Select judge from players
      // Select list of questions
    },
    exit: function () {

    }
  }
}

function playersWriteAnswers () {
  return {
    enter: function () {
      
      // Select list of questions
    },
    exit: function () {

    }
  }
}

module.exports = [judgeAsksQuestion, playersWriteAnswers];