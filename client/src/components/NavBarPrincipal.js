import React from "react";
import { NavLink } from "react-router-dom";
import HamburgerBtn from "./MenuPrincipal/HamburgerBtn";

const NavBarPrincipal = () => {
	return (
		<header className="nav-bar-principal">
			<div className="nav-bar-principal__menu-btn">
				<HamburgerBtn />
			</div>
			<div className="nav-bar-principal__links">
				<div className="nav-bar-principal__links--side">
					<NavLink to="/">L'Enseigne</NavLink>
					<NavLink to="/">La Collection</NavLink>
					<NavLink to="/">Les Domaines</NavLink>
				</div>
				<NavLink to="/">
					<div className="nav-bar-principal__links--logo">logo</div>
				</NavLink>
				<div className="nav-bar-principal__links--side">
					<NavLink to="/cart">
						<img src="../assets/pictos/cart-shopping-solid.svg" alt="shopping-cart" />
					</NavLink>
					<NavLink to="/account">
						<img src="../assets/pictos/user-solid.svg" alt="account" />
					</NavLink>
					<NavLink to="/">
						<button>FR</button>
					</NavLink>
					<NavLink to="/">
						<button>EN</button>
					</NavLink>
				</div>
			</div>
		</header>
	);
};

export default NavBarPrincipal;
