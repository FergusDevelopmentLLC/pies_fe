import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import PieContainer from "./containers/PieContainer"
import PieForm from "./components/PieForm"
import store from "./store"
import PieGalleryContainer from "./containers/PieGalleryContainer"

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route path="/pies" exact render={(props) => (<PieGalleryContainer {...props} />)} />
          <Route path="/pies/new" exact render={(props) => (<PieForm {...props} />)} />
          <Route path="/pies/:id" exact render={(props) => (<PieContainer {...props} id={ parseInt(props.match.params.id) }/>)} />
        </Switch>
      </Router>
    </Provider>
  )
}
export default App;
