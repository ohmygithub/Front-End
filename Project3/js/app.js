var game = {
    NUM_OF_ENEMIES : 4,
    SPEED_INDEX : 100,
    TILE_WIDTH : 101,
    TILE_HEIGHT : 83,
    CAN_HEIGHT : 606,
    CAN_WIDTH : 505
};
// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    'use strict';
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() + 1) * game.SPEED_INDEX);
    this.width = game.TILE_WIDTH / 2;
    this.height = game.TILE_HEIGHT / 2;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    'use strict';
    if (this.x >= game.CAN_WIDTH) {
        this.x = -game.CAN_HEIGHT * 2;
        createEnemy(1);
    } else if (this.x >= -game.TILE_WIDTH) {
        this.x = this.x + this.speed * dt;
    }
    if (this.isColliding()) {
        player.x = 0;
        player.y = 404;
    }
};

Enemy.prototype.isColliding = function () {
    'use strict';
    if (this.x < player.x + player.width && this.x + this.width > player.x && this.y < player.y + player.height && this.height + this.y > player.y) {
        return true;
    } else {
        return false;
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y, direction) {
    'use strict';
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.width = game.TILE_WIDTH / 2;
    this.height = game.TILE_HEIGHT / 2;
};

Player.prototype.update = function () {
    'use strict';
    if (this.y <= 0) {
        this.x = 0;
        this.y = 404;
    } else if (this.direction === 'l') {
        this.x = this.x - game.TILE_WIDTH;
    } else if (this.direction === 'd') {
        this.y = this.y + game.TILE_HEIGHT;
    } else if (this.direction === 'r') {
        this.x = this.x + game.TILE_WIDTH;
    } else if (this.direction === 'u') {
        this.y = this.y - game.TILE_HEIGHT;
    }
    this.direction = 'nothing';
    console.log('y is '+this.y);
};
Player.prototype.render = function () {
    'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function (input) {
    'use strict';
    if (input === 'up' && this.y > 0) {
        this.direction = 'u';
    } else if (input === 'left' && this.x >= game.TILE_WIDTH) {
        this.direction = 'l';
    } else if (input === 'right' && this.x < game.CAN_WIDTH - game.TILE_WIDTH) {
        this.direction = 'r';
    } else if (input === 'down' && this.y < game.CAN_HEIGHT - game.TILE_HEIGHT * 3) {
        this.direction = 'd';
    } else {
        this.direction = 'nothing';
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(0, 404, 'nothing');
var allEnemies = [];
var createEnemy = function (num) {
    'use strict';
    var i;
    for (i = 0; i < num; i += 1) {
        allEnemies.push(new Enemy(-game.TILE_WIDTH, Math.floor(Math.random() * 3 + 1) * game.TILE_HEIGHT - 22));
    }
};
createEnemy(game.NUM_OF_ENEMIES);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    'use strict';
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
