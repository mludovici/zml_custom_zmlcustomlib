/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library zml.custom.zmlcustomlib.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "zml.custom.zmlcustomlib",
		version: "1.0.0",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			
		],
		interfaces: [],
		controls: [
			"zml.custom.zmlcustomlib.CustomButton"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here

	});
	return zml.custom.zmlcustomlib;
});

// 	/**
// 	 * Some description about <code>zmlcustomlib</code>
// 	 *
// 	 * @namespace
// 	 * @name zml.custom.zmlcustomlib
// 	 * @author Fiori tools
// 	 * @version ${version}
// 	 * @public
// 	 */
// 	var thisLib = zml.custom.zmlcustomlib;

// 	/**
// 	 * Semantic Colors of the <code>zml.custom.zmlcustomlib.Example</code>.
// 	 *
// 	 * @enum {string}
// 	 * @public
// 	 */
// 	thisLib.ExampleColor = {

// 		/**
// 		 * Default color (brand color)
// 		 * @public
// 		 */
// 		Default : "Default",

// 		/**
// 		 * Highlight color
// 		 * @public
// 		 */
// 		Highlight : "Highlight"

// 	};

// 	return thisLib;

// });
