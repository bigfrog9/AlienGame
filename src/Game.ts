// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST } from "./Constants";
import { AssetManager } from "./AssetManager";

//importing custom classes
import { Player } from "./Player";
import { Objects } from "./Objects";
import { boxHit, pointHit } from "./Toolkit";
import { Cloud } from "./Cloud";


// game setup variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
let assetManager:AssetManager;

let object:Objects;
let player:Player;
let cloud:Cloud;

let Background:createjs.Sprite;
let HealthBar:createjs.Sprite;
let Points1:createjs.Sprite;
let Points2:createjs.Sprite;
let Points3:createjs.Sprite;
let Points4:createjs.Sprite;
let Points5:createjs.Sprite;

// game object variables
// ...

let leftKey:boolean=false;
let upKey:boolean=false;
let rightKey:boolean=false;
let downKey:boolean=false;


let numCoins:number=0;

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> all assets loaded – ready to add sprites to game");

    // construct game objects here
    // ...

    Background=assetManager.getSprite("BG","Background",0,0);
    stage.addChild(Background);
    
    HealthBar= assetManager.getSprite("Sprites","HealthUI",0,380);
    HealthBar.scaleX=3;
    HealthBar.scaleY=3;
    stage.addChild(HealthBar);

    cloud=new Cloud(stage,assetManager);
    
    Points1=assetManager.getSprite("Sprites","Numbers1",500,500);
    Points2=assetManager.getSprite("Sprites","Numbers2",500,500);
    Points3=assetManager.getSprite("Sprites","Numbers3",500,500);
    Points4=assetManager.getSprite("Sprites","Numbers4",500,500);
    Points5=assetManager.getSprite("Sprites","Numbers5",500,500);
    
    object=new Objects(stage,assetManager);
    
    player = new Player(stage,assetManager);
    player.position(300,300);
    
    player.Play();
    
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    
    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");
}

function checkHealth(){
    
    //console.log(player.Lives+" lives left!");
    if (player.Lives==4){
        HealthBar.gotoAndStop(15);
    }
    
    else if (player.Lives==3){

        
        HealthBar.gotoAndStop(16)
    }

    else if (player.Lives==2){
        HealthBar.gotoAndStop(17)
    }

    else if (player.Lives==1){
        HealthBar.gotoAndStop(18)
    }
}

function readKeys(){
    if (leftKey){
        //console.log("Going left");
        
        player.Moving=true;
        
        player.direction=0;
    }
    else if (upKey){
        //console.log("Going up");
        
        player.Moving=true;
        
        player.direction=1;
    }
    else if(rightKey){
        //console.log("Going right");
        
        player.Moving=true;
        
        player.direction=2;
    }
    else if(downKey){
        //console.log("Going down");
        
        player.Moving=true;
        
        player.direction=3;
    }
    
    else{
        player.Moving=false;
    }
}

function onKeyDown(e:KeyboardEvent):void {
    if (e.key == "ArrowLeft") leftKey = true;
    else if (e.key == "ArrowRight") rightKey = true;
    else if (e.key == "ArrowUp") upKey = true;
    else if (e.key == "ArrowDown") downKey = true;
}

function onKeyUp(e:KeyboardEvent):void{
    if (e.key == "ArrowLeft") leftKey = false;
    else if (e.key == "ArrowRight") rightKey = false;
    else if (e.key == "ArrowUp") upKey = false;
    else if (e.key == "ArrowDown") downKey = false;
}

