const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let articles = [
    {
        id: 1,
        title: "Artikel 1",
        image: "link_gambar_1",
        description: "Deskripsi artikel 1",
        author: "Penulis 1",
        created_at: "2023-10-01"
    },
    {
        id: 2,
        title: "Artikel 2",
        image: "link_gambar_2",
        description: "Deskripsi artikel 2",
        author: "Penulis 2",
        created_at: "2023-10-02"
    }
];

// Endpoint GET
app.get('/articles', (req, res) => {
    res.json(articles);
});

// Endpoint POST
app.post('/articles', (req, res) => {
    const newArticle = req.body;
    articles.push(newArticle);
    res.json({ message: 'Artikel berhasil ditambahkan', article: newArticle });
});

// Endpoint PUT (Update)
app.put('/articles/:id', (req, res) => {
    const id = req.params.id;
    const updatedArticle = req.body;
    articles = articles.map(article => (article.id == id) ? updatedArticle : article);
    res.json({ message: 'Artikel berhasil diperbarui' });
});

// Endpoint DELETE
app.delete('/articles/:id', (req, res) => {
    const id = req.params.id;
    articles = articles.filter(article => article.id != id);
    res.json({ message: 'Artikel berhasil dihapus' });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
