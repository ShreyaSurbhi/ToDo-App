import axios from 'axios';

const baseUrl = 'http://localhost:5001'

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data ---> ', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) => {

    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("");
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
    .post(`${baseUrl}/update`, {id: toDoId, text})
    .then((data) => {
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));

}

const deleteToDo = (id, setToDo) => {

    axios
    .post(`${baseUrl}/delete`, {id})
    .then((data) => {
        console.log(data);
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));

}

export {addToDo, getAllToDo, updateToDo, deleteToDo};