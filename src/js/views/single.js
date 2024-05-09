import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);

    const [contact, setContact] = useState({
        name: "",
        address: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        // Buscar el contacto por ID y actualizar el estado
		actions.listContacts();
        const foundContact = store.contacts.find(contact => contact.id === parseInt(id));
        if (foundContact) {
            setContact(foundContact);
        } else{
			console.log(id)
			console.log(store.contacts)
		}
    }, [id]);

    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        actions.updateContact(contact, id)
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Edit Contact</h1>
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={contact.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" className="form-control" id="address" name="address" value={contact.address} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" value={contact.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" className="form-control" id="phone" name="phone" value={contact.phone} onChange={handleChange} />
                    </div>
                    <div className="text-center">
                        <Link to="/"><button className="btn btn-primary mr-3" onClick={handleSave}>Save</button></Link>
                        <Link to="/" className="btn btn-secondary">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
