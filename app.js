// this is executed after the initial HTML document has been completely loaded and passed
document.addEventListener('DOMContentLoaded', () => {
    // returns the first HTML element (object) with class .grid
    const grid = document.querySelector('.grid');
    // returns an array of objects with all HTML elements in .divs grid
    let squares = Array.from(document.querySelectorAll('.grid div'));
    // returns the first HTML element (object) with ID score
    const ScoreDisplay = document.querySelector('#score');
    // returns the first HTML element (object) with ID start-button
    const StartBtn = document.querySelector('#start-button');
    const width = 10;

    // The Tetrominos, set up as const as their shapes won't change
    const lTetromino = [
        // an array with four items, each array has it's own rotation (= four rotations)
        // how she did this was not understandable, see README for how the tetrominos come together
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

    // select one of the Tetrominos randomly; first rotation
    // picks random, nears down to the next integer
    let random = Math.floor(Math.random()*theTetrominos.length);
    // will give a random Tetromino of our Tetromino array
    // will always start at the first rotation of any random Tetromino
    let current = theTetrominos[random][currentRotation];

    // draw the randomly chosen Tetromino
    function draw() {
        // forEach applies logic for each item of an array
        current.forEach(index => {
            // each index of the CURRENT array, classList.add to add a class to style
            squares[currentPosition + index].classList.add('tetromino');
        })
    }
    // undraw the randomly chosen Tetromino
    // same as the draw() function but with remove() method
    function undraw() {
       current.forEach(index => {
           squares[currentPosition + index].classList.remove('tetromino');
       })
    }

    // make the Tetromino move down every second
    let timerId = setInterval(moveDown, 500);

    // move down funtion
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    // freeze function
    function freeze() {
        // if this statement is true for at least one of our current items in our array
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
           current.forEach(index => squares[currentPosition + index].classList.add('taken'));
           // start a new Tetromino falling
            random = Math.floor(Math.random() * theTetrominos.length);
            current = theTetrominos[random][currentRotation];
            currentPosition = 4;
            draw();
        }
    }

    // move the Tetromino left, unless it's at the edge or there is a blockage
    function moveLeft() {
        undraw();
        // so we won't have Tetrominos in 10, 20, 30 etc
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);

        if(!isAtLeftEdge) currentPosition -= 1;
        // if one of the Tetrominos gets into the space already taken we want to push it back one space
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1;
        }

        draw();
    }



})
