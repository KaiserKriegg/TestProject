"use strict"
const controller = require("./controllers");

module.exports = function (app) {
    app.route("/test").get(controller.test);
}