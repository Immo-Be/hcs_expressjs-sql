const router = require("express").Router();
const postController = require("../controllers/postController");

router.post("/", postController.root);

module.exports = router;