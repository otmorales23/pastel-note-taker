const fs = require("fs")
const path = require('path');
const notes = require("../db/db.json")
const express = require("express")
const router = express.Router()



const saveNotes = () => {
    fs.writeFile(path.resolves(__dirname, "../db/db.json"), notes)
}