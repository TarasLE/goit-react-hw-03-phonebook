import React, { Component } from 'react'
import ContactForm from './components/Contactform/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import styles from './App.module.css'

export default class App extends Component {
    state = {
        contacts: [],
        filter: '',
    }

    refreshContactsList = (state) => {
        this.setState({
            contacts: state,
        })
    }

    handleContact = (event) => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
    }

    contactFilter = (event) => {
        this.setState({ filter: event.currentTarget.value })
    }

    render() {
        const normalizedFilter = this.state.filter.toLowerCase()
        const filteredElements = this.state.contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizedFilter)
        )
        return (
            <div className={styles.Container}>
                <h1>Phonebook</h1>

                <ContactForm
                    addContact={this.addContact}
                    contacts={this.state.contacts}
                    refreshState={this.refreshContactsList}
                />
                <h1>Contacts</h1>
                <Filter value={this.state.filter} filter={this.contactFilter} />
                <ContactList
                    contacts={filteredElements}
                    refreshState={this.refreshContactsList}
                />
            </div>
        )
    }
}
