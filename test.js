
var chai = require('chai');
var expect = chai.expect;

chai.use(require('./index.js'));

expect(true).to.be.truthy();
expect(1).to.be.truthy();
expect('abc').to.be.truthy();
expect({}).to.be.truthy();

expect(false).to.be.falsy();
expect(0).to.be.falsy();
expect('').to.be.falsy();