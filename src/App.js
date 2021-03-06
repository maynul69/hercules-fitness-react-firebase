
import './App.css';

import Home from './components/Home/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Packages from './components/Packages/Packages';
import Trainners from './components/Trainners/Trainners';
import Header from './components/Shared/Header/Header';
import Services from './components/Services/Services';
import LogIn from './components/LogIn/LogIn/LogIn';
import Register from './components/Register/Register/Register';
import Footer from './components/Shared/Footer/Footer';
import Authprovider from './context/Authprovider';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/packages">
              <Packages></Packages>
            </PrivateRoute>
            <PrivateRoute path="/trainners">
              <Trainners></Trainners>
            </PrivateRoute>
            <PrivateRoute path="/servicedetail/:name">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>

            <Route exact path="*">
              <ErrorPage></ErrorPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
