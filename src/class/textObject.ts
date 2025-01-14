import GameObject from "./gameObject";
import IText from "../interface/text";
import { TextObjectParams } from "../utility/type";
import { Util } from "../utility/util";

/**
 * TextObjectクラス
 */
export default class TextObject extends GameObject implements IText {
  public readonly _fontName: string;
  public readonly _fontSize: number;
  public _text: string;
  get fontName(): string {
    return this._fontName;
  }
  get fontSize(): number {
    return this._fontSize;
  }
  get text(): string {
    return this._text;
  }
  set text(text: string) {
    this._text = text;
  }
  /**
   * こんすとらくた
   * @param params 初期化パラメータ
   */
  constructor(params: TextObjectParams) {
    super({
      element: Util.createElement({
        name: "div",
      }),
      ...params,
    });
    this._fontName = params.fontName;
    this._fontSize = params.fontSize;
    this._text = params.text ?? "";
  }
  override draw(): void {
    this.element.style.fontFamily = this.fontName;
    this.element.style.fontSize = this.fontSize.toString() + "px";
    this.element.innerText = this.text;
    super.draw();
  }
}
