const express = require('express');
const app = express();
app.get('/', function (req, res) {
    res.send('Hello Geeks!');
    res.send('\n!');
    res.send('Nova versão!');
    res.send('\n!');
    res.send('Nova branch!');
});
app.listen(3000, function () {
    console.log('Servidor na porta 3000!');
});
