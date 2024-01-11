import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/demo.css";

export const Demo = () => {

	return (
		<div className="container">
			<div className="row">
				<h5>Full Name</h5>
				<input type="text" placeholder="Full Name" />
				<h5>Email</h5>
				<input type="text" placeholder="Email" />
				<h5>Phone</h5>
				<input type="text" placeholder="Phone" />
				<h5>Adress</h5>
				<input type="text" placeholder="Adress" />
				<br/>
				<button className="btn btn-primary mt-5"> Save</button>
			</div>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
