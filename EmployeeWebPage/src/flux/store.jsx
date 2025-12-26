import { EventEmitter } from "events";
import dispatcher from "./dispatcher"
import { ActionTypes } from "./actiontypes";

class Store extends EventEmitter {
    constructor() {
        super();
        this.users = [];
    }
    getAll() {
        return this.users;
    }
    handleActions(action) {
        switch (action.type) {
            case ActionTypes.GET_DATA:
                this.users = action.payload;
                this.emit("change");
                break;

            case ActionTypes.ADD_DATA:
                this.users.push(action.payload);
                this.emit("change");
                break;

            case ActionTypes.UPDATE_DATA:
                this.users = this.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                );
                this.emit("change");
                break;

            case ActionTypes.DELETE_DATA:
                this.users = this.users.filter((user) => user.id !== action.payload);
                this.emit("change");
                break;
            default:
                break;
        }
    }

}
const store = new Store();
dispatcher.register(store.handleActions.bind(store));
export default store;