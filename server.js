const express = require("express");
const app = express();
const PORT = process.env.PORT;
const postRouter = require("./routers/posts");

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.use("/api/posts", postRouter);

/* 
const posts = [
  {
    title: "Ciambellone",
    content: "Ciambellone classico",
    image: `http://localhost:${PORT}/recipes/ciambellone.jpeg`,
    tags: ["dolce", "semplice", "ciambellone"],
  },
  {
    title: "Cracker",
    content: "Cracker alla barbabietola",
    image: `http://localhost:${PORT}/recipes/cracker_barbabietola.jpeg`,
    tags: ["dolce", "semplice", "barbabietola"],
  },
  {
    title: "Pane Fritto",
    content: "Pane fritto dolce",
    image: `http://localhost:${PORT}/recipes/pane_fritto_dolce.jpeg`,
    tags: ["dolce", "fritto", "nowaste"],
  },
  {
    title: "Pasta",
    content: "Pasta alla barbabietola",
    image: `http://localhost:${PORT}/recipes/pasta_barbabietola.jpeg`,
    tags: ["dolce", "pasta", "barbabietola"],
  },
  {
    title: "Torta",
    content: "Torta Paesana",
    image: `http://localhost:${PORT}/recipes/torta_paesana.jpeg`,
    tags: ["dolce", "torta", "tradizione"],
  },
];
 */
