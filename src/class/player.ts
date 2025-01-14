import MovableObject from "./movableObject";
import { PlayerParams } from "../utility/type";
import { Util } from "../utility/util";
import Keyboard from "./keyboard";

/**
 * Playerクラス
 */
export default class Player extends MovableObject {
  /**
   * プロパティ
   */
  protected _speed: number;
  protected readonly _keyboard: Keyboard; // キーボード制御用
  /**
   * コンストラクタ
   * @param params 初期化パラメータ
   */
  constructor(params: PlayerParams) {
    super({
      element: Util.createElement({
        name: "img",
        attr: { src: "/src/assets/images/player.png" },
      }),
      velocity: { x: 0, y: 0 },
      acceleration: { x: 0, y: 0 },
      ...params,
    });
    this._speed = params.speed;
    this._keyboard = params.keyboard;
  }
  /**
   * 移動
   */
  override move(): void {
    //移動更新
    if (this._keyboard.up && !this._keyboard.down) {
      this.velocity.y = this._speed;
    } else if (!this._keyboard.up && this._keyboard.down) {
      this.velocity.y = -this._speed;
    } else {
      this.velocity.y = 0;
    }
    if (this._keyboard.left && !this._keyboard.right) {
      this.velocity.x = -this._speed;
    } else if (!this._keyboard.left && this._keyboard.right) {
      this.velocity.x = this._speed;
    } else {
      this.velocity.x = 0;
    }
    super.move();
    this.position = Util.clampScreen(this, true);
  }
}
