import MovableObject from "./movableObject";
import { Util } from "../utility/util";
import { CometParams } from "../utility/type";

/**
 * Cometクラス
 */
export default class Comet extends MovableObject {
  /**
   * コンストラクタ
   * @param params 初期化パラメータ
   */
  constructor(params: CometParams) {
    super({
      element: Util.createElement({
        name: "img",
        attr: {
          src: "/src/assets/images/comet.png",
          class: "blink",
        },
      }),
      ...params,
    });
  }
}
