import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import withRouter from './withRouter'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId
        console.log(userId);
       userId && axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))