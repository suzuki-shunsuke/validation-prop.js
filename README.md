# validation-prop.js


## INSTALL

```
$ npm install --save validation-prop
```

```
$ bower install --save validation-prop
```

## Dependencies

* validation-frame

## Example

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
memo.valid(); // true
memo.message();  // ''

memo('');  // ''
memo.valid(); // true
memo.message();  // ''

memo.validate();  // {valid: false, message: 'Required!'}
memo.valid(); // false
memo.message();  // 'Required!'
```

## LICENSE

[MIT]()
