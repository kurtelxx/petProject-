import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {

    return (<BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element={<DialogsContainer/>}/>
                    <Route path="/profile"
                           element={<Profile/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>)
}

export default App;