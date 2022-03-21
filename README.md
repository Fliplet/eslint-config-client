# ESLint config for JS code in Fliplet apps

## Installation

```bash
npm install --save-dev eslint babel-eslint eslint-config-fliplet
```

Make sure the `package-lock.json` file is committed too.

## Usage

Once the `eslint-config-fliplet` package is installed, you can use it by specifying `fliplet` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your `.eslintrc` [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "fliplet",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `fliplet` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` rule set](http://eslint.org/docs/rules/) that Fliplet style is not opinionated about that you might want to enforce in your project.

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

### Configure GitHub for automated linting

1. Add `main.yml` workflow file in the root directory for the repository. See `example/main.yml` for a sample file.
2. Amend `package.json` file to link to the script:

```js
{
  "scripts": {
    "eslint:github-action": "eslint ."
  }
}
```

 Once the setup is complete, each commit will trigger a build that creates annotations for all problems found ([see example](https://github.com/Fliplet/fliplet-widget-form-builder/actions/runs/378678895)).

## License

Apache-2 © Fliplet
