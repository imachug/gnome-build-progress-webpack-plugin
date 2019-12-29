const webpack = require("webpack");
const dbus = require("dbus-native");

const sessionBus = dbus.sessionBus();
const service = sessionBus.getService("org.gnome.Shell");

let setProgress = () => {};
service.getInterface("/com/imachug/BuildProgressBar", "com.imachug.BuildProgressBar", (err, interface) => {
	if(interface) {
		setProgress = interface.setProgress.bind(interface);
	}
});


class GnomeBuildProgressPlugin {
	apply(compiler) {
		const plugin = new webpack.ProgressPlugin((percentage, message) => {
			setProgress(percentage === 1 ? 0 : Math.round(percentage * 100));
		});
		plugin.apply(compiler);
	}
}

module.exports = GnomeBuildProgressPlugin;