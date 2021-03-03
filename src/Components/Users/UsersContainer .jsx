import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setCurrentPage, requestUsers} from '../../Redux/UsersReducer';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/UsersSelectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        const {pageSize} = this.props;
        this.props.requestUsers(page, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state) => {
    return ({
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    })
}

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, requestUsers
    })
)(UsersContainer);

