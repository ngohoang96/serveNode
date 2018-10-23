const express = require('express');
const PhepTinh = require('./PhepTinh');
const app = express();

// app.get('/', (req, res) => {
//     res.send('<h1>Hello</h1>');
// });
app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
    const { tenPhepTinh, soA, soB } = req.params;
    const pt = new PhepTinh(tenPhepTinh, +soA, +soB);
    res.send(pt.getResultString());
});

app.listen(3000, () => console.log('Server started.'));