const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d")

class Player {
    constructor(x, y, color, sprite) {
        this.x = x;
        this.y = y;
        this.vel = {
            x: 0,
            y: 0
        }

        const image = new Image()
        image.src = 'Gather_Game/caveMan.png'

        this.image = image
        this.width = 70;
        this.height = 100;
        //this.color = color;
    }

    draw() {
        ctx.beginPath();
        //ctx.fillStyle = this.color;
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x, this.y)
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

        const image = new Image()
        image.src = 'Gather_Game/wood.png'

        this.image = image
        //this.color = color;

    }

    draw() {
        ctx.beginPath();
        //ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
        //ctx.fillStyle = this.color;
        //ctx.fill();
        ctx.drawImage(this.image, this.x, this.y)
    }
}

class Stone {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;

        const image = new Image()
        image.src = 'Gather_Game/stone.png'

        this.image = image
        //this.color = color;
    }

    draw() {
        ctx.beginPath();
        //ctx.arc(this.x, this.y, 6, 0, Math.PI*2);
        //ctx.fillStyle = this.color;
        //ctx.fill();
        ctx.drawImage(this.image, this.x, this.y)
    }
}

const player = new Player(400, 250, 'green');

function makeArray(rarity, entity, entityClass, color) {
    var myArray = [];
    for(let i=0; i < Math.floor(Math.random() * rarity); i++) {
        var posX = Math.floor(Math.random() * 801);
        var posY = Math.floor(Math.random() * 501);
        const entity = new entityClass(posX, posY, color);
        myArray.push(entity)
    }
    return myArray
}
var metal = makeArray(11, 'stone', Stone, 'grey');
var woods = makeArray(21, 'wood', Wood, 'brown')

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0, canvas.width, canvas.height);  
    player.update();
    for(let j=0;j < metal.length;j++) {
        metal[j].draw()
        if (metal[j].x == player.x || metal[j].y == player.y) {
            //stoneCounter++
            console.log('metal collected')
            metal = metal.splice(j, j)
        }
    }
    for(let k=0;k < woods.length; k++) {
        woods[k].draw()
        if (woods[k].x == player.x || woods[k].y == player.y) {
            //woodCounter++
            console.log('wood collected')
            woods = woods.splice(k, k)
        }
    }
    ;

    
    
}

animate(metal)

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

addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'a':
            player.vel.x = 0;
            break
        case 'w':
            player.vel.y = 0;
            break
        case 'd':
            player.vel.x = 0;
            break
        case 's':
            player.vel.y = 0;
            break
    }
})
