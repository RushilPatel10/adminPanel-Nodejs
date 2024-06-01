const express = require('express');
const app = express();
const PORT = 8088;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + '/public')))

const middleware = (req, res, next) => {
    console.log("hello..");
    let age = req.query.age;
    if (age >= 18) {
        return next();
    }
    return res.redirect('/')
}

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    console.log('hellooo there');
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

