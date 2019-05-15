// AppContainer.js
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
/*import {
  activateGeod,
  closeGeod,
} from '.././actions/action';*/
import {
  saveUsers,
} from '.././actions/containerAction';
import '.././css/AppContainer.css';
import Login from '.././components/Login';
import Dashboard from '.././components/Dashboard';
import Register from '.././components/Register';
import Menu from '.././components/Menu';
import axios from 'axios';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.childHandler = this.childHandler.bind(this);
  }

  childHandler = (data) => {
    this.setState({users:[], childData:data});
    //alert();
    //this.props.activateGeod({"ttt":"qrty"});
    console.log("======>"+data);
  }

  componentDidMount() {
    axios.get('users.json')
      .then(res => {
        const users = res.data;
        this.setState({ users });
        this.props.saveUsers({users});
      });
  }

  render() {
    const currentPath = window.location.pathname.toLowerCase();
    const Json = this.props.users.users;
    console.log("==>"+Json);
    return (
      <div>
         {/*{this.state.childData ? this.state.childData : "no child data"}*/}
         {currentPath.includes('dashboard') ? <Menu Categories={Json} callBackToParent={this.childHandler} /> : null}
         <div id="main">
           <header>Header</header>
           <div id="routeContent">
              <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/dashboard' component={Dashboard} />
                  <Route exact path='/signup' component={Register} />
              </Switch>
           </div>
         </div>
       </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({  
  users: state.users,
});

const mapDispatchToProps = { 
  saveUsers
};

const Container = withRouter(connect(  
  mapStateToProps,
  mapDispatchToProps
)(AppContainer));

export default Container;  