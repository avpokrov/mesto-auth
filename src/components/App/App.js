import { Route, Redirect, Switch } from "react-router-dom";
import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import Register from "../Register/Register";
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import LoginPopup from '../LoginPopup/LoginPopup';



function App() {

  let loggedIn = false;

  return (
    <div className="container">
      <Header />
      <Switch>

        <Route path='/sing-up'>
          <Register />
        </Route>

        <Route path='/sing-in'>
          <Login />
        </Route>

        <ProtectedRoute 
          exact path='/'
          loggedIn={loggedIn}
          component={Cards}
        />
      </Switch>
      <LoginPopup />

    </div>
  );
}

export default App;
