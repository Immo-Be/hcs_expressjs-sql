const router = require("express").Router();
const updateController = require("../controllers/updateController");

router.put("/", updateController.root);
// router.put("/trip", updateController.trip);
// router.get("/hello", aboutController.hello);

module.exports = router;