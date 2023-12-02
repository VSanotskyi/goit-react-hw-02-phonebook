import { Component } from 'react';

class SearchContact extends Component {


  handleInput = ({ target: { value } }) => {
    this.props.getNameFomSearch(value.toLowerCase());
  };


  render() {
    return (
      <div>
        <h3>Search contact</h3>
        <div>
          <label htmlFor='searchContact'>
            <input
              id='searchContact'
              type='text'
              name='name'
              onChange={this.handleInput}
            />
          </label>

        </div>
      </div>
    );
  }
}

export default SearchContact;
