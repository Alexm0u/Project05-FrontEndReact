
import { configureStore } from '@reduxjs/toolkit';
import detailSlice from '../layouts/detailSlice';
import userSlice from '../layouts/userSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import appointmentSlice from '../layouts/appointmentSlice';


const reducers = combineReducers({
    user: userSlice,
    detail: detailSlice,
    appointment: appointmentSlice,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});