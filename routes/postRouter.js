const router = require("express").Router();
const postController = require("../controllers/postController");

router.post("/", postController.root);
// router.put("/trip", updateController.trip);
// router.get("/hello", aboutController.hello);

module.exports = router;