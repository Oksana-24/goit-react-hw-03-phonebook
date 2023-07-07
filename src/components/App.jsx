import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

import initialContact from './dataBase/initialContacts';

import nanoId from 'nano-id';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: initialContact,
    filter: '',
  };

  addContact = data => {
    const newContact = {
      id: nanoId(),
      ...data,
    };
    this.state.contacts.map(contact => contact.name).includes(data.name)
      ? alert(`${data.name} is already in contact`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  findContact = evt => {
    this.setState({ filter: evt.target.value });
  };

  filter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div className={css.appContainer}>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.findContact} />
          <ContactList
            contacts={this.filter()}
            handleDelete={this.handleDelete}
          />
        </Section>
      </div>
    );
  }
}

export default App;
