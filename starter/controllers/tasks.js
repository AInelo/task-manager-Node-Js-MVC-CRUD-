const Task = require("../../final/models/Task")



const getAllTasks = (req, res) => {
    res.send('all items from the files');
}

const createTasks = (req, res) => {
    res.send('send Task');
}

const getTasks = (req, res) => {
    res.send('get singl Tasks');
}



module.exports = {
    getAllTasks
}