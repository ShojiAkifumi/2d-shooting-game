import MovableObject from "./movableObject";
import { CometParams } from "../utility/type";
import { Util } from "../utility/util";

/**
 * Cometクラス
 */
export default class Comet extends MovableObject {
  /**
   * コンストラクタ
   * @param params        初期化パラメータ
   */
  constructor(params: CometParams) {
    super({
      element: Util.createElement({
        name: "img",
        attr: {
          src: "./assets/images/comet.png",
          class: "blink",
        },
      }),
      ...params,
    });
  }
}
