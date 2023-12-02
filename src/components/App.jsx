import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from './ContactsForm/ContactsForm';
import Contacts from './Contacts/Contacts';
import SearchContact from './SearchContact/SearchContact';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    nameForSearch: '',
    newContacts: [],
  };

  getContacts = (data) => {
    const newData = {
      ...data,
      id: nanoid(),
    };

    if (this.state.contacts.find(el => el.name === data.name) ||
      this.state.contacts.find(el => el.number === data.number)) {
      alert('Error');
      return;
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, newData],
    }));
  };

  getNameFomSearch = name => this.setState({ nameForSearch: name });

  searchContact = () => this.state.contacts.filter(
    el => el.name.toLowerCase().includes(this.state.nameForSearch))
    .sort((a, b) => a.name.localeCompare(b.name));

  deleteContact = (id) => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <ContactsForm getContacts={this.getContacts} />
        <SearchContact getNameFomSearch={this.getNameFomSearch} />
        {
          this.searchContact().length >= 1 && (
            <Contacts
              contacts={this.searchContact}
              deleteContact={this.deleteContact}
            />
          )
        }
      </div>
    );
  }
}

export default App;

