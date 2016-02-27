frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://www.udacity.com/course/viewer/#!/c-nd001/l-2696458597/m-2687128535) for self-checking their submission.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
Frogger Game: Getting Started
In this project you will be building your own arcade game. Once finished, your game should look as shown on this video:(https://www.youtube.com/watch?v=SxeHV1kt7iU&feature=youtu.be)

Basic Functionality
In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.


Getting Started

You won’t have to build the game from scratch. We have provided the art assets and game engine for you. You can download or clone them from our repository.
The repository contains css, images, and js folders, as well as an index.html and a README.md file. Once you have downloaded the files we have provided, you will have to edit app.js to build the game.
1.The css folder contains a style.css file which you do not need to edit
2.The images folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder.
3.The js folder also contains the app engine needed to run the game and a resources.js file. You do not need to edit these files.
4.index.html - opening index.html should load the game
5.README.md should contain instructions on how to load and play the game (you will need to add those instructions).
Inside the app.js file, you will need to implement the Player and the Enemy classes, using Object-Oriented JavaScript. Part of the code for the Enemy is provided to you, and you will need to complete the following:
1.The Enemy function, which initiates the Enemy by:
1)Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
2)Setting the Enemy initial location (you need to implement)
3)Setting the Enemy speed (you need to implement)
2.The update method for the Enemy
1)Updates the Enemy location (you need to implement)
2)Handles collision with the Player (you need to implement)
3.You can add your own Enemy methods as needed
You will also need to implement the Player class, and you can use the Enemy class as an example on how to get started. At minimum you should implement the following:
1.The Player function, which initiates the Player by:
1)Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)
2)Setting the Player initial location
2.The update method for the Player (can be similar to the one for the Enemy)
3.The render method for the Player (use the code from the render method for the Enemy)
4.The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
1)Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
2)Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
3)If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
5.You can add your own Player methods as needed.
Once you have completed implementing the Player and Enemy, you should instantiate them by:
6.Creating a new Player object
7.Creating several new Enemies objects and placing them in an array called allEnemies