import { Redirect, Route, BrowserRouter as Router, useHistory} from "react-router-dom";
import Login from "./pages/Login/Login";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={Login} exact={true} />
        <Redirect exact from="/" to="/login" />
      </div>
    </Router>
  );
}

export default App;
