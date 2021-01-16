import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import CCSignIn from './ClassComponents/CCSignIn';
import CCSignUp from './ClassComponents/CCSignUp';
import CCMain from './ClassComponents/CCMain';
import FCNotes from './FunctionalComponents/FCNotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [],
      listNotes: [],
    };
  }

  getNewUser = (objUser) => {
    console.log(objUser)
    this.setState({
      listUsers: [...this.state.listUsers, objUser]
    })
  }

  getNewNote = (objNote) => {
    console.log(objNote)
    this.setState({
      listNotes: [...this.state.listNotes, objNote]
    })
  }

  getIndexToDeleteFromChild = (i) => {
    let notes = this.state.listNotes.filter((note, index) => index !== i)
    this.setState({ listNotes: notes })
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <CCSignIn getUsersfromParent={this.state.listUsers} />} />
          <Route path="/signup" render={() => <CCSignUp sendUsersToParent={this.getNewUser} />} />
          <Route path="/main" render={() => <CCMain sendNoteToParent={this.getNewNote} />} />
          <Route path="/notes" render={() => <FCNotes getNotefromParent={this.state.listNotes} sendDeletedNoteFromToParent={this.getIndexToDeleteFromChild} />} />
        </Switch>
      </div>
    )
  };
}

export default withRouter(App);
