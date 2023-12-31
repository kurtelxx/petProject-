import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus,} from "../../redux/profile-reducer";
import withRouter from './withRouter'
import {compose} from "redux";
import {useNavigate} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.navigate("/login");
            }
        }
        userId && this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)