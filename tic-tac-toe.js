// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var firstSquare = "x"
function squareOne() {
  if(firstSquare == "x"){
    var circleOne = document.createElementNS(namespace, "circle")
    circleOne.setAttribute("cx", "55")
    circleOne.setAttribute("cy", "55")
    circleOne.setAttribute("r", "45")
    circleOne.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleOne)

  }
}

var secondSquare = "x"
function squareTwo() {
  if(secondSquare == "x"){
    var circleTwo = document.createElementNS(namespace, "circle")
    circleTwo.setAttribute("cx", "155")
    circleTwo.setAttribute("cy", "155")
    circleTwo.setAttribute("r", "15")
    circleTwo.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleTwo)

  }
}

var thirdSquare = "x"
function squareThree() {
  if(thirdSquare == "x"){
    var circleThree = document.createElementNS(namespace, "circle")
    circleThree.setAttribute("cx", "255")
    circleThree.setAttribute("cy", "255")
    circleThree.setAttribute("r", "15")
    circleThree.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleThree)

  }
}

var fourthSquare = "x"
function squareFour() {
  if(fourthSquare == "x"){
    var circleFour = document.createElementNS(namespace, "circle")
    circleFour.setAttribute("cx", "155")
    circleFour.setAttribute("cy", "55")
    circleFour.setAttribute("r", "45")
    circleFour.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleFour)

  }
}

var fifthSquare = "x"
function squareFive() {
  if(fifthSquare == "x"){
    var circleFive = document.createElementNS(namespace, "circle")
    circleFive.setAttribute("cx", "255")
    circleFive.setAttribute("cy", "55")
    circleFive.setAttribute("r", "45")
    circleFive.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleFive)

  }
}

var sixthSquare = "x"
function squareSix() {
  if(sixthSquare == "x"){
    var circleSix = document.createElementNS(namespace, "circle")
    circleSix.setAttribute("cx", "55")
    circleSix.setAttribute("cy", "155")
    circleSix.setAttribute("r", "45")
    circleSix.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleSix)

  }
}

var seventhSquare = "x"
function squareSeven() {
  if(seventhSquare == "x"){
    var circleSeven = document.createElementNS(namespace, "circle")
    circleSeven.setAttribute("cx", "55")
    circleSeven.setAttribute("cy", "255")
    circleSeven.setAttribute("r", "45")
    circleSeven.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleSeven)

  }
}

var eigthSquare = "x"
function squareEight() {
  if(eigthSquare == "x"){
    var circleEight = document.createElementNS(namespace, "circle")
    circleEight.setAttribute("cx", "155")
    circleEight.setAttribute("cy", "255")
    circleEight.setAttribute("r", "45")
    circleEight.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleEight)

  }
}

var ninthSquare = "x"
function squareNine() {
  if(ninthSquare == "x"){
    var circleNine = document.createElementNS(namespace, "circle")
    circleNine.setAttribute("cx", "255")
    circleNine.setAttribute("cy", "155")
    circleNine.setAttribute("r", "45")
    circleNine.setAttribute("fill", "blue")

    var canvas = document.getElementById("game-board")
    canvas.appendChild(circleNine)

  }
}
