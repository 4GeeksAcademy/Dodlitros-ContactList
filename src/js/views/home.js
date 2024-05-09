import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext"; 
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context);

    const handleDeleteContact = async (id) => {
        await actions.deleteContact(id);
        actions.listContacts(); 
    };
    
    useEffect(() => {
        actions.listContacts();
    }, []);
    useEffect(()=>{
    }, [store.contacts])

    return (
        <div className="container text-center mt-5">
            {store.contacts && store.contacts.map(contact => (
                <div key={contact.id} className="card">
                    <div className="row pb-5">
                        <div className="col-2"> <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="foto de usuario" /> </div>
                        <div className="col ">
                            <h2 className="col "> {contact.name} </h2>
                            <ul className="col d-flex  justify-content-around">
                                <li className="d-flex algo "> <i className="fas fa-location-dot"> {contact.address}</i></li>
                                <li className="d-flex algo "> <i className="fas fa-envelope"> {contact.email} </i></li>
                                <li className="d-flex algo "> <i className="fas fa-phone"> {contact.phone} </i></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <Link to={`/edit/${contact.id}`}>
                                <div className="btn btn_editar" > Edit </div>
                            </Link>
                            <div className="btn btn_delete" onClick={() => handleDeleteContact(contact.id)}>Delete</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
