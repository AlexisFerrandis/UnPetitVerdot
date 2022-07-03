import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import SignInForm from "./SignInForm";

const SignUpForm = () => {
	const [formSubmit, setFormSubmit] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async (e) => {
		e.preventDefault();

		const terms = document.getElementById("terms");
		const firstNameError = document.querySelector(".firstname.error");
		const lastNameError = document.querySelector(".lastname.error");
		const emailError = document.querySelector(".email.error");
		const passwordError = document.querySelector(".password.error");
		const termsError = document.querySelector(".terms.error");

		termsError.innerHTML = "";

		if (!terms.checked) {
			termsError.innerHTML = "Veuillez valider les conditions générales";
		} else {
			await axios({
				method: "post",
				url: `${process.env.REACT_APP_API_URL}api/user/register`,
				data: {
					firstName,
					lastName,
					email,
					password,
				},
			})
				.then((res) => {
					console.log(res);
					if (res.data.errors) {
						firstNameError.innerHTML = res.data.errors.firstname;
						lastNameError.innerHTML = res.data.errors.lastname;
						emailError.innerHTML = res.data.errors.email;
						passwordError.innerHTML = res.data.errors.password;
					} else {
						setFormSubmit(true);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<>
			{formSubmit ? (
				<>
					<SignInForm />
					<span></span>
					<h4 className="success">Enregistrement réussi, veuillez vous connecter</h4>
				</>
			) : (
				<form action="" onSubmit={handleRegister} id="sign-up-form" className="sign-up-form">
					<h2>Création de compte</h2>
					<h4>Entrez les informations suivantes :</h4>

					<input type="text" name="firstname" id="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="Prénom" />
					<div className="firstname error"></div>

					<input type="text" name="lastname" id="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Nom" />
					<div className="lastname error"></div>

					<input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Adresse e-mail" />
					<div className="email error"></div>

					<input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Mot de passe" />
					<div className="password error"></div>

					<input type="checkbox" id="terms" />
					<label htmlFor="terms">
						J'accepte les <NavLink to="/terms-of-service">conditions générales conditions générales</NavLink>
					</label>
					<div className="terms error"></div>
					<br />

					<input type="submit" value="Créer mon compte"></input>
				</form>
			)}
		</>
	);
};

export default SignUpForm;
