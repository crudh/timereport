const init = app => {
    app.get("/services", (req, res) => {
        res.send("Hello World!");
    });
};

exports.init = init;
