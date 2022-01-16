const express = require("express");

const connect = require("./configs/db");

const app = express();

const { body, validationResult } = require("express-validator");

const { login, register } = require("./controllers/auth.controller");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/register",
    body("name").not().isEmpty().trim(),
    body("email").isEmail(),
    body("phone").isLength({ min: 10, max: 10 }),
    body("password").isLength({ min: 6, max: 15 }),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        } catch (error) {
            return res.send({ error: error });
        }
    },
    register
);

app.post("/login",
    body("email").isEmail(),
    body("password").isLength({ min: 6, max: 15 }),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        } catch (error) {
            return res.send({ error: error });
        }
    },
    login
);


app.listen(PORT, async () => {
    await connect();
    console.log("Connected");
});