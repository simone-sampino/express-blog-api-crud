const express = require("express");
const router = express.Router();
const postController = require("../controllers/postsControllers");
// const posts = require("../data/list");
// const PORT = process.env.PORT;

// Index (read)
router.get("/", postController.index);

// Show (read)
router.get("/:id", postController.show);

// Store (create)
router.post("/", postController.store);

// Update (update)
router.put("/:id", postController.update);

// Modify (update)
router.patch("/:id", postController.modify);

// Destroy (delete)
router.delete("/:id", postController.destroy);

module.exports = router;
