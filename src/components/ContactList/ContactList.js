import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ContactList.module.css'

export default class ContactList extends Component {
    deleteContact = (contactId) => {
        const test = this.props.contacts.filter((contact) => {
            return contact.id != contactId
        })
        this.props.refreshState(test)
    }

    render() {
        return (
            <div className={styles.Container}>
                <ul>
                    {this.props.contacts.map((contact) => (
                        <li key={contact.id} className={styles.Contact}>
                            <span className={styles.ContactInfo}>
                                {contact.name} : {contact.number}
                            </span>
                            <button
                                type="button"
                                onClick={() => this.deleteContact(contact.id)}
                                className={styles.DeleteBtn}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
