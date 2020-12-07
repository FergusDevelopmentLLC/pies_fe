import { Route, BrowserRouter as Router } from "react-router-dom"
import PieContainer from "./containers/PieContainer"

const App = () => {
  return (
    <Router>
      <Route path="/:id" exact render={(props) => (<PieContainer {...props} id={ parseInt(props.match.params.id) }/>)} />
    </Router>
  )
}
export default App;
