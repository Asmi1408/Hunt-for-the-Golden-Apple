var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bg, player1_image;

var form, player, game;

var cars, car1, car2, car3, car4, car5;

function preload () {
  player1_image = loadImage ("Images/randomguy.png")
  //car2_image = loadImage ("images/car2.png")
  bg = loadImage ("Images/Cave.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
/*
  if (gameState === 2){
    game.end();
  }*/
}
