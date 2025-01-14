import MovableObject from "./movableObject";
import { MeteoParams } from "../utility/type";
import { Util } from "../utility/util";

/**
 * Meteoクラス
 */
export default class Meteo extends MovableObject {
  /**
   * プロパティ
   */
  protected _power: number;
  protected readonly _initial_power: number;
  /**
   * アクセサ
   */
  get power(): number {
    return this._power;
  }
  set power(power: number) {
    this._power = power;
  }
  get initial_power(): number {
    return this._initial_power;
  }
  /**
   * コンストラクタ
   */
  constructor(params: MeteoParams) {
    super({
      element: Util.createElement({
        name: "img",
        attr: { src: "/src/assets/images/meteo.png" },
      }),
      ...params,
    });
    this._power = params.power;
    this._initial_power = params.power;
  }
  /**
   * 描画
   */
  override draw(): void {
    const h_angle = ((this.power % 12) * 30).toString();
    this.element.style.filter = `hue-rotate(${h_angle}deg)`;
    super.draw();
  }
}
