Installing Flow Types
----

If you are working with **third-party** modules, you will need to install type definitions before you can import them. The best way to get third-party type definitions is using [`flow-typed`](https://github.com/flowtype/flow-typed).

```
npm install -g flow-typed
```

You can search and install type definitions using this binary `flow-typed-cli` from inside the `/config/flow` directory.

```
flow-typed search redux
flow-typed install redux-promise
```
