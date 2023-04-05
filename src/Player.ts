import { AssetManager } from "./AssetManager";
import { STAGE_HEIGHT } from "./Constants";
import { STAGE_WIDTH } from "./Constants";

export class Player{
    

    //player character
    private _sprite:createjs.Sprite;
    private _speed:number;


    private stage:createjs.StageGL;

    public direction:number;
    //left=0,up=1,right=2,down=3

    public Moving:boolean;

    // public static STOPPED:number=0;
    // public static UP:number=1;
    // public static DOWN:number=2;
    // public static LEFT:number=3;
    // public static RIGHT:number=4;



    public Lives:number;

    constructor(stage:createjs.StageGL, assetManager:AssetManager){
        
        this._speed=3;
        this.Moving=false;

        this._sprite= assetManager.getSprite("AlienGame","Floating",0,0);


        stage.addChild(this._sprite);
    }

    public Play(e:createjs.Event):void{
        
        this._sprite.gotoAndPlay("Floating");

        let sprite:createjs.Sprite = this._sprite;

        if(this.Moving){

            //pressed left
            if (this.direction=0){
                
            }

            //pressed up
            else if(this.direction=1){

            }

            //pressed right
            else if(this.direction=2){

            }
            //pressed down
            else if(this.direction=3){

            }
        }
    }

    public TakeAcidDam():void{
        if(this.Lives<=0){this.AcidDie}
        
        else {
            this._sprite.gotoAndPlay("Damage");

            this._sprite.on("animationend",this.Play);
        }
    }

    public AcidDie():void{
        this.Moving=false;
        this._sprite.gotoAndPlay("Acid")
    }

    public TakeZapDam():void{
        if(this.Lives<=0){this.ZapDie}
    }

    public ZapDie():void{
        this.Moving=false;
        this._sprite.gotoAndPlay("Shocked")
    }

    public Heal():void{
        
        if (this.Lives<4){this.Lives++;}
    }
}