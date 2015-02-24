const init = (app) => {
    "use strict";

    app.get('/services', (req, res) => {
        res.send('Hello World!');
    });
};

exports.init = init;



