import { Route, BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import PieContainer from "./containers/PieContainer"
import store from "./store"

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Route path="/pies/:id" exact render={(props) => (<PieContainer {...props} id={ parseInt(props.match.params.id) }/>)} />
      </Router>
    </Provider>
  )
}
export default App;
