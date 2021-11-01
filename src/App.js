import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import SearchPage from './pages/SearchPage';
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SearchPage />
        </Route>
        <Route path="/user" exact>
          <UserPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
