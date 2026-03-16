export class Example {
  public attribute: number = 0;
  public testAttribute(): void {
    if (this.attribute < 10) {
      // ...
    } else if (this.attribute < 200) {
      // ...
    } else if (this.attribute < 500) {
      // ...
    } else {
      // ...
    }
  }
}