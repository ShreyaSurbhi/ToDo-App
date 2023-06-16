const ToDoModel = require('../models/ToDoModel');


module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;

    try {
        const data = await ToDoModel.create({ text });
        console.log("Added Successfully...");
        console.log(data);
        res.send(data);
    } catch (error) {
        console.error("Error occurred while saving ToDo:", error);
        res.status(500).send("An error occurred while saving ToDo.");
    }
};


module.exports.updateToDo = async (req, res) => {
    const { id, text } = req.body;

    ToDoModel.findByIdAndUpdate(id, { text })
        .then(() => res.send("Updated Successfully..."))
        .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
    const { id } = req.body;

    ToDoModel.findByIdAndDelete(id)
        .then(() => res.send("Deleted Successfully..."))
        .catch((err) => console.log(err));
};

