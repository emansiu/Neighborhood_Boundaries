const express = require("express");
const path = require("path");


const app = express();
// ------------MIDDLEWARE--------------
// ------------------------------------------------------
// we'll allow either json or urlencoded requests
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(express.json({ extended: false })); //Used to parse JSON bodies;


//------------------ ROUTES ----------------------------------

console.log(__dirname)


// ---SERVE STATIC ASSETS FOR PRODUCTION AND DEV-----
if (process.env.NODE_ENV === "production") {
    // set static folder. __dirname if file is in root
    app.use(express.static("public"));

    // Now assign the file to use to land on
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public", "index.html"));
    })
} else {
    app.use(express.static(__dirname))
}


// // //-------------------GET PORT TO LISTEN ON-----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`running server on port ${PORT}`));