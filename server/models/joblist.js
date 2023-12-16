const mongoose = require('mongoose')

const JoblistSchema = new mongoose.schema({
    name: String,
    image: String
})

const JoblistModel = mongoose.model("joblists", JoblistSchema)

module.exports = JoblistModel