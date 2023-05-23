const express = require("express");
const router = express.Router();

/* GET users listing. */
const users = ["TP", "PS", "DT, VK"];
router.get('/', (req, res) => {
  res.json('TP, PS, DT, VK');
});

module.exports = router;
