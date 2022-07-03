# lox-wasm

A lox interpreter that you can run in your browser through WebAssembly!

Try it out at https://rybicki.io/lox-wasm/.

The Lox interpreter is natively written at Rust at https://github.com/Chriscbr/lox-rust. This repository contains necessary setup to package the code and bundle it into a small web application.

Little to no optimization has been done to reduce bundle sizes or improve performance.

## Build instructions

Make sure https://github.com/Chriscbr/lox-rust is checked out and built in an adjacent directory.

Install [wasm-pack](https://github.com/rustwasm/wasm-pack).

From this repo, run:

```
wasm-pack build --target web
```

to package the library into an npm package which can be used by the web application.

Test out the web application by running:

```
cd www
npm run start
```

Publish the web application to GitHub by running:

```
cd www
npm run deploy
```