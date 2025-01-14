export default class Keyboard {
  protected _key: Record<string, boolean>;
  constructor() {
    this._key = {};
    this.watchEvent();
  }
  get up(): boolean {
    return this._key["ArrowUp"] === true || this._key["8"] === true;
  }
  get down(): boolean {
    return this._key["ArrowDown"] === true || this._key["2"] === true;
  }
  get left(): boolean {
    return this._key["ArrowLeft"] === true || this._key["4"] === true;
  }
  get right(): boolean {
    return this._key["ArrowRight"] === true || this._key["6"] === true;
  }
  watchEvent(): void {
    //keyダウンイベント
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      this._key[e.key] = true;
      console.log(this._key);
    });
    //keyupイベント
    document.addEventListener("keyup", (e: KeyboardEvent) => {
      this._key[e.key] = false;
      console.log(this._key);
    });
  }
}
