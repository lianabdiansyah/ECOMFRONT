import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProducts from "./AddProducts";
import UpdateProducts from "./UpdateProducts";
import Protected from "./Protected";
import ListProducts from "./ListProducts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Header/> */}
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addproducts">
            <Protected Cmp={AddProducts} />
            {/* <AddProducts /> */}
          </Route>
          <Route path="/updateproducts">
            <Protected Cmp={UpdateProducts} />
            {/* <UpdateProducts /> */}
          </Route>
          <Route path="/">
            <Protected Cmp={ListProducts} />
            {/* <AddProducts /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
