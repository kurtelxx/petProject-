import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.setAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const matStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login,
})

export default connect(matStateToProps, {setAuthUserData})(HeaderContainer);