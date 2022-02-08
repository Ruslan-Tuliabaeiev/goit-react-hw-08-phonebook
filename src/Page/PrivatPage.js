import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { authSelectors} from "../redux/auth";



export default function PrivatPage({children, redirectTo, ...routeProps}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <Route {...routeProps}>
            {isLoggedIn? children: <Redirect to={redirectTo} />}
      </Route>
  )
}

