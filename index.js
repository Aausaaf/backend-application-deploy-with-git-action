import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World with Express!");
});

const PORT = process.env.PORT || 7080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
