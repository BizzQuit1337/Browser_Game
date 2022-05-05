const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d")

class Player {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vel = {
            x: 0,
            y: 0
        }
        this.width = 70;
        this.height = 100;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.draw()
        this.x += this.vel.x
        this.y += this.vel.y
    }
}

class Wood {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;

        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Stone {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;

        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 6, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

const player = new Player(400, 250, 'green');

for(let i=0; i < Math.floor(Math.random() * 21); i++) {
    var posX = Math.floor(Math.random() * 801);
    var posY = Math.floor(Math.random() * 501);
    const wood = new Wood(posX, posY, 'brown');
    wood.draw();
}
for(let i=0; i < Math.floor(Math.random() * 11); i++) {
    var posX = Math.floor(Math.random() * 801);
    var posY = Math.floor(Math.random() * 501);
    const wood = new Wood(posX, posY, 'grey');
    wood.draw();
}

function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0, canvas.width, canvas.height)
    player.update()
}
animate()

addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'a':
            player.vel.x = -5;
            break
        case 'w':
            player.vel.y = -5;
            break
        case 'd':
            player.vel.x = 5;
            break
        case 's':
            player.vel.y = 5;
            break

    }
})
