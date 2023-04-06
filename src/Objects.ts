import { AssetManager } from "./AssetManager";

import { Player } from "./Player";
import { randomMe } from "./Toolkit";

export class Objects{


    //sprites for the objects
    public HPickUp:createjs.Sprite;

    //public Bolt:createjs.Sprite;

    public Goop:createjs.Sprite;

    public Coin:createjs.Sprite;

    private stage:createjs.StageGL;

    constructor(stage:createjs.StageGL, assetManager:AssetManager){

        this.stage=stage;

        this.HPickUp=assetManager.getSprite("Sprites","Health_",0,0);

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

    public update():void{
        

    }

}