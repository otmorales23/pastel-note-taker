const fs = require("fs")
const path = require('path');
const notes = require("../db/db.json")
const express = require("express")
const router = express.Router()

// let notes = notesData

const saveNotes = () => {
    fs.writeFileSync(path.resolve(__dirname, "../db/db.json"), JSON.stringify(notes))
}


router.get("/notes", (req, res) => {
    console.log("Hello");
    res.json(notes)
})

router.post("/notes", (req, res) => {
    notes.push(req.body)
    saveNotes(notes)
    res.json(notes)
})

router.delete("/notes/:id", (req, res) => {
    res.json(notes)
})

module.exports = router;