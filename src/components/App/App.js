import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

// import Notebook from '../notebook/notebook'
import NotebookCreate from '../notebook/notebookCreate'
import NotebookIndex from '../notebook/notebookIndex'
import NotebookEdit from '../notebook/notebookEdit'
// import ListCreate from '../list/listCreate'
// import NotebookList from '../notebook/notebookList'
// import Notebooks from '../notebook/notebookMain'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/notebooks' render={() => (
            <div>
              <NotebookCreate msgAlert={this.msgAlert} user={user} />
              <br />
              <NotebookIndex user={user} />
            </div>
          )} />
          <AuthenticatedRoute user={user} exact path='/edit' render={(noteProp) => (
            <NotebookEdit user={user} noteProp={noteProp} />
          )} />
        </main>
      </Fragment>
    )
  }
}
// <AuthenticatedRoute user={user} path='/notebooks' render={() => (
//   <Notebook user={user}/>
// )} />
// <Notebook user={user} />

// <Route exact path='notebooks' component={NotebookIndex} />

export default App
