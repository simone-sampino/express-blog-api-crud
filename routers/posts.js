const express = require("express");
const router = express.Router();
const posts = require("../data/list");
// const PORT = process.env.PORT;

// Index (read)
router.get("/", (req, res) => {
  let filteredPost = posts;

  if (req.query.tag) {
    filteredPost = posts.filter((thisPost) =>
      thisPost.tags.includes(req.query.tag)
    );
  }

  res.json(filteredPost);
});

// Show (read)
router.get("/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);

  const thisPost = posts.find((thisPost) => thisPost.id === id);

  if (!thisPost) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post not found",
    });
  }

  res.json(thisPost);

  // res.send(`You requested the recipe with id: ${id}`);
});

// Store (create)
router.post("/", (req, res) => {
  const newId = posts[posts.length - 1].id + 1;

  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  posts.push(newPost);

  console.log(posts);

  res.status(201);
  res.json(newPost);

  // res.send("Save a new recipe into the db");
});

// Update (update)
router.put("/:id", (req, res) => {
  const id = req.params.id;

  res.send(`You want to update recipe with id: ${id}`);
});

// Modify (update)
router.patch("/:id", (req, res) => {
  const id = req.params.id;

  res.send(`You want to modify recipe with id: ${id}`);
});

// Destroy (delete)
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const thisPost = posts.find((thisPost) => thisPost.id === id);

  if (!thisPost) {
    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post not found",
    });
  }

  posts.splice(posts.indexOf(thisPost), 1);

  res.sendStatus(204);

  console.log(posts);

  // res.send(`You want to delete recipe with id: ${id}`);
});

module.exports = router;
