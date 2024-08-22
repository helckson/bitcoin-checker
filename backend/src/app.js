const express = require('express');
const bitcoinRoutes = require('./routes/bitcoinRoutes');

const app = express();
const port = 3000;

app.use('/api', bitcoinRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;
