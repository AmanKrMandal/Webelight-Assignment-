import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainReducer";
import mySaga from "./sagaRepository";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: mainReducer,
    middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(mySaga)
export default store;
