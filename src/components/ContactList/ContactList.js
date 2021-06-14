import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

import './ContactList.scss';
import { Component } from 'react';

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <>
        <div className="contact__loader">
          {this.props.isLoading && (
            <Loader
              type="Bars"
              color="#000000"
              height={100}
              width={100}
              timeout={3000}
            />
          )}
        </div>
        <TransitionGroup component="ul" className="contact-list">
          {this.props.contacts.map(({ id, name, number }) => (
            <CSSTransition
              key={id}
              timeout={250}
              classNames="dub"
              unmountOnExit
            >
              <li className="contact-list__item" key={id}>
                <p className="contact-list__item__name">{name}</p>
                <p className="contact-list__item__number">{number}</p>
                <button
                  type="button"
                  onClick={() => this.props.onDeleteContact(id)}
                >
                  <svg
                    height="365.696pt"
                    viewBox="0 0 365.696 365.696"
                    width="365.696pt"
                  >
                    <path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
                  </svg>
                </button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
