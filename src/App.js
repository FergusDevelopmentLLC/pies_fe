import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Navigation from './components/Navigation'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import PieForm from "./components/PieForm"
import PieGalleryContainer from "./components/PieGalleryContainer"
import PrivateRoute from './components/PrivateRoute'
import PieController from './components/PieController'
import ProfileContainer from './components/ProfileContainer'

const App = () => {

  //https://stackoverflow.com/questions/49186183/reactjs-privateroute-that-accesses-url-parameter
  const PieControllerWrapper = props => {
    if(props.match.params.id) return <PieController {...{...props, id: parseInt(props.match.params.id)}} />
    return null
  }

  return (
    
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={ LoginForm } />
        <Route exact path="/login" component={ LoginForm } />
        <Route exact path="/signup" component={ SignupForm } />
        <PrivateRoute exact path="/profile" component={ ProfileContainer } />
        <PrivateRoute exact path="/pies" component={ PieGalleryContainer } />
        <PrivateRoute exact path="/pies/new" component={ PieForm } />
        <PrivateRoute exact path="/pies/:id" component={ PieControllerWrapper } />
      </Switch>
    </Router>
    
  )
}
export default App;
