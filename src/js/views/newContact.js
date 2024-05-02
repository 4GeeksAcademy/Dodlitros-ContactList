import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import "../../styles/newContact.css";

export const NewContact = () => {

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [adress, setAdress] = useState("")
	
	const {store, actions} = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<h5>Full Name</h5>
					<input 
						type="text" 
						placeholder="Full Name"
						value={name}
						onChange={(e)=>setName(e.target.value)}
					/>
				<h5>Email</h5>
					<input 
						type="text" 
						placeholder="Email" 
						value={email}
						onChange={(e)=>setEmail(e.target.value)}
					/>
				<h5>Phone</h5>
					<input 
						type="text" 
						placeholder="Phone" 
						value={phone}
						onChange={(e)=>setPhone(e.target.value)}
					/>
				<h5>Adress</h5>
					<input 
						type="text" 
						placeholder="Adress" 
						value={adress}
						onChange={(e)=>setAdress(e.target.value)}
					/>
				<br/>
				<button  className="btn btn-primary mt-5"> Save</button>
			</div>
			<br />
			<Link to="/">
				<button 
					className="btn btn-primary"
					onClick={ ()=> actions.Add() }
				>Back home</button>
			</Link>
		</div>
	);
};
