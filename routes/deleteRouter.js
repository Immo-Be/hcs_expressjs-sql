const router = require("express").Router();
const deleteController = require("../controllers/deleteController");

router.delete("/", deleteController.root);
// router.put("/trip", updateController.trip);
// router.get("/hello", aboutController.hello);

module.exports = router;