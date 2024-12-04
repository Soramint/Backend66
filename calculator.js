const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/bmiCalculator", (req, res) => {
    res.sendFile(__dirname + '/public/bmiCalculator.html');
});

app.post("/bmiCalculator", (req, res) => {
    var height = req.body.height; // อ่านค่าจาก input1
    var weight = req.body.weight; // อ่านค่าจาก input2
    var result = Number(req.body.weight) / ((Number(req.body.height) / 100) ** 2);

    if (result < 18.5) res.send("คุณมีค่า BMI = " + result + " คุณอยู่ในเกณฑ์ = ผอมเกินไป");
    else if (result > 18.6 && result < 22.9) res.send("คุณมีค่า BMI = " + result + " คุณอยู่ในเกณฑ์ = น้ำหนักปกติ");
    else if (result > 23.0 && result < 24.9) res.send("คุณมีค่า BMI = " + result + " คุณอยู่ในเกณฑ์ = น้ำหนักเกิน");
    else if (result > 25.0 && result < 29.9) res.send("คุณมีค่า BMI = " + result + " คุณอยู่ในเกณฑ์ = อ้วน");
    else if (result > 30.0) res.send("คุณมีค่า BMI = " + result + " คุณอยู่ในเกณฑ์ = อ้วนมาก");

});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});