# chai-truthy
Truthy and Falsy **FUNCTIONS** for [Chai BDD](http://chaijs.com/api/bdd/)

### Why?
* Because `expect(foo).to.be.ok` is error-prone. Typo that `ok` bit and your assertion will ALWAYS pass.
* By adding a `truthy()` function, if you make a typo, the function won't exist, it'll throw an error,
 and you'll know immediately that you goofed up.

### API
```js
chai.use(require('chai-truthy')); // Not necessary in the browser if using globals

var foo = 42;
expect(foo).to.be.truthy();

var bar = '';
expet(bar).to.be.falsy();
```