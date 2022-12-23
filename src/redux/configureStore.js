import {createStore, combineReducers, applyMiddleware } from 'redux';
import {staffs} from './Staffs';
import { departments } from './departments';
import {salary} from './salary'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           staffs:staffs,
           departments:departments,
           salary : salary
            
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}