import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage";
import HomePage from "./pages/HomePage/HomePage";
import ViewTypePage from "./pages/ViewTypePage/ViewTypePage";
//import food from "./resources/images/collection2.jpg";



function App() {
  return (
    <div className="App">
     
      <Route exact path="/" component={HomePage} />
      <Route
        exact
        path="/viewType/delivery"
        component={() => <ViewTypePage active={0} />}
      />
      <Route
        exact
        path="/viewType/dineOut"
        component={() => <ViewTypePage active={1} />}
      />
      <Route
        exact
        path="/viewType/nightLife"
        component={() => <ViewTypePage active={2} />}
      />
      <Route
        exact
        path="/collections"
        component={(props) => <CollectionsPage {...props.location.state}/>}
      />
      
    </div>
  );
}

export default App;
