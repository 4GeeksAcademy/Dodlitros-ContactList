	const getState = ({ getStore, getActions, setStore }) => {
		return {
			store: {
				contacts: [
					{
						"name":"",
						"phone":"",
						"email":"",
						"address":"",
						"id":""
					},
				]
			},
			actions: {
				listContacts: async () => {
					try {
						const response = await fetch('https://playground.4geeks.com/contact/agendas/carlitos/contacts', {method: 'GET'});
						if (!response.ok) {
							throw new Error('Failed to fetch contacts');
						}
						const data = await response.json();
						setStore({contacts : data.contacts });
						return data.contacts;
					} catch (error) {
						console.error('Error fetching contacts:', error.message);
						return null;
					}
				},
				addContact: async (data) => {
					try {
						const response = await fetch('https://playground.4geeks.com/contact/agendas/carlitos/contacts', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(data)
						});
						if (!response.ok) {
							throw new Error('Failed to add contact');
						}
						const responseData = await response.json();
						console.log('Contact added successfully:', responseData);
						// Actualiza el store con el nuevo contacto agregado
						setStore(prevState => ({
							contacts: [...prevState.contacts, responseData] // Agrega el nuevo contacto al array de contactos existente
						}));
						return responseData;
					} catch (error) {
						console.error('Error adding contact:', error.message);
						return null;
					}
				},
				deleteContact: async (id) => {
					try {
						const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlitos/contacts/${id}`, {
							method: 'DELETE'
						});
						if (!response.ok) {
							throw new Error('Failed to delete contact');
						}
						setStore(prevState => ({
							contacts: prevState.contacts.filter(contact => contact.id !== id)
						}));
						const data = await response.json();
						console.log('Contact deleted successfully:', data);
						return data;
					} catch (error) {
						console.error('Error deleting contact:', error.message);
						return null;
					}
				},
				updateContact: async (data, id) => {
					try {				

						const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlitos/contacts/${id}`, {
							method: 'PUT',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify(data)
						});
						if (!response.ok) {
							throw new Error('Failed to update contact');
						}
						const responseData = await response.json();
						console.log('Contact updated successfully:', responseData);
						return responseData;
					} catch (error) {
						console.error('Error updating contact:', error.message);
						return null;
					}
				},
				getContact: async (id) => {
					try {
						const response = await fetch(`https://playground.4geeks.com/contact/agendas/carlitos/contacts/${id}`);
						if (!response.ok) {
							throw new Error('Failed to fetch contact');
						}
						return await response.json();
					} catch (error) {
						console.error('Error fetching contact:', error.message);
						return null;
					}
				}	
			}	
		};
	};
	export default getState;