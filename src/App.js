import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import DialogsContainer from "./Components/Dialogs/DialogsContainer"
import UsersContainer from "./Components/Users/UsersContainer"
import ProfileContainer from './Components/Profile/ProfileContainer'
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {

    return (<BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/profile/*" element={<ProfileContainer/>} />
                    <Route path="/profile/:userId/*" element={<ProfileContainer/>} />
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>)
}

export default App;