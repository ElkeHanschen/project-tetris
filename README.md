# Basic JavaScript Tetris Game - Freecodecamp YouTube Video
"Learn the basics of JavaScript by coding a Tetris game from scratch."
  
IDE used in the tutorial video: Atom (I used PhpStorm).  

## Course / Video Contents
- Introduction  
- Setting up the project  
- HTML Basics  
- CSS Basics  
- Explaining Variables  
- Working with Arrays  
- What exactly is a function?  
- Arrow Functions and `forEach()`  
- Drawing Tetrominos using `classList.add()`  
- Times and intervals  
- Using Modulus to define our place on the grid  
- Keycodes and events  
- Choosing items from Arrays  
- Displaying the 'Next Up' Tetromino  
- Adding a start and pause game function  
- `Splice()`  
- `Splice()`, `concat()` and `appendChild()`  
- Game over using `some()` and `innerHTML`  
- Assigning colors to our Tetrominos  

## Here are some of the JavaScript methods used in this course:
`addEventListener()`  
`querySelector()`  
`querySelectorAll()`  
`keyCode()`  
`Math.floor()`  
`Math.random()`  
`length`  
`forEach()`  
`splice()`  
`clearInterval()`  
`setInterval()`  
`some()`  
`innerHTML()`
`every()`  
`add()`  
`remove()`  
`contains()` 

## General info
- Game is based on a grid, 20 squares tall and 10 squares wide  
- As this makes 200 `<div>s` I've installed [Emmet](https://plugins.jetbrains.com/plugin/7450-emmet-everywhere) to not create all of them manually.  
![Scribble Tetrominos](screenshots/scribble-of-tetrominos.png)  

## Rendered Tetromino Arrays
See screenshots below for better understanding what is happening in `app.js`, from line 23 on.  

All Tetrominos - lTetromino, zTetromino, tTetromino, oTetromino, iTetromino  
![All Tetrominos](screenshots/all-tetrominos-01.png)  

All Tetrominos - lTetromino, zTetromino, tTetromino, oTetromino, iTetromino  
![All Tetrominos](screenshots/all-tetrominos-02.png)  

lTetromino  
![The Tetrominos](screenshots/theTetrominos-00-02.png) 

## How to run it
Right now, this project files are not bundled / do not run with any run command.  
The `index.html` runs via in IDE configured browser (in my case Chrome).  

Start the game in clicking the Start/Pause button.  
Use arrow keys to navigate:  
- Arrow left = move left  
- Arrow right = move right  
- Arrow down = move down  
- Arrow up = turn clockwise  

The little beige grid on the right will show you the next Tetromino falling. 

## Sources
[FreeCodeCamp article](https://www.freecodecamp.org/news/learn-javascript-by-creating-a-tetris-game/)  
[Video: Code Tetris: JavaScript Tutorial for Beginners](https://www.youtube.com/watch?v=rAUn1Lom6dw)  
[Tetris Basic on GitHub](https://github.com/kubowania/Tetris-Basic) 

# Conclusion
## Personal Expectation Management towards the course
- Relied on everything I've encountered via freecodecamp by now, which was mostly very valuable, so when I got this suggestion handed in and saw the length of the course I decided to go for it  
- Actively coding JavaScript
- Short (time constraints)
- Easy to code along
- Quick to get done

## PRO
- Short-ish course  
- Easy to code along  
- After finishing, the desire to clean up this mess (which I did not do as I want to do something new)

## CON generally
"This is a great course for people who have never touched code before or people who want to review the fundamentals."  
- I would never recommend this to someone who has never touched code before as they would not learn anything.  
- If you look at the content of the course and take into consideration that the course length is 1:36:07 - you quickly figure out yourself that they are rushing through parts and do not explain thoroughly  
- This also lead to a common use case that in reality, you take way longer that the proclaimed period of time  
- Accent of tutor: "Tetromino" = not even YouTube's CC was working, so there you get "otra Mina", "touch arena" or even "El techno me know" due to the extreme accent   

## CON technically
- Not responsive  
- Naming  
- Implicitly declaring variables in course  
- Not using spaces, brackets, parenthesis, quotes, backticks, semicolons properly/consistently  
- `keyCode` event is deprecated - video is from May 2020, so that's sub optimal to say the least  
- Generally some code seems messy for the sake of showing quick results
