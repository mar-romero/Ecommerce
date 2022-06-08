const express = require("express");
const router = express.Router();
const  mercadopago = require ("mercadopago");

router.post('/', async(req, res) =>  {
        const newPayment = req.body;

        mercadopago.configure({
          access_token:
            "APP_USR-2301526753993839-060715-7dabaf0ee5d84719c0bbb8335959dc31-1138470081",
        });
        
        let preference = {
          items: [
            {
              title: "Compra Bola de Nieve",
              picture_url: "https://i.imgur.com/fFBjPXr.png",
              quantity: 1,
              currency_id: "ARS",
              unit_price: newPayment.amount,
            },
          ],
        };
        
        mercadopago.preferences.create(preference)
        .then((r)=>{
          res.json(r);
        })
        
        .catch((e)=>{
          console.log(e)})
});
module.exports = router;
