import TextObject from "./textObject";
import { ScoreParams } from "../utility/type";

/**
 * Scoreクラス
 */
export default class Score extends TextObject {
  protected _score: number;
  set score(score: number) {
    this._score = score;
  }
  /**
   * コンストラクタ
   * @param params 初期化パラメータ
   */
  constructor(params: ScoreParams) {
    super(params);
    this._score = params.score;
  }
  override draw(): void {
    this._text = this._score.toString().padStart(10, "0");
    super.draw();
  }
}
