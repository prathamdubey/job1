const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));

let database = [
    {name:"v", email:"v@gmail.com", passwd:"1", isAdmin:false},
    {name:"a", email:"a@gmail.com", passwd:"1", isAdmin:true}
]

let currentEmail = "guest";

app.get("/", (req, res) => {
    console.log(currentEmail);
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const passwd = req.body.passwd;

    for(let i = 0; i < database.length; i++) {
        const user = database[i];
        if(user.email == email && user.passwd == passwd) {
            res.send("success");
            currentEmail = user.email;
        }
    }
    res.send("failure");
})

app.get("/login", (req, res) => {
    // console.log(req.body);
    res.sendFile(path.join(__dirname, '../client/login.html'));
})

app.get("/logout", (req, res) => {
    currentEmail = "guest";
    res.redirect("/");
})

app.get("/admin", (req, res) => {

    for(let i = 0; i < database.length; i++) {
        const user = database[i];
        if(user.email == currentEmail && user.isAdmin) {
            res.sendFile(path.join(__dirname, '../client/admin.html'));
        }
    }
    res.sendFile(path.join(__dirname, '../client/failed.html'));
})



app.post("/register", (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});