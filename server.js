const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);

app.use('/css', express.static(path.join(__dirname + '/css')));
app.use('/img', express.static(path.join(__dirname + '/img')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || '4200';
app.set('port', port);

/**
 * Create HTTP server.
 */

/**
 * Listen on provided port, on all network interfaces.
 */
http.listen(port, () => console.log(`API running on localhost:${port}`));

process.on('uncaughtException', function(err){
  console.log(err);
})