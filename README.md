# Tonality

🎸 A music theory playground built with Nuxt.js, TailWind and tonal.js. 🎹

## Build Setup

``` bash
# install dependencies
$ npm i

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

## Development Notes

### VS Code setup

To ensure Tailwind and VSCode's intellisense play nicely together, be sure to disable *CSS validation* on your settings
To do so, open your settings (shortcut **ctrl/cmd + ,**) and search for css validate. Disable _CSS: Validate_.

Things will still work if you don't do that, but you'll get visual warnings on Tailwind's custom directives such as `@tailwind`.

### VS Code extensions

These are highly recommended for proper development on this project:

* Vetur
* ESLint and stylelint
* Tailwind CSS IntelliSense
