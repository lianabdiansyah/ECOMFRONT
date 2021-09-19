import { BrowserRouter,Route } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import AddProducts from "./AddProducts";
import UpdateProducts from "./UpdateProducts";

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Header/> */}
        <Route path="/register">
          <Register/>
      </Route>
        <Route path="/login">
          <Login/>
      </Route>
        <Route path="/addproducts">
          <AddProducts/>
      </Route>
        <Route path="/updateproducts">
          <UpdateProducts/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
