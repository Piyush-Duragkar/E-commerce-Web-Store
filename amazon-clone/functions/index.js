
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');
const stripe = require("stripe")('sk_test_51NObWfAhCyzZOfpjI7Yw8cb127nXOgyc6pL7PAaFbLYobKdCuySaUb87QfxpTfmADEKLiWANu9cyOqifVGokWEZ300aSIu9LJG');

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) =>{
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app)