const router = require("express").Router();
const deleteController = require("../controllers/deleteController");

router.delete("/", deleteController.root);

module.exports = router;