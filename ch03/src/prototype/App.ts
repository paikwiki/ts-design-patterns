let base = new Base();
base.state = 0;

Derived.prototype = base;

let derived = new Derived();

// derived.state === 0
