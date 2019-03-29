// Object literal
const singleton1 = {
  foo(): void {
    console.log('bar');
  }
}

// private varialble
const singleton2 = new class {
  private _bar = 'bar';
  foo(): void {
    console.log(this._bar);
  }
 }();

 // ES6
 const singleton3 = (() => {
   let bar = 'bar';
   return {
     foo(): void {
       console.log(bar);
     }
   }
 })();
 