import express from 'express';

const posts = [
    { id: 1, descricao: "Gato dormindo", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "Gato jogando bola", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "Gato socando uma árvore", imagem: "https://placecats.com/millie/300/150" },
  ];

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});