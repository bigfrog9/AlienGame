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
import { Screens } from "./Screens";

// game setup variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
let assetManager:AssetManager;
let screens:Screens;


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
    createjs.Sound.play("Music");

    Background=assetManager.getSprite("BG","Background",0,0);
    stage.addChild(Background);
    
    HealthBar= assetManager.getSprite("Sprites","HealthUI",0,380);
    HealthBar.scaleX=3;
    HealthBar.scaleY=3;
    stage.addChild(HealthBar);

    cloud=new Cloud(stage,assetManager);
    screens=new Screens(stage,assetManager);

    Points1=assetManager.getSprite("Sprites","Numbers1",500,500);
    Points2=assetManager.getSprite("Sprites","Numbers2",500,500);
    Points3=assetManager.getSprite("Sprites","Numbers3",500,500);
    Points4=assetManager.getSprite("Sprites","Numbers4",500,500);
    Points5=assetManager.getSprite("Sprites","Numbers5",500,500);
    
    object=new Objects(stage,assetManager);
    
    player = new Player(stage,assetManager,screens);
    player.position(300,300);
    
    player.Play();

    screens.setScreen();
    
    document.onkeydown = onKeyDown;
    document.onkeyup = onKeyUp;
    
    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");
}

function loopMusic(){
    
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
    
    if(player.alive&&screens.GameState==Screens.PLAYING){

        
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
    
    if (player.Lives<=4&&
    pointHit(player._sprite, object.HPickUp1,15,50)||
    pointHit(player._sprite, object.HPickUp1,25,40)||
    pointHit(player._sprite, object.HPickUp1,40,40)||
    pointHit(player._sprite, object.HPickUp1,50,30)||
    pointHit(player._sprite, object.HPickUp1,60,40)||
    pointHit(player._sprite, object.HPickUp1,70,40)||
    pointHit(player._sprite, object.HPickUp1,83,50)||
    pointHit(player._sprite, object.HPickUp1,72,60)||
    pointHit(player._sprite, object.HPickUp1,55,62)||
    pointHit(player._sprite, object.HPickUp1,30,62)){

        object.HPickUp1.y=0;
        object.HPickUp1.x=0;

        createjs.Sound.play("Health");

        if(player.Lives<4){
            player.Lives++;

        }
        
        stage.removeChild(object.HPickUp1);
    }

    if (player.Lives<=4&&
        pointHit(player._sprite, object.HPickUp2,15,50)||
        pointHit(player._sprite, object.HPickUp2,25,40)||
        pointHit(player._sprite, object.HPickUp2,40,40)||
        pointHit(player._sprite, object.HPickUp2,50,30)||
        pointHit(player._sprite, object.HPickUp2,60,40)||
        pointHit(player._sprite, object.HPickUp2,70,40)||
        pointHit(player._sprite, object.HPickUp2,83,50)||
        pointHit(player._sprite, object.HPickUp2,72,60)||
        pointHit(player._sprite, object.HPickUp2,55,62)||
        pointHit(player._sprite, object.HPickUp2,30,62)){
    
            object.HPickUp2.y=0;
            object.HPickUp2.x=0;
            
            createjs.Sound.play("Health");
            
            if(player.Lives<4){
                player.Lives++;

            }
            stage.removeChild(object.HPickUp2);
    }

    if (player.state==player.OPEN &&
        pointHit(player._sprite, cloud.Bolt1,15,50)||
    pointHit(player._sprite, cloud.Bolt1,25,40)||
    pointHit(player._sprite, cloud.Bolt1,40,40)||
    pointHit(player._sprite, cloud.Bolt1,50,30)||
    pointHit(player._sprite, cloud.Bolt1,60,40)||
    pointHit(player._sprite, cloud.Bolt1,70,40)||
    pointHit(player._sprite, cloud.Bolt1,83,50)||
    pointHit(player._sprite, cloud.Bolt1,72,60)||
    pointHit(player._sprite, cloud.Bolt1,55,62)||
    pointHit(player._sprite, cloud.Bolt1,30,62)){

        cloud.Bolt1.y=0;
        cloud.Bolt1.x=0;

        if(player.state==player.OPEN){
            
            player.state=player.INVINCIBLE;

            stage.removeChild(cloud.Bolt1);
            player.TakeZapDam();
        }

    }

    if (player.state==player.OPEN &&
        pointHit(player._sprite, cloud.Bolt2,15,50)||
    pointHit(player._sprite, cloud.Bolt2,25,40)||
    pointHit(player._sprite, cloud.Bolt2,40,40)||
    pointHit(player._sprite, cloud.Bolt2,50,30)||
    pointHit(player._sprite, cloud.Bolt2,60,40)||
    pointHit(player._sprite, cloud.Bolt2,70,40)||
    pointHit(player._sprite, cloud.Bolt2,83,50)||
    pointHit(player._sprite, cloud.Bolt2,72,60)||
    pointHit(player._sprite, cloud.Bolt2,55,62)||
    pointHit(player._sprite, cloud.Bolt2,30,62)){

        cloud.Bolt2.y=0;
        cloud.Bolt2.x=0;
        
        if(player.state==player.OPEN){
            
            player.state=player.INVINCIBLE;

            stage.removeChild(cloud.Bolt2);
            player.TakeZapDam();
        }

    }

    if (player.state==player.OPEN &&
        pointHit(player._sprite, cloud.Bolt3,15,50)||
    pointHit(player._sprite, cloud.Bolt3,25,40)||
    pointHit(player._sprite, cloud.Bolt3,40,40)||
    pointHit(player._sprite, cloud.Bolt3,50,30)||
    pointHit(player._sprite, cloud.Bolt3,60,40)||
    pointHit(player._sprite, cloud.Bolt3,70,40)||
    pointHit(player._sprite, cloud.Bolt3,83,50)||
    pointHit(player._sprite, cloud.Bolt3,72,60)||
    pointHit(player._sprite, cloud.Bolt3,55,62)||
    pointHit(player._sprite, cloud.Bolt3,30,62)){

        cloud.Bolt3.y=0;
        cloud.Bolt3.x=0;
        
        if(player.state==player.OPEN){
            
            player.state=player.INVINCIBLE;
            
            stage.removeChild(cloud.Bolt3);
            player.TakeZapDam();
        }

    }

    if (player.state==player.OPEN &&
        pointHit(player._sprite, cloud.Bolt4,15,50)||
    pointHit(player._sprite, cloud.Bolt4,25,40)||
    pointHit(player._sprite, cloud.Bolt4,40,40)||
    pointHit(player._sprite, cloud.Bolt4,50,30)||
    pointHit(player._sprite, cloud.Bolt4,60,40)||
    pointHit(player._sprite, cloud.Bolt4,70,40)||
    pointHit(player._sprite, cloud.Bolt4,83,50)||
    pointHit(player._sprite, cloud.Bolt4,72,60)||
    pointHit(player._sprite, cloud.Bolt4,55,62)||
    pointHit(player._sprite, cloud.Bolt4,30,62)){


        cloud.Bolt4.y=0;
        cloud.Bolt4.x=0;
        if(player.state==player.OPEN){
            
            player.state=player.INVINCIBLE;

            stage.removeChild(cloud.Bolt4);
            player.TakeZapDam();
        }

    }

    if (player.state==player.OPEN &&
        pointHit(player._sprite, cloud.Bolt5,15,50)||
    pointHit(player._sprite, cloud.Bolt5,25,40)||
    pointHit(player._sprite, cloud.Bolt5,40,40)||
    pointHit(player._sprite, cloud.Bolt5,50,30)||
    pointHit(player._sprite, cloud.Bolt5,60,40)||
    pointHit(player._sprite, cloud.Bolt5,70,40)||
    pointHit(player._sprite, cloud.Bolt5,83,50)||
    pointHit(player._sprite, cloud.Bolt5,72,60)||
    pointHit(player._sprite, cloud.Bolt5,55,62)||
    pointHit(player._sprite, cloud.Bolt5,30,62)){

        //console.log(player.state);
        
        //console.log("Lives: "+player.Lives);
        
        cloud.Bolt5.y=0;
        cloud.Bolt5.x=0;
        //console.log(player.Moving);

        if(player.state==player.OPEN){
            
            player.state=player.INVINCIBLE;
            //console.log(player.state);
            player.Moving=false;
            player.TakeZapDam();
            stage.removeChild(cloud.Bolt5);


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

            createjs.Sound.play("Coin");

            stage.removeChild(object.Coin);
            addPoint();

            //making sure a coin doesn't appear over the win screen
            if(screens.GameState==Screens.PLAYING){
                object.placeCoin();

            }
            
        }
    }
}

function onTick(e:createjs.Event) {
    // displaying frames per second - comment this out when game is published
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // this is your game loop!
    // ...
    

    //rebuilding the game and resetting everything
    if (screens.GameState==Screens.REBUILD){
        
        stage.removeChild(Points5);

        player.alive=true;

        player.Calmdown();
        player.position(300,300);
        player.Lives=4;
        stage.addChild(player._sprite);
        
        cloud.Bolt1.x=0;
        cloud.Bolt1.y=0;
        cloud.Bolt2.x=0;
        cloud.Bolt2.y=0;
        cloud.Bolt3.x=0;
        cloud.Bolt3.y=0;
        cloud.Bolt4.x=0;
        cloud.Bolt4.y=0;
        cloud.Bolt5.x=0;
        cloud.Bolt5.y=0;

        stage.removeChild(object.HPickUp1);
        stage.removeChild(object.HPickUp2);

        numCoins=0;

        stage.removeChild(object.Coin);

        object.placeCoin();
        console.log(screens.GameState);
        screens.GameState=Screens.PLAYING;
        console.log(screens.GameState);

    }

    if(screens.GameState==Screens.PLAYING){
        checkHealth();
        cloud.Roulette();
        collisionUpdate();
        screens.update();
        
    }


    if(screens.GameState==Screens.PLAYING){

        if (stage.contains(cloud.Bolt1))cloud.Bolt1.y=cloud.Bolt1.y+cloud.BoltSpeed;
        if (stage.contains(cloud.Bolt2))cloud.Bolt2.y=cloud.Bolt2.y+cloud.BoltSpeed;
        if (stage.contains(cloud.Bolt3))cloud.Bolt3.y=cloud.Bolt3.y+cloud.BoltSpeed;
        if (stage.contains(cloud.Bolt4))cloud.Bolt4.y=cloud.Bolt4.y+cloud.BoltSpeed;
        if (stage.contains(cloud.Bolt5))cloud.Bolt5.y=cloud.Bolt5.y+cloud.BoltSpeed;
        
    }

    screens.update();

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
        screens.GameState=Screens.WINSCREEN;
        screens.setScreen();
    }

    if(numCoins==1){
        object.placeHealth1();
    }

    if(numCoins==3){
        object.placeHealth2();
    }

    if (numCoins>=5){
        screens.GameState=Screens.WINSCREEN;
    }
}

main();