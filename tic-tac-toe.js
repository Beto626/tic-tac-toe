// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn = "player1"
var firstSquare = "x"
function squareOne() {
  if(turn == "player1"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "55")
    circleOne.setAttribute("cy", "55")
    circleOne.setAttribute("r", "15")
    circleOne.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    turn = "player2"
  } else if(turn == "player2"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "55")
    circleOne.setAttribute("cy", "55")
    circleOne.setAttribute("r", "5")
    circleOne.setAttribute("fill", "white")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)
    turn = "player2"
  }
}
var turn = "player1"
var secondSquare = "x"
function squareTwo() {
  if(turn == "player1"){
    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "155")
    circleTwo.setAttribute("cy", "155")
    circleTwo.setAttribute("r", "5")
    circleTwo.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleTwo)
    turn = "player2"
  } else if(turn == "player2"){
    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "155")
    circleTwo.setAttribute("cy", "155")
    circleTwo.setAttribute("r", "15")
    circleTwo.setAttribute("fill", "white")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleTwo)
    turn = "player2"
  }
}
var turn = "player1"
var thirdSquare = "x"
function squareThree() {
  if(turn == "player1"){
    var circleThree = document.createElementNS(namespace, "circle")
    circleThree.setAttribute("cx", "255")
    circleThree.setAttribute("cy", "255")
    circleThree.setAttribute("r", "5")
    circleThree.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleThree)
    turn = "player2"
  }else if(turn == "player2"){
    var circleThree = document.createElementNS(namespace, "circle")
    circleThree.setAttribute("cx", "255")
    circleThree.setAttribute("cy", "255")
    circleThree.setAttribute("r", "15")
    circleThree.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleThree)
    turn = "player2"

  }
}
var turn = "player1"
var fourthSquare = "x"
function squareFour() {
  if(turn == "player1"){
    var circleFour = document.createElementNS(namespace, "circle")
    circleFour.setAttribute("cx", "155")
    circleFour.setAttribute("cy", "55")
    circleFour.setAttribute("r", "5")
    circleFour.setAttribute("fill", "blue")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleFour)
    turn = "player2"
}else if(turn == "player2"){
    var circleFour = document.createElementNS(namespace, "circle")
    circleFour.setAttribute("cx", "155")
    circleFour.setAttribute("cy", "55")
    circleFour.setAttribute("r", "45")
    circleFour.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleFour)
    turn = "player2"

  }
}
var turn = "player1"
var fifthSquare = "x"
function squareFive() {
  if(turn == "player1"){
    var circleFive = document.createElementNS(namespace, "circle")
    circleFive.setAttribute("cx", "255")
    circleFive.setAttribute("cy", "55")
    circleFive.setAttribute("r", "5")
    circleFive.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleFive)
    turn = "player2"
  }else if(turn== "player2"){
    var circleFive = document.createElementNS(namespace, "circle")
    circleFive.setAttribute("cx", "255")
    circleFive.setAttribute("cy", "55")
    circleFive.setAttribute("r", "25")
    circleFive.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleFive)
    turn = "player2"

  }
}
var turn = "player1"
var sixthSquare = "x"
function squareSix() {
  if(turn == "player1"){
    var circleSix = document.createElementNS(namespace, "circle")
    circleSix.setAttribute("cx", "55")
    circleSix.setAttribute("cy", "155")
    circleSix.setAttribute("r", "15")
    circleSix.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleSix)
    turn = "player2"
  }else if(turn == "player2"){
    var circleSix = document.createElementNS(namespace, "circle")
    circleSix.setAttribute("cx", "55")
    circleSix.setAttribute("cy", "155")
    circleSix.setAttribute("r", "5")
    circleSix.setAttribute("fill", "white")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleSix)
    turn = "player2"

  }
}
var turn = "player1"
var seventhSquare = "x"
function squareSeven() {
  if(turn == "player1"){
    var circleSeven = document.createElementNS(namespace, "circle")
    circleSeven.setAttribute("cx", "55")
    circleSeven.setAttribute("cy", "255")
    circleSeven.setAttribute("r", "5")
    circleSeven.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleSeven)
    turn = "player2"
  }else if(turn == "player2"){
  var circleSeven = document.createElementNS(namespace, "circle")
  circleSeven.setAttribute("cx", "55")
  circleSeven.setAttribute("cy", "255")
  circleSeven.setAttribute("r", "15")
  circleSeven.setAttribute("fill", "blue")

  var canvas = document.getElementById("game-board")
  canvas.appendChild(circleSeven)
  turn = "player2"


  }
}
var turn = "player1"
var eigthSquare = "x"
function squareEight() {
  if(turn == "player1"){
    var circleEight = document.createElementNS(namespace, "circle")
    circleEight.setAttribute("cx", "155")
    circleEight.setAttribute("cy", "255")
    circleEight.setAttribute("r", "5")
    circleEight.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleEight)
    turn = "player2"
  }else if(turn == "player2"){
  var circleEight = document.createElementNS(namespace, "circle")
  circleEight.setAttribute("cx", "155")
  circleEight.setAttribute("cy", "255")
  circleEight.setAttribute("r", "15")
  circleEight.setAttribute("fill", "blue")

  var canvas = document.getElementById("game-board")
  canvas.appendChild(circleEight)
  turn = "player2"


  }
}

var ninthSquare = "x"
function squareNine() {
  if(turn == "player1"){
    var circleNine = document.createElementNS(namespace, "circle")
    circleNine.setAttribute("cx", "255")
    circleNine.setAttribute("cy", "155")
    circleNine.setAttribute("r", "5")
    circleNine.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleNine)
    turn = "player2"
  }else if(turn == "player2"){
    var circleNine = document.createElementNS(namespace, "circle")
    circleNine.setAttribute("cx", "255")
    circleNine.setAttribute("cy", "155")
    circleNine.setAttribute("r", "15")
    circleNine.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleNine)
    turn = "player2"



  }
}
