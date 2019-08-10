# jsx-no-react

```sh
yarn add jsx-no-react
```

## Usage

The `jsx-no-react` package just defines a function to replace the `React.createElement`, so as well as importing the relevant function into scope where you want to use JSX:

```javascript
import jsxElem from "jsx-no-react";

function render(name) {
  return <div>Hello {name}</div>;
}

document.body.innerHTML = render("Jane Doe");
```

you'll also need to hook the `jsxElem` function into the JSX transformation, for which you should probably use [babel](https://www.npmjs.com/package/babel-plugin-transform-react-jsx), which you can install and setup fairly simply:

```sh
yarn add babel-plugin-transform-react-jsx babel-preset-env
```

and configure babel to correctly transform JSX with a `.babelrc` something like:

```json
{
  "presets": ["env"],
  "plugins": [
    [
      "transform-react-jsx",
      {
        "pragma": "jsxElem"
      }
    ]
  ]
}
```

## Acknowledgement

This package was originally developed by [Terry Kerr](https://github.com/dtkerr).
