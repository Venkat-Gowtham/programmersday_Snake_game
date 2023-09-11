
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const scoreElement = document.getElementById("score");

    let snake = [{ x: 10, y: 10 }];
    let food = { x: 15, y: 15 };
    let dx = 1;
    let dy = 0;
    let score = 0;

    function drawSnakePart(part) {
        ctx.fillStyle = "green";
        ctx.fillRect(part.x * 20, part.y * 20, 20, 20);
    }

    function drawFood() {
        ctx.fillStyle = "orange";
        ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
    }

    function moveSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        
        if (head.x < 0) head.x = canvas.width / 2 - 1;
        if (head.x >= canvas.width / 20) head.x = 0;
        if (head.y < 0) head.y = canvas.height / 2 - 1;
        if (head.y >= canvas.height / 20) head.y = 0;
        
        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            food = { x: Math.floor(Math.random() * (canvas.width / 20)), y: Math.floor(Math.random() * (canvas.height / 20)) };
            score++;
            scoreElement.textContent = score;
        } else {
            snake.pop();
        }
    }

    function checkCollision() {
        for (let i = 1; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                return true;
            }
        }
            return false;
        }

        let lastTime = 0;  

function gameLoop(currentTime) {
    const deltaTime = currentTime - lastTime; 
    if (deltaTime >= 100) {  
        lastTime = currentTime;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        moveSnake();

        if (checkCollision()) {
            alert("Game Over! Score: " + score);
            snake = [{ x: 10, y: 10 }];
            dx = 1;
            dy = 0;
            score = 0;
            scoreElement.textContent = score;
        }

        drawSnakePart(snake[0]);
        for (let i = 1; i < snake.length; i++) {
            drawSnakePart(snake[i]);
        }

        drawFood();
    }

    requestAnimationFrame(gameLoop);
}


        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    dx = 0;
                    dy = -1;
                    break;
                case "ArrowDown":
                    dx = 0;
                    dy = 1;
                    break;
                case "ArrowLeft":
                    dx = -1;
                    dy = 0;
                    break;
                case "ArrowRight":
                    dx = 1;
                    dy = 0;
                    break;
            }
        });

        gameLoop();



// let foodsize=25;
// const canvas= document.getElementById('mysnake');
// const ctx=canvas.getContext('2d');
// ctx.fillStyle='skyblue';
// ctx.fillRect(0,0,300,300);
// // ctx.strokeStyle = 'red'; // Set stroke color to blue
// // ctx.strokeRect(150, 50, 100, 50);
// // function fun() {
// // 	// body...
// // 	const x= document.getElementById('temp')
// // 	x.style.background='red';
// // 	document.body.style.background='green';             practice
// // }
// foodx=Math.floor(Math.random()*150)
// foody=Math.floor(Math.random()*150)

// ctx.fillStyle='yellow';
// ctx.fillRect(foodx,foody,20,10);

// ctx.fillStyle='orange'
// ctx.fillRect(20,20,20,10);
