import { AssetManager } from "./AssetManager";

import { Player } from "./Player";
import { Screens } from "./Screens";
import { randomMe } from "./Toolkit";

export class Objects{


    //sprites for the objects
    public HPickUp1:createjs.Sprite;
    public HPickUp2:createjs.Sprite;
    
    //public Bolt:createjs.Sprite;

    public Goop:createjs.Sprite;

    public Coin:createjs.Sprite;

    private stage:createjs.StageGL;

    screens:Screens;

    constructor(stage:createjs.StageGL, assetManager:AssetManager){

        this.screens=new Screens(stage,assetManager);
        this.stage=stage;

        this.HPickUp1=assetManager.getSprite("Sprites","Health_",0,0);
        this.HPickUp2=assetManager.getSprite("Sprites","Health_",0,0);

        //this.Bolt=assetManager.getSprite("Sprites","Bolt_",0,0);

        this.Goop=assetManager.getSprite("Sprites","Goop_",0,0);

        this.Coin=assetManager.getSprite("Sprites","Coins_",0,0);

        this.placeCoin();
        
    }

    public placeCoin(){
        
        let randX:number=randomMe(10,490);
        let randY:number=randomMe(10,300);

        console.log(randX+" "+randY);
        this.Coin.x=randX;
        this.Coin.y=randY;

        this.stage.addChild(this.Coin);

        console.log("Coin placed!");

    }

    public placeHealth1(){
        
        let randX:number=randomMe(10,490);
        let randY:number=randomMe(10,490);

        this.HPickUp1.x=randX;
        this.HPickUp1.y=randY;

        this.stage.addChild(this.HPickUp1);

    }
    
    public placeHealth2(){
        
        let randX:number=randomMe(10,490);
        let randY:number=randomMe(10,490);

        this.HPickUp2.x=randX;
        this.HPickUp2.y=randY;

        this.stage.addChild(this.HPickUp2);

    }

    public update():void{
        

    }

}