import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";



import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";
import Overview from "./Pages/Overview/Overview";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import Settings from "./Pages/Settings/Settings";
import Shipment from "./Pages/Shipment/Shipment";
import Employee from "./Pages/Employee/Employee";
import Page404 from "./Pages/Page404/Page404";
import VerticalMenu from "./Components/VerticalMenu/VerticalMenu";
import UserProfile from "./Pages/UserProfile/UserProfile";
function App(): JSX.Element {
	return (
		<>
			<div className="container-fluid page-container">
				<Router basename={window.location.pathname || ""}>
					<MobileNavbar />
					<div className="page-content-wrapper flex-row row">
						<div className="col-md-0 col-lg-2 col-xl-2 vertical-menu-div">
							<VerticalMenu />
						</div>
						<div className="col-md-12 col-lg-10 col-xl-7 main-content-div">
							<Switch>
								<Route exact path="/">
									<Overview />
								</Route>
								<Route exact path="/orders">
									<Orders />
								</Route>
								<Route exact path="/products">
									<Products />
								</Route>
								<Route exact path="/settings">
									<Settings />
								</Route>
								<Route exact path="/shipment">
									<Shipment />
								</Route>
								<Route exact path="/employee">
									<Employee />
								</Route>
								<Route exact path="*">
									<Page404 />
								</Route>
							</Switch>	
						</div>
						<div className="col-md-0 col-lg-0 col-xl-3 user-profile-div">
							<UserProfile />
						</div>
					</div>
			
					
				</Router>
			</div>
		</>
	);
}

export default App;
