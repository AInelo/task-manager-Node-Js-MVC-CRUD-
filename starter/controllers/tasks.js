// To use the Schema of Task data defined in the model
const Task = require('../models/Task')

// const Task = require("../../final/models/Task")



const getAllTasks = (req, res) => {
    res.send('all items from the files');
}

const createTasks = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const getTasks = (req, res) => {
    res.send({id:req.params.id});
}

const updateTasks = (req, res) => {
    res.send('update Tasks');
}

const deleteTasks = (req, res) => {
    res.send('delete Tasks');
}



module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}