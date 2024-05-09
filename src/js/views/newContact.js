import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import "../../styles/newContact.css";

export const NewContact = () => {

	const [info, setInfo] = useState({
		"name":"",
		"phone":"",
		"email":"",
		"address":""
	})
	const {store, actions} = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<h5>Full Name</h5>
					<input 
						type="text" 
						placeholder="Full Name"
						value={info.name}
						onChange={(e)=>setInfo({...info, name: e.target.value})}
					/>
				<h5>Email</h5>
					<input 
						type="text" 
						placeholder="Email" 
						value={info.email}
						onChange={(e)=>setInfo({...info, email:e.target.value})}
					/>
				<h5>Phone</h5>
					<input 
						type="text" 
						placeholder="Phone" 
						value={info.phone}
						onChange={(e)=>setInfo({...info, phone:e.target.value})}
					/>
				<h5>Adress</h5>
					<input 
						type="text" 
						placeholder="Address" 
						value={info.address}
						onChange={(e)=>setInfo({...info, address:e.target.value})}
					/>
				<br/>
				<Link to="/">
					<button 
						className="btn btn-primary mt-5"
						onClick={()=> actions.addContact(info)}
						>Save</button>
				</Link>
			</div>
			<br />
			<Link to="/">
				<button 
					className="btn btn-primary"
				>Back home</button>
			</Link>
		</div>
	);
};
