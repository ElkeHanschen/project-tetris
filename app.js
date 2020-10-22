// code is executed after initial HTML document has been completely loaded and passed
document.addEventListener('DOMContentLoaded', () => {
    // returns the first HTML element (object) with class .grid
    const grid = document.querySelector('.grid');
    // returns an array of objects with all HTML elements
    let squares = Array.from(document.querySelectorAll('.grid div'));
    // returns the first HTML element (object) with class id score
    const scoreDisplay = document.querySelector('#score');
    // returns the first HTML element (object) with class id start-button
    const startBtn = document.querySelector('#start-button');
    const width = 10;
    let nextRandom = 0;
    let timerId;
    let score = 0;
    const colors = [
        'orange',
        'red',
        'purple',
        'green',
        'blue'
    ]

    // Tetrominos
    const lTetromino = [
        // array with four array items
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ];
    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ];
    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ];
    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ];
    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ];

    // array of all Tetrominos
    const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];
    let currentPosition = 4;
    let currentRotation = 0;

    // select one of the Tetrominos randomly
    // picks random, neared down to the next integer
    let random = Math.floor(Math.random() * theTetrominos.length);
    // will always start at the first rotation of any random Tetromino
    let current = theTetrominos[random][currentRotation];

    // draw randomly chosen Tetromino
    function draw() {
        current.forEach(index => {
            // each index of the CURRENT array, classList.add to add a class to style
            squares[currentPosition + index].classList.add('tetromino');
            squares[currentPosition + index].style.backgroundColor = colors[random];
        })
    }
    // undraw randomly chosen Tetromino
    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino');
            squares[currentPosition + index].style.backgroundColor = '';
        })
    }

    // assign key codes to functions
    // deprecated, was like that in course, todo: it works but fix this
    function control(e) {
        if(e.keyCode === 37) {
            moveLeft();
        } else if (e.keyCode === 38) {
            rotate();
        } else if (e.keyCode === 39) {
            moveRight();
        } else if (e.keyCode === 40) {
            moveDown();
        }
    }
    document.addEventListener('keyup', control);

    // move down
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    // freeze function
    function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'));
            // start a new Tetromino falling
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetrominos.length);
            current = theTetrominos[random][currentRotation];
            currentPosition = 4;
            draw();
            displayShape();
            addScore();
            gameOver();
        }
    }

    // move left, unless it is at the edge or there is a blockage
    function moveLeft() {
        // remove any trace of the shape in its current location to have a clean plate
        undraw();
        // define the left edge
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);

        if(!isAtLeftEdge) currentPosition -= 1;

        // we need a taken class; we won't style it, we will assign it to the spaces that have been taken
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1;
        }
        draw();
    }

    // move right, unless it is at the edge or there is a blockage
    function moveRight() {
        undraw();
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1);
        if(!isAtRightEdge) currentPosition += 1;
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1;
        }
        draw();
    }

    // rotate
    function rotate() {
        undraw();
        currentRotation ++;
        // if the current rotation gets to 4, make it go back to 0
        if(currentRotation === current.length) {
            currentRotation = 0;
        }
        current = theTetrominos[random][currentRotation];
        draw();
    }

    // display up-next Tetromino in mini-grid
    const displaySquares = document.querySelectorAll('.mini-grid div');
    // tell JS how big our mini-grid is
    const displayWidth = 4;
    const displayIndex = 0;

    // the Tetrominos without rotation / original form
    const upNextTetrominos = [
        [1, displayWidth+1, displayWidth*2+1, 2], // lTetromino
        [0, displayWidth, displayWidth+1, displayWidth*2+1], // zTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2], // tTetromino
        [0, 1, displayWidth, displayWidth+1], // oTetromino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] // iTetromino
    ]

    // display the shape in the mini-grid
    function displayShape() {
        // remove any trace of a Tetromino from the entire grid
        displaySquares.forEach(square => {
            square.classList.remove('tetromino');
            square.style.backgroundColor = '';
        })
        upNextTetrominos[nextRandom].forEach(index => {
            displaySquares[displayIndex + index].classList.add('tetromino');
            displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom];
        })
    }

    // add functionality to the button
    startBtn.addEventListener('click', () => {
        if(timerId) {
            clearInterval(timerId);
            timerId = null;
        } else {
            draw();
            timerId = setInterval(moveDown, 1000);
            nextRandom = Math.floor(Math.random() * theTetrominos.length);
            displayShape();
        }
    })

    // add score
    function addScore() {
        for (let i = 0; i < 199; i += width) {
            // i plus every square that makes up a row
            const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];
            if(row.every(index => squares[index].classList.contains('taken'))) {
                score += 10;
                scoreDisplay.innerHTML = score;
                row.forEach(index => {
                    squares[index].classList.remove('taken');
                    squares[index].classList.remove('tetromino');
                    squares[index].style.backgroundColor = '';
                })
                const squaresRemoved = squares.splice(i, width);
                squares = squaresRemoved.concat(squares);
                squares.forEach(cell => grid.appendChild(cell));
            }
        }
    }

    // game over
    function gameOver() {
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            scoreDisplay.innerHTML = 'end';
            clearInterval(timerId);
        }
    }
})

