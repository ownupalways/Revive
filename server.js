const express = require('express');
const sendMail =require('./mail')
const app = express();

const path =require('path');

const PORT = 4040;

app.listen(PORT, () => {
    console.log('Server starting on PORT,', 4040);
});

app.use(express.urlencoded({extended:false}));

app.use(express.json());

//email, subject, text
app.post('/email', (req, res) => {

    const { subject, email, text } = req.body
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error'})
        } else {
            res.json({ message: 'Email Sent!'});
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})