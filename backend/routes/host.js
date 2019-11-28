const router = require('express').Router();
let Host = require('../model/host.model');

router.route('/').get((req, res) => {
  Host.find()
    .then(hosts => res.json(hosts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const hostName = req.body.hostName;
  const email = req.body.email;
  const phone = Number(req.body.phone);

  const newHost = new Host({hostName,email,phone,});

  newHost.save()
    .then(() => res.json('Host added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;