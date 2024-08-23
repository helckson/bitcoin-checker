const cors = require('cors');
const express = require('express');
const bitcoinRoutes = require('./routes/bitcoinRoutes');

const app = express();
app.use(cors());
const port = 3000;

app.use('/api', bitcoinRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;
