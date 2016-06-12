# validation-prop

```javascript
const vp = require('validation-prop');
vp.rule_set = require('validation-rule-set');
vp.prop = require('simple-getter-setter');

const props = {};
props.memo = vp.create_prop([{
  type: 'required',
  message: 'Required!'
}]);

const memo = props.memo('foo');
memo(); // foo
memo.validate();  // {valid: true, message: ''}
memo.valid();
memo.message();
```
