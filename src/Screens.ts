import { AssetManager } from "./AssetManager";
import { Objects } from "./Objects";

export class Screens{

    //states of the game

    public static STARTSCREEEN:number=0;
    public static PLAYING:number=1;
    public static LOSESCREEN:number=2;
    public static WINSCREEN:number=3
    public static REBUILD:number=4

    public GameState:number;


    private stage;

    //the screens

    public screen1:createjs.Sprite;
    public screen2:createjs.Sprite;
    public screen3:createjs.Sprite;

    //the buttons

    public retryLose:createjs.Sprite;
    public retryWin:createjs.Sprite;
    public start:createjs.Sprite;

    
    constructor(stage:createjs.StageGL, assetManager:AssetManager){
        this.stage=stage;
        
        this.GameState=Screens.WINSCREEN;

        this.retryLose=assetManager.getSprite("Buttons","Buttons",200,200);
        this.retryWin=assetManager.getSprite("Buttons","Buttons",200,300);
        this.start=assetManager.getSprite("Buttons","Buttons",200,200);

        this.screen1=assetManager.getSprite("Screens","Screen1",0,0);
        this.screen2=assetManager.getSprite("Screens","Screen2",0,0);
        this.screen3=assetManager.getSprite("Screens","Screen3",0,0);
    }


    //checking for clicks
    public update(){

        this.retryLose.on("mousedown",this.restart,this);
        this.retryWin.on("mousedown",this.restart,this);
        this.start.on("mousedown",this.begin,this);
    }

    public setScreen(){

        if (this.GameState==Screens.STARTSCREEEN){

            //this.screen1.gotoAndStop("Screen1");
            this.stage.addChild(this.screen1);
            
            this.start.gotoAndStop(2);
            this.stage.addChild(this.start);
        }

        else if (this.GameState==Screens.LOSESCREEN){

            this.stage.addChild(this.screen2);

            this.stage.addChild(this.retryLose);
        }

        else if (this.GameState==Screens.WINSCREEN){
            
            this.stage.addChild(this.screen3);

            this.retryWin.gotoAndStop(4);
            this.stage.addChild(this.retryWin);
            
        }
    }
    
    public begin(){
        
        createjs.Sound.play("Select");

        this.GameState=Screens.PLAYING;
        this.stage.removeChild(this.screen1);
        this.stage.removeChild(this.start);
    }

    public restart(){

        createjs.Sound.play("Select");
        
        this.GameState=Screens.REBUILD;
        this.setScreen();

        //removing lose screen
        this.stage.removeChild(this.screen2);
        this.stage.removeChild(this.retryLose);

        //removing win screen
        this.stage.removeChild(this.screen3);
        this.stage.removeChild(this.retryWin);

        Screens.REBUILD;
    }

}