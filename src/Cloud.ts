import { AssetManager } from "./AssetManager";
import { randomMe } from "./Toolkit";
import { STAGE_HEIGHT } from "./Constants";

export class Cloud{

    private stage:createjs.StageGL;
    
    private assetManager:AssetManager;

    public roulette:number=0;

    public Cloud1:createjs.Sprite;
    public Cloud2:createjs.Sprite;
    public Cloud3:createjs.Sprite;
    public Cloud4:createjs.Sprite;
    public Cloud5:createjs.Sprite;

    public Bolt1:createjs.Sprite;
    public Bolt2:createjs.Sprite;
    public Bolt3:createjs.Sprite;
    public Bolt4:createjs.Sprite;
    public Bolt5:createjs.Sprite;

    public BoltSpeed:number=10;

    constructor(stage:createjs.StageGL, assetManager:AssetManager){

        this.stage=stage;
        this.assetManager=assetManager;

        this.Cloud1=assetManager.getSprite("Sprites","Cloud_",0,0);
        stage.addChild(this.Cloud1);

        this.Cloud2=assetManager.getSprite("Sprites","Cloud_",100,0);
        stage.addChild(this.Cloud2);

        this.Cloud3=assetManager.getSprite("Sprites","Cloud_",200,0);
        stage.addChild(this.Cloud3);

        this.Cloud4=assetManager.getSprite("Sprites","Cloud_",300,0);
        stage.addChild(this.Cloud4);

        this.Cloud5=assetManager.getSprite("Sprites","Cloud_",400,0);
        stage.addChild(this.Cloud5);

        this.Bolt1=this.assetManager.getSprite("Sprites","Bolt_",0,50);
        this.Bolt2=this.assetManager.getSprite("Sprites","Bolt_",100,50);
        this.Bolt3=this.assetManager.getSprite("Sprites","Bolt_",200,50);
        this.Bolt4=this.assetManager.getSprite("Sprites","Bolt_",300,50);
        this.Bolt5=this.assetManager.getSprite("Sprites","Bolt_",400,50);

    }
    
    public Roulette():void{
        
        
        this.roulette=this.roulette+1;

        if (this.roulette==1){
            this.Fire1();
        }

        else if (this.roulette==21){
            this.Fire2();
        }

        else if (this.roulette==41){
            this.Fire3();
        }

        else if (this.roulette==61){
            this.Fire4();
        }

        else if (this.roulette==81){
            this.Fire5();
        }
        
        if (this.roulette>=201){
            this.roulette=0;
        }
    }

    public Fire1():void{

        console.log("Fire!");
        this.Bolt1.x=0;
        this.Bolt1.y=50;
        this.stage.addChild(this.Bolt1);

        if (this.Bolt1.y>STAGE_HEIGHT){
            this.stage.removeChild(this.Bolt1);
        }
    }

    public Fire2():void{

        this.Bolt2.x=100;
        this.Bolt2.y=50;
        this.stage.addChild(this.Bolt2);
        
        if (this.Bolt2.y>STAGE_HEIGHT){
            this.stage.removeChild(this.Bolt2);
        }
    }

    public Fire3():void{
        
        this.Bolt3.x=200;
        this.Bolt3.y=50;
        this.stage.addChild(this.Bolt3);
        
        if (this.Bolt3.y>STAGE_HEIGHT){
            this.stage.removeChild(this.Bolt3);
        }
    }

    public Fire4():void{

        this.Bolt4.x=300;
        this.Bolt4.y=50;
        this.stage.addChild(this.Bolt4);
        
        if (this.Bolt4.y>STAGE_HEIGHT){
            this.stage.removeChild(this.Bolt4);
        }
    }

    public Fire5():void{
 
        this.Bolt5.x=400;
        this.Bolt5.y=50;
        this.stage.addChild(this.Bolt5);
        
        if (this.Bolt5.y>STAGE_HEIGHT){
            this.stage.removeChild(this.Bolt5);
        }
    }
}