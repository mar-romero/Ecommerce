const express = require("express");
const router = express.Router();
const  mercadopagos = require ("mercadopago");
const dotenv = require("dotenv");

const mercadopago = mercadopagos.configure({
  access_token:process.env.ACCESS_TOKEN,
});