import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch} from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import TeeshirtCards from './components/Teeshirt/TeeshirtCards'
import TeeshirtDetails from "./components/Teeshirt/SingleTeeshirt";
import SellerTeeshirts from "./components/Teeshirt/UserPage";
import CreateTeeshirtForm from "./components/Forms/SellingForm";
import UpdateListingForm from "./components/Forms/UpdateListing";
import CartPage from "./components/Carts";
import SearchPage from "./components/SearchPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (       
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <TeeshirtCards />
          </Route>
          <Route exact path="/selling">
            <CreateTeeshirtForm />
          </Route>
          <Route exact path="/listings">
            <SellerTeeshirts />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path={`/teeshirts/:teeshirtId/update`}>
            <UpdateListingForm />
          </Route>
          <Route exact path="/teeshirts/:teeshirtId">
            <TeeshirtDetails />
          </Route>
          <Route exact path="/search/:q">
            <SearchPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
