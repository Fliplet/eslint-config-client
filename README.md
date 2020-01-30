# ESLint config for JS code in Fliplet apps


## Installation

```
$ npm install --save-dev eslint eslint-config-fliplet
```


## Usage

Once the `eslint-config-fliplet` package is installed, you can use it by specifying `fliplet` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "fliplet",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `fliplet` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that Fliplet style is not opinionated about that you might want to enforce in your project.

To use Fliplet style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `fliplet` last:

```js
{
  "extends": ["eslint:recommended", "fliplet"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

To see how the `fliplet` config compares with `eslint:recommended`, refer to the source code of `index.js`, which lists every ESLint rule along with whether (and how) it is enforced by the `fliplet` config.


## License

Apache-2 © Fliplet