function collisionUpdate():void{
    
    if (pointHit(player._sprite, cloud.Bolt1,15,50)||
    pointHit(player._sprite, cloud.Bolt1,25,40)||
    pointHit(player._sprite, cloud.Bolt1,40,40)||
    pointHit(player._sprite, cloud.Bolt1,50,30)||
    pointHit(player._sprite, cloud.Bolt1,60,40)||
    pointHit(player._sprite, cloud.Bolt1,70,40)||
    pointHit(player._sprite, cloud.Bolt1,83,50)||
    pointHit(player._sprite, cloud.Bolt1,72,60)||
    pointHit(player._sprite, cloud.Bolt1,55,62)||
    pointHit(player._sprite, cloud.Bolt1,30,62)){

        if(player.Moving){
            
            stage.removeChild(cloud.Bolt1);
            player.TakeZapDam();
        }

    }

    if (pointHit(player._sprite, cloud.Bolt2,15,50)||
    pointHit(player._sprite, cloud.Bolt2,25,40)||
    pointHit(player._sprite, cloud.Bolt2,40,40)||
    pointHit(player._sprite, cloud.Bolt2,50,30)||
    pointHit(player._sprite, cloud.Bolt2,60,40)||
    pointHit(player._sprite, cloud.Bolt2,70,40)||
    pointHit(player._sprite, cloud.Bolt2,83,50)||
    pointHit(player._sprite, cloud.Bolt2,72,60)||
    pointHit(player._sprite, cloud.Bolt2,55,62)||
    pointHit(player._sprite, cloud.Bolt2,30,62)){

        if(player.Moving){
            
            stage.removeChild(cloud.Bolt2);
            player.TakeZapDam();
        }

    }

    if (pointHit(player._sprite, cloud.Bolt3,15,50)||
    pointHit(player._sprite, cloud.Bolt3,25,40)||
    pointHit(player._sprite, cloud.Bolt3,40,40)||
    pointHit(player._sprite, cloud.Bolt3,50,30)||
    pointHit(player._sprite, cloud.Bolt3,60,40)||
    pointHit(player._sprite, cloud.Bolt3,70,40)||
    pointHit(player._sprite, cloud.Bolt3,83,50)||
    pointHit(player._sprite, cloud.Bolt3,72,60)||
    pointHit(player._sprite, cloud.Bolt3,55,62)||
    pointHit(player._sprite, cloud.Bolt3,30,62)){

        if(player.Moving){
            
            stage.removeChild(cloud.Bolt3);
            player.TakeZapDam();
        }

    }

    if (pointHit(player._sprite, cloud.Bolt4,15,50)||
    pointHit(player._sprite, cloud.Bolt4,25,40)||
    pointHit(player._sprite, cloud.Bolt4,40,40)||
    pointHit(player._sprite, cloud.Bolt4,50,30)||
    pointHit(player._sprite, cloud.Bolt4,60,40)||
    pointHit(player._sprite, cloud.Bolt4,70,40)||
    pointHit(player._sprite, cloud.Bolt4,83,50)||
    pointHit(player._sprite, cloud.Bolt4,72,60)||
    pointHit(player._sprite, cloud.Bolt4,55,62)||
    pointHit(player._sprite, cloud.Bolt4,30,62)){

        if(player.Moving){
            
            stage.removeChild(cloud.Bolt4);
            player.TakeZapDam();
        }

    }

    if (pointHit(player._sprite, cloud.Bolt5,15,50)||
    pointHit(player._sprite, cloud.Bolt5,25,40)||
    pointHit(player._sprite, cloud.Bolt5,40,40)||
    pointHit(player._sprite, cloud.Bolt5,50,30)||
    pointHit(player._sprite, cloud.Bolt5,60,40)||
    pointHit(player._sprite, cloud.Bolt5,70,40)||
    pointHit(player._sprite, cloud.Bolt5,83,50)||
    pointHit(player._sprite, cloud.Bolt5,72,60)||
    pointHit(player._sprite, cloud.Bolt5,55,62)||
    pointHit(player._sprite, cloud.Bolt5,30,62)){

        if(player.Moving){
            
            stage.removeChild(cloud.Bolt5);
            player.TakeZapDam();
        }

    }
    
    if (pointHit(player._sprite, object.Goop,15,50)||
    pointHit(player._sprite, object.Goop,25,40)||
    pointHit(player._sprite, object.Goop,40,40)||
    pointHit(player._sprite, object.Goop,50,30)||
    pointHit(player._sprite, object.Goop,60,40)||
    pointHit(player._sprite, object.Goop,70,40)||
    pointHit(player._sprite, object.Goop,83,50)||
    pointHit(player._sprite, object.Goop,72,60)||
    pointHit(player._sprite, object.Goop,55,62)||
    pointHit(player._sprite, object.Goop,30,62)){
        
        if(player.Moving){
            
            player.TakeAcidDam();
            stage.removeChild(object.Goop);
        }

    }

    if (pointHit(player._sprite, object.Coin,15,50)||
    pointHit(player._sprite, object.Coin,25,40)||
    pointHit(player._sprite, object.Coin,40,40)||
    pointHit(player._sprite, object.Coin,50,30)||
    pointHit(player._sprite, object.Coin,60,40)||
    pointHit(player._sprite, object.Coin,70,40)||
    pointHit(player._sprite, object.Coin,83,50)||
    pointHit(player._sprite, object.Coin,72,60)||
    pointHit(player._sprite, object.Coin,55,62)||
    pointHit(player._sprite, object.Coin,30,62)){

        if(player.Moving){

            stage.removeChild(object.Coin);
            addPoint();
            object.placeCoin();
            
        }
    }
}

function onTick(e:createjs.Event) {
    // displaying frames per second - comment this out when game is published
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // this is your game loop!
    // ...
    
    checkHealth();
    cloud.Roulette();
    collisionUpdate();

    cloud.Bolt1.y=cloud.Bolt1.y+cloud.BoltSpeed;
    cloud.Bolt2.y=cloud.Bolt2.y+cloud.BoltSpeed;
    cloud.Bolt3.y=cloud.Bolt3.y+cloud.BoltSpeed;
    cloud.Bolt4.y=cloud.Bolt4.y+cloud.BoltSpeed;
    cloud.Bolt5.y=cloud.Bolt5.y+cloud.BoltSpeed;

    player.Play();

    readKeys();

    // update the stage
    stage.update();
}

// --------------------------------------------------- main method
function main():void {
    console.log(">> game initialization");
    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;    

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);
}

function addPoint(){

    if (numCoins<5){
        numCoins++;
    }

    if (numCoins==1){
        stage.addChild(Points1);
    }

    else if (numCoins==2){
        stage.removeChild(Points1);
        stage.addChild(Points2);
    }

    else if (numCoins==3){
        stage.removeChild(Points2);
        stage.addChild(Points3);
    }

    else if (numCoins==4){
        stage.removeChild(Points3);
        stage.addChild(Points4);
    }

    else if (numCoins==5){
        stage.removeChild(Points4);
        stage.addChild(Points5);
    }
}

main();