let gameProgress = []

function play(val) {
    let playerTurn = document.getElementById('player')
    let playerValue = document.getElementById(val)
    console.log(playerTurn.innerText)
    
    if (playerTurn.innerText === 'O') {
    playerTurn.innerText = 'X'
    playerValue.innerText = 'O'
    gameProgress[val] = 'O'
    }
    else if (playerTurn.innerText === 'X') {
    playerTurn.innerText = 'O'
    playerValue.innerText = 'X'
    gameProgress[val] = 'X'
    }

    let sqr1 = gameProgress[0]
    let sqr2 = gameProgress[1]
    let sqr3 = gameProgress[2]
    let sqr4 = gameProgress[3]
    let sqr5 = gameProgress[4]
    let sqr6 = gameProgress[5]
    let sqr7 = gameProgress[6]
    let sqr8 = gameProgress[7]
    let sqr9 = gameProgress[8]


        if (sqr1 !== undefined && sqr1 === 'X' && sqr1 === sqr2 && sqr1 === sqr3) {
            alert("Player X has won the game!")
        }
        else if (sqr4 !== undefined && sqr4 === 'X' && sqr4 === sqr5 && sqr4 === sqr6) {
            alert("Player X has won the game!")    
        }
        else if (sqr7 !== undefined && sqr7 === 'X' && sqr7 === sqr8 && sqr7 === sqr9) {
            alert("Player X has won the game!") 
        }
        else if (sqr1 !== undefined && sqr1 === 'X' && sqr1 === sqr4 && sqr1 === sqr7) {
            alert("Player X has won the game!")   
        }
        else if (sqr2 !== undefined && sqr2 === 'X' && sqr2 === sqr5 && sqr2 === sqr8) {
            alert("Player X has won the game!") 
        }
        else if (sqr3 !== undefined && sqr3 === 'X' && sqr3 === sqr6 && sqr3 === sqr9) {
            alert("Player X has won the game!")   
        }
        else if (sqr1 !== undefined && sqr1 === 'X' && sqr1 === sqr5 && sqr1 === sqr9) {
            alert("Player X has won the game!")   
        }
        else if (sqr7 !== undefined && sqr7 === 'X' && sqr7 === sqr5 && sqr7 === sqr3) {
            alert("Player X has won the game!")             
    }
        else if (sqr1 !== undefined && sqr1 === 'O' && sqr1 === sqr2 && sqr1 === sqr3) {
            alert("Player O has won the game!")
        }
        else if (sqr4 !== undefined && sqr4 === 'O' && sqr4 === sqr5 && sqr4 === sqr6) {
            alert("Player O has won the game!")    
        }
        else if (sqr7 !== undefined && sqr7 === 'o' && sqr7 === sqr8 && sqr7 === sqr9) {
            alert("Player O has won the game!") 
        }
        else if (sqr1 !== undefined && sqr1 === 'O' && sqr1 === sqr4 && sqr1 === sqr7) {
            alert("Player O has won the game!")   
        }
        else if (sqr2 !== undefined && sqr2 === 'O' && sqr2 === sqr5 && sqr2 === sqr8) {
            alert("Player O has won the game!") 
        }
        else if (sqr3 !== undefined && sqr3 === 'O' && sqr3 === sqr6 && sqr3 === sqr9) {
            alert("Player O has won the game!")   
        }
        else if (sqr1 !== undefined && sqr1 === 'O' && sqr1 === sqr5 && sqr1 === sqr9) {
            alert("Player O has won the game!")   
        }
        else if (sqr7 !== undefined && sqr7 === 'O' && sqr7 === sqr5 && sqr7 === sqr3) {
            alert("Player O has won the game!")
        }
        else if (sqr1 !== undefined && sqr2 !== undefined && sqr3 !== undefined && sqr4 !== undefined && sqr5 !== undefined && sqr6 !== undefined && sqr7 !== undefined && sqr8 !== undefined && sqr9 !== undefined ) {
            alert("Cat has won the game!")
        }
    console.log(gameProgress)
}
