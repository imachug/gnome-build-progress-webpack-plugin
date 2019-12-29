# gnome-build-progress-webpack-plugin

Shows build progress in Gnome shell.


## Installing

1. Install `build-status@imachug.gmail.com` Gnome plugin ([source code](https://github.com/imachug/BuildProgressBar))
2. `yarn add gnome-build-progress-webpack-plugin` or `npm install gnome-build-progress-webpack-plugin`


## Usage

Just add the plugin as usual:

```javascript
const GnomeBuildProgressPlugin = require("gnome-build-progress-webpack-plugin");

...
	plugins: [
		new GnomeBuildProgressPlugin()
	]
...
```
