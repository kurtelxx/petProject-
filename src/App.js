import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {Routes, Route, BrowserRouter} from "react-router-dom";


const App = (props) => {

    return (<BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div class='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/profile"
                           element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>)
}

export default App;