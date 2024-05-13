import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";
import rigoBaby from "../../img/rigo-baby.jpg"

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	let contactID = 0

useEffect(() => {
		actions.setEditing(false);
	}, [])

	return (
		<div className="container">
			<div className="my-4 d-flex justify-content-end">
				<Link to="/form">
					<button className="btn btn-success fw-bold">Add new contact</button>
				</Link>
			</div>
			<ul className="list-group row">
				{store.contacts.map((contact, index) => 
					<li 
						key={index}
						className="list-group-item d-flex contact col-12"
						>
						<img src={rigoBaby} alt="Profile" className="img-profile rounded-circle"/>
						<div className="d-flex flex-column justify-content-center ms-3 ms-xl-5">
							<div className="fw-bold mb-1">{contact.name}</div>
							<div>
								<i className="fa-solid fa-phone me-xl-3"></i>
								{contact.phone}
							</div>
							<div>
								<i className="fa-solid fa-envelope me-xl-3"></i>
								{contact.email}
							</div>
							<div>
								<i className="fa-solid fa-location-dot me-xl-3"></i>
								{contact.address}
							</div>
						</div>
						<div className="ms-auto">
						<Link to="/form">
						<i className="fa-solid fa-pencil btn ms-auto" onClick={()=>actions.modifyContacts(contact.id)}></i>
						</Link>
						<i className="fa-solid fa-trash-can btn" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={()=> contactID = contact.id}></i>	
						</div>
					</li>
				)}
			</ul>
			<div className="modal" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="deteleModalLabel">What are u trying deleting your future girlfriend?</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						Maybe could be your girlfriend tomorrow =D
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-danger" data-bs-dismiss="modal">Nope</button>
						<button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={()=>actions.deleteContact(contactID)}>Yup</button>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}