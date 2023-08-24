const fs = require("fs")
const path = require('path');
const notesData = require("../db/db.json")
const express = require("express")
const router = express.Router()

let notes = notesData

const saveNotes = () => {
    fs.writeFileSync(path.resolve(__dirname, "../db/db.json"), JSON.stringify(notes))
}


router.get("/notes", (req, res) => {

    let allNotes = notes.map((note, index) => ({
        ...note,
        id: index
    })
    )
    console.log(allNotes);
    res.json(allNotes)
})

router.post("/notes", (req, res) => {
    notes.push(req.body)
    saveNotes()
    res.json(notes)
})

router.delete("/notes/:id", (req, res) => {
    notes = notes.filter((note, index) => index != req.params.id)
    saveNotes()
    res.json()
})

module.exports = router;