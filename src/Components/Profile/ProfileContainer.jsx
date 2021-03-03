import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus} from '../../Redux/ProfileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        );
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        authorizedUserId: state.Auth.userId,
        isAuth: state.Auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);
