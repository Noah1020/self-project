const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var allPlayers;
var gameState = 0;
var playerCount = 0;

var game, form, player;

var snowman1, snowman2, snowman3, snowman4;
var snowmans;
var snowmanImage;
var treeImage;

var tree1;
var tree2;
var tree3;
var tree4;
var tree1Group;


function preload(){

  snowmanImage = loadImage("snowman.png");
  treeImage = loadImage("tree.png");

}


function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
///
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  tree1Group = new Group();



}
function draw() {
  background(230);
  Engine.update(engine);
///
 

if(playerCount === 4){
  game.update(1);
}
if(gameState === 1){
  clear();
  game.play();
}


}