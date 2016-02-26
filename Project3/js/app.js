var game = {
    numOfEnemies : 4,
    speedIndex : 100,
    tileWidth : 101,
    tileHeight : 83,
    canHeight : 606,
    canWidth : 505
};
// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    'use strict';
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() + 1) * game.speedIndex);
    this.width = game.tileWidth / 2;
    this.height = game.tileHeight / 2;
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
    if (this.x >= game.canWidth) {
        this.x = -game.canWidth * 2;
        createEnemy(1);
    } else if (this.x >= -game.tileWidth) {
        this.x = this.x + this.speed * dt;
    }
    if (isColliding(this)) {
        player.x = 0;
        player.y = 404;
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
    this.width = game.tileWidth / 2;
    this.height = game.tileHeight / 2;
};

Player.prototype.update = function () {
    'use strict';
    if (this.direction === 'l') {
        this.x = this.x - game.tileWidth;
    } else if (this.direction === 'd') {
        this.y = this.y + game.tileHeight;
    } else if (this.direction === 'r') {
        this.x = this.x + game.tileWidth;
    } else if (this.direction === 'u') {
        this.y = this.y - game.tileHeight;
    }
    this.direction = 'nothing';
};
Player.prototype.render = function () {
    'use strict';
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function (input) {
    'use strict';
    if (input === 'left' && this.x >= game.tileWidth) {
        this.direction = 'l';
    } else if (input === 'up' && this.y > 0) {
        this.direction = 'u';
    } else if (input === 'right' && this.x < game.canWidth - game.tileWidth) {
        this.direction = 'r';
    } else if (input === 'down' && this.y < game.canHeight - game.tileHeight * 3) {
        this.direction = 'd';
    } else {
        this.direction = 'nothing';
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(0, 404);
var allEnemies = [];
var createEnemy = function (num) {
    'use strict';
    var i;
    for (i = 0; i < num; i+=1) {
        allEnemies.push(new Enemy(-game.tileWidth, Math.floor(Math.random() * 3 + 1) * game.tileHeight - 22));
    }
};
createEnemy(game.numOfEnemies);
function isColliding(enemy) {
    'use strict';
    if (enemy.x < player.x + player.width && enemy.x + enemy.width > player.x && enemy.y < player.y + player.height && enemy.height + enemy.y > player.y) {
        return true;
    } else {
        return false;
    }
}
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
