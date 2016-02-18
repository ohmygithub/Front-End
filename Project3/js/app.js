// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random()*3);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >= 505) {
        this.x = x - 101;
    } else {
        this.x = this.x + this.speed * dt;
    }
};

Enemy.prototype.isColliding = function() {

}



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, direction) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.direction = direction;
};
Player.prototype.update = function() {
    if (this.direction === 'l') {
        this.x = this.x - 101;
    } else if (this.direction === 'u') {
        this.y = this.y + 101;
    } else if (this.direction === 'r') {
        this.x = this.x + 101;
    } else if (this.direction === 'd') {
        this.y = this.y - 101;
    } else {
        this.x = this.x;
    }
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(input) {
    if (input === 37 && this.x >= 101) {
        this.direction === 'l';
    } else if (input === 38 && this.y <= 505) {
        this.direction === 'u';
    } else if (input === 39 && this.x <= 404) {
        this.direction === 'r';
    } else if (input === 40 && this.y >= 101) {
        this.direction === 'd';
    } else {
        this.direction === 'nothing';
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies = [];
for(var i = 0; i < 4; i++) {
    allEnemies.push(new Enemy(0, Math.floor(Math.random() * 5)));
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
