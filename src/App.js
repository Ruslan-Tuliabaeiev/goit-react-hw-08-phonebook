import { lazy, Suspense} from "react";
import { useSelector } from "react-redux";

import {  Switch } from "react-router-dom";
import {AppBar} from "./components/AppBar/AppBar";
import PrivatPage from "./Page/PrivatPage";
import Public from "./Page/Public";
import { authSelectors } from "./redux/auth";
import { useRefreshTokenQuery } from './redux/auth/operations';





const HomePage = lazy(() => import('./Page/HomePage' /* webpackChunkName: "HomePage" */))
const LoginPage = lazy(() => import('./Page/LoginPage' /* webpackChunkName: "LoginPage" */))
const RegisterPage = lazy(() => import('./Page/RegisterPage' /* webpackChunkName: "RegisterPage" */))
const ContactsPage = lazy(() => import('./Page/ContactsPage' /* webpackChunkName: "ContactsPage" */))




function App() {
  
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const token = useSelector(authSelectors.getToken)
  const {isLoading} = useRefreshTokenQuery(token, {
    skip: token === null || isLoggedIn,
  }) 

  return (
    <div >
      { 
          isLoading
          ? (
         <p>Loading...</p>
      )  : (
        <>
          <AppBar />

            <Switch >
              <Suspense fallback={<p>Load...</p>} >
                <Public exact path='/' >
                  <HomePage />
                </Public>

                <Public exact path='/register' restricted>
                  <RegisterPage />
                </Public>

                <Public exact path='/login' redirectTo="/contact">
                  <LoginPage />
                </Public>

                <PrivatPage path='/contact' redirectTo='/login'>
                  <ContactsPage />
                </PrivatPage>
      </Suspense>


        </Switch>
        </>
      )} 
    </div>
  );
}

export default App;
