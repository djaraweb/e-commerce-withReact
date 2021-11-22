# Config Base webpack with React and Typescript

Configuracion Base Webpack, Babel con React.js

#### Instalar Dependencias Requeridas

```
$ npm install
```

#### Config file .babelrc

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

#### Config file tsconfig.json

```
{
  "compilerOptions": {
    "outDir": "./dist",
    "target": "es5",
    "module": "es6",
    "jsx": "react",
    "noImplicitAny": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@components": ["src/components/*"],
      "@containers": ["src/containers/*"],
      "@context": ["src/context/*"],
      "@hooks": ["src/hooks/*"],
      "@icons": ["src/assets/icons/*"],
      "@logos": ["src/assets/logos/*"]
    }
  }
}
```

#### Config file custom.d.ts

```
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.png";
declare module "*.tsx";
declare module "*.ts";
```

#### Config files webpack.dev.js and webpack.prod.js

#### Config scripts in file package.json

```
{
    "start": "webpack serve --config webpack/webpack.config.js --env env=dev",
    "build": "webpack --config webpack/webpack.config.js --env env=prod"
}
```
