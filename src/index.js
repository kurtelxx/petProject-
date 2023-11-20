import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
            </BrowserRouter>
    </React.StrictMode>);
}

rerenderEntireTree();

store.subscribe(() => {
    rerenderEntireTree()
});

reportWebVitals();