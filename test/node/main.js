'use strict';

const chai = require('chai');
const mocha = require('mocha');
const m = require('mithril');

// const rule_set = require('../../src/rule_set');

const vp = require('../../src/main');
vp.prop = m.prop;
vp.rule_set = require('./validation-rule-set.umd');

mocha.describe('vp.create_prop()', () => {
  mocha.it('is a getter and setter.', () => {
    const prop = vp.create_prop([{
      type: 'ascii',
      message: 'ASCII!'
    }]);
    const memo = prop('');
    chai.expect(memo()).equals('');
    memo('foo');
    chai.expect(memo()).equals('foo');
  });
  mocha.it('is a getter and setter.', () => {
    const prop = vp.create_prop([{
      type: 'ascii',
      message: 'ASCII!'
    }]);
    const memo = prop('a');
    chai.expect(memo.validate().valid).to.be.true;
    memo('ほげ');
    chai.expect(memo.validate().valid).to.be.false;
    chai.expect(memo.validate().message).equals('ASCII!');
  });
});
