import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';
import {Helmet} from 'react-helmet'
class UsersList extends Component{
    componentDidMount(){
        this.props.fetchUsers();
    }

    renderUsers(){
        return this.props.users.map(user=>{
            return <li key={user.id}>{user.name}</li>
        })
    }
    head(){
      return (<Helmet>
        <title>{`${this.props.users.length} User Loaded`} </title>
        <meta property="og:title" content="Users App"/>
      </Helmet>
      )
    }
    render(){
        return(
          <div>
            {this.head()}
              <h1>Here's a big List of users:</h1>
              <ul>{this.renderUsers()}</ul>
          </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      users:state.users
    };
}
function loadData(store) {
   return store.dispatch(fetchUsers());
}

export default {
    component: connect(mapStateToProps, {fetchUsers})(UsersList)
}