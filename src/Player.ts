import { AssetManager } from "./AssetManager";
import { STAGE_HEIGHT } from "./Constants";
import { STAGE_WIDTH } from "./Constants";

export class Player{
    

    //player character
    public _sprite:createjs.Sprite;
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
        
        this.Lives=4;
        this._speed=5;
        this.Moving=false;
        this.stage=stage;

        this._sprite= assetManager.getSprite("Sprites","Floating",0,0);

        this._sprite.play();

        stage.addChild(this._sprite);
    }

    public Play():void{
        
        //this._sprite.gotoAndPlay("Floating");

        let sprite:createjs.Sprite = this._sprite;

        if(this.Moving){

            //pressed left
            if (this.direction==0){

                //console.log("Heading left!");
                if (sprite.x>0){sprite.x=sprite.x-this._speed}
            }

            //pressed up
            else if(this.direction==1){
                //console.log("Heading up!");

                if (sprite.y>0){sprite.y=sprite.y-this._speed}
            }

            //pressed right
            else if(this.direction==2){
                //console.log("Heading right!");

                if (sprite.x<STAGE_WIDTH-70){sprite.x=sprite.x+this._speed}
            }

            //pressed down
            else if(this.direction==3){
                //console.log("Heading down!");

                if (sprite.y<STAGE_HEIGHT-75){sprite.y=sprite.y+this._speed}
            }
        }
    }

    public position(x:number,y:number):void{
        this._sprite.x=x;
        this._sprite.y=y;
    }

    public TakeAcidDam():void{
        this.Moving=false;

        if(this.Lives<=0){this.AcidDie}
        
        else {
            this.Lives=this.Lives-1;

            this._sprite.gotoAndPlay("Damage");
            this.Lives=this.Lives-1;
            this._sprite.on("animationend",this.Calmdown,this);
        }
    }

    public AcidDie():void{
        this.Moving=false;
        this._sprite.gotoAndPlay("Acid");
        this._sprite.on("animationend",this.Dead,this);
    }

    public Dead():void{

        this.stage.removeChild(this._sprite);
    }

    public TakeZapDam():void{
        
        this.Moving=false;

        if(this.Lives<=0){this.ZapDie}
        else {

            this.Lives=this.Lives-1;

            this._sprite.gotoAndPlay("Damage");

            this._sprite.on("animationend",this.Calmdown,this);
        }
    }

    public Calmdown(){
        this._sprite.gotoAndPlay("Floating");
        
    }

    public ZapDie():void{
        this.Moving=false;
        this._sprite.gotoAndPlay("Shocked");
        this._sprite.on("animationend",this.Dead,this);

    }

    public Heal():void{
        
        if (this.Lives<4){this.Lives++;}
    }
}