import TextObject from "./textObject";
import { LevelParams } from "../utility/type";

export default class Level extends TextObject{
    protected _level: number;

    set level(level: number){
        this._level = level;
    }

    /**
     * コンストラクタ
     * @param params 初期化パラメータ
     */
    constructor(params: LevelParams){
        super(params);
        this._level = params.level;
    }
    draw(): void{
        this._text = "LEVEL" + this._level.toString();
        super.draw();
    }
}