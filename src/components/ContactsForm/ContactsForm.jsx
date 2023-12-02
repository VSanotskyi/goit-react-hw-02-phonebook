import { Component } from 'react';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.getContacts(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                width: '200px',
              }}
        >
          <h3>Add contact</h3>
          <div>
            <label htmlFor='inputName'>Name</label>
            <br />
            <input
              id='inputName'
              type='text'
              name='name'
              required
              value={this.state.name}
              onChange={this.handleChangeInput}
            />
          </div>
          <div>
            <label htmlFor='inputNumber'>Phone number</label>
            <br />
            <input
              id='inputNumber'
              type='tel'
              name='number'
              required
              value={this.state.number}
              onChange={this.handleChangeInput}
            />
          </div>
          <button type='submit'
                  style={{ width: '100px' }}
          >Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactsForm;
