var Promo = require('../models/promoModel.js');

exports.add = (req, res, next) => {

    var promo = new Promo({
        name                :       req.body.name,
        desc                :       req.body.desc,
        slot                :       req.body.slot,
        address             :       req.body.address,
        longitude           :       req.body.longitude,
        latitude            :       req.body.latitude,
        customer_availed    :       req.body.customer_availed,
        customer_declined   :       req.body.customer_declined,
        customer_sent       :       req.body.customer_sent,
        image               :       req.body.image,
        keywords            :       req.body.keywords,
        deleted             :       req.body.deleted
    });

    promo.save(function (err, customer) {
      if (err) {
        return res.status(500).json({
                    message: 'Error when creating customer',
                    error: err
                });
      }

      return res.status(201).json(promo);
    });


    /*console.log(req.body);
    res.send('Export.add');*/
};


exports.edit = (req, res, next) => {

    let id;

    if(req.params.id) {
        id = req.params.id
    }
    res.send(`Export.put ${id}`);
};


exports.find = (req, res, next) => {
    Promo.find(function (err, users) {
        if (err) {
            return res.json({
                message: 'Error when getting user.',
                error: err
            });
        }
        return res.status(200).json(users);
    });
};


exports.findOne = (req, res, next) => {
    res.send('Export.add');
};
