import React from "react";
import { Link } from "react-router-dom";

export const CreateContact = () => {
	return (
		<nav className="navbar justify-content-end navbar-light bg-light mb-3">
			<div className="ml-auto">
				<Link to="/new">
					<button className="btn btn-success">Create a new contact</button>
				</Link>
			</div>
		</nav>
	);
};
