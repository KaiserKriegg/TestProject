"use strict"

async function test(req, res) {
    console.log("Test request invoked");
    res.status(200).json({ result: "Ok" });
}

module.exports = {
    test,
}