const router = require("express").Router();
const updateController = require("../controllers/updateController");

router.put("/", updateController.root);

module.exports = router;