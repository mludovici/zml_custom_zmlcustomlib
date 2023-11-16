sap.ui.define([
    "sap/ui/core/Control",
    "sap/m/Button",
    "sap/m/MessageToast"
], function(Control, Button, MessageToast) {
    "use strict";

    return Control.extend("fioriusersfreestyle.control.CustomButton", {
        metadata: {
            properties: {
                text: { type: "string", defaultValue: "Dumbledore" },
                enabled: { type: "boolean", defaultValue: true }
            },
            aggregations: {},
            events: {
                customPress: {
                    parameters: {
                        customText: { type: "string", defaultValue: "Custom Press text"},
                        customData: { type: "object" , defaultValue: { customEventPress1: "hi", customEventPress2: 123}}
                    }
                }
            }
        },

        init: function() {
            Control.prototype.init.apply(this, arguments);
        },

        renderer: function(oRm, oControl) {
            oRm.write("<div");
            oRm.writeControlData(oControl);
            oRm.write(">");

            // Create an instance of the sap.m.Button control
            var oButton = new Button({
                text: oControl.getText(),
                enabled: oControl.getEnabled(),
                press: function() {
                    // When the button is pressed, show a message toast
                    MessageToast.show("Custom Button Clicked!");
                    
                    // Trigger the custom "customPress" event with parameters
                    oControl.fireCustomPress({
                        customText: "Button pressed!",
                        customData: { key: "value" }
                    });
                }
            });

            // Render the button
            oRm.renderControl(oButton);

            oRm.write("</div>");
        },

        // Custom setter method for the "text" property
        setText: function(sText) {
            this.setProperty("text", sText, true); // Set the property value and suppress invalidation
        },

        // Custom getter method for the "text" property
        getText: function() {
            return this.getProperty("text");
        },

        // Custom setter method for the "enabled" property
        setEnabled: function(bEnabled) {
            this.setProperty("enabled", bEnabled, true); // Set the property value and suppress invalidation
        },

        // Custom getter method for the "enabled" property
        getEnabled: function() {
            return this.getProperty("enabled");
        }
    });
});