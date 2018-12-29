import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from '../actions';
import requireAuth from '../components/hocs/requireAuth';
class AdminsListPage extends Component{
  componentDidMount(){
    this.props.fetchAdmins();
  }
  renderAdmins(){
    return this.props.admins.map(data=>{
      return <li key={data.id}>{data.name}</li>;
    })
  }
  render(){
    return(
      <div>
        <h3>Protect List of Admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

function mapStateToProps({admins}) {
  return {
    admins
  }
}
export default {
  component:connect(mapStateToProps,{fetchAdmins})(
    requireAuth(AdminsListPage)),
  loadData:({dispatch})=>dispatch(fetchAdmins())
}