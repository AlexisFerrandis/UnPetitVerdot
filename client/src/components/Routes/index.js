import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import NavBarPrincipal from "../NavBarPrincipal";

import Home from "../../pages/Home";
import Account from "../../pages/Account";
import Cart from "../../pages/Cart";

import TermsOfServices from "../../pages/TermsOfServices";

import NotFound from "../../pages/NotFound";

const index = () => {
	return (
		<div>
			<Router>
				{/* <NavBarPrincipal /> */}
				<Routes>
					<Route path="/" exact element={<Home />} />

					<Route path="/account" element={<Account />} />
					<Route path="/cart" element={<Cart />} />

					<Route path="/terms-of-service" element={<TermsOfServices />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
};

export default index;
