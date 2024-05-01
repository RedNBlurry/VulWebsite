const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Example POST endpoint
app.post('/submit-data', (req, res) => {
    // Access POST values here
    console.log(req.body);
    res.send('Data received: ' + JSON.stringify(req.body));
});
