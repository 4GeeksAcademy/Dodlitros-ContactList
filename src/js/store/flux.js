const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					"name":"Astrid",
					"phone":"32000000000",
					"email":"asipa.974@gmail.com",
					"address":"cra 83 #33-66",
					"id":1
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
					setStore({contacts : data });
					return data;
				} catch (error) {
					console.error('Error fetching contacts:', error.message);
					return null;
				}
			},
			addContact: async (full_name, email, phone, address) => {
				try {
					const agenda_slug = 'carlitos';
					const data = {
						full_name,
						email,
						phone,
						address
					};
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
					setStore(prevState => ({
						contacts: [...prevState.contacts, responseData]
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
			updateContact: async (id, full_name, email, address, phone) => {
				try {				
					const data = {
						full_name: full_name,
						email: email,
						address: address,
						phone: phone
					};
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