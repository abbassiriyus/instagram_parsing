
const express = require("express")
const app = express()
const puppeteer = require("puppeteer")

const cors = require("cors")
const fileUpload = require("express-fileupload")
const pool = require("./db.js")
const fs = require("fs")

app.use(fileUpload())
app.use(cors())
app.use(express.static("Images"))

app.post('/data', async (req,res)=>{
    console.log("Asdasd");
const browser = await puppeteer.launch();
const page = await browser.newPage();
  
await page.goto('https://www.instagram.com/');
    
await page.screenshot({                     


    path: "./screenshot.png",               

    fullPage: true                             

  });

await browser.close();

})





app.listen(5000, () => {
    console.log("Localhost is Running");
})