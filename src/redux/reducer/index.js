import { combineReducers } from "redux";
import { createAccount } from "../reducer/signup";

const reducer = combineReducers({
    createAccount,
})

export default reducer;