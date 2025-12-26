import axios from "axios"
import dispatcher from "./dispatcher"
import { ActionTypes } from "./actiontypes";

export const getUsers = async () => {
    try {
        const response = await axios.get("https://65dd6c23e7edadead7ede22c.mockapi.io/sample");
        dispatcher.dispatch({
            type: ActionTypes.GET_DATA,
            payload: response.data,
        });
    } catch (error) {
        console.error("Error fetching todos:", error);
    }
};

export const addUser = async (user) => {
    try {
        const response = await axios.post("https://65dd6c23e7edadead7ede22c.mockapi.io/sample", user);
        dispatcher.dispatch({
            type: ActionTypes.ADD_DATA,
            payload: response.data,
        });
    } catch (error) {
        console.error("Error adding todo:", error);
    }
};

export const updateUser = async (id,updatedUser) => {
    try {
        await axios.put(`https://65dd6c23e7edadead7ede22c.mockapi.io/sample/${id}`, updatedUser);
        dispatcher.dispatch({
            type: ActionTypes.UPDATE_DATA,
            payload: updatedUser,
        });
    } catch (error) {
        console.error("Error updating todo:", error);
    }
};

export const deleteUser= async (id) => {
    try {
        await axios.delete(`https://65dd6c23e7edadead7ede22c.mockapi.io/sample/${id}`);
        dispatcher.dispatch({
            type: ActionTypes.DELETE_DATA,
            payload: id,
        });
    } catch (error) {
        console.error("Error deleting todo:", error);
    }
};
