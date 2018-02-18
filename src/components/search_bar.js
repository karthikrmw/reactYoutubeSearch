import React, { Component } from 'react';


// create the component
class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term : '' };
  }

  render() {
    return (
      <div className="col-md-12">
        <input className="col-md-12 form-control"
        value = {this.state.term}
        onChange={(event) => this.onInputChange(event)}
        />
      </div>
    );
  }

  onInputChange(event) {
    this.setState({ term : event.target.value })
    this.props.onSearchChange(event.target.value);
  }
}


export default SearchBar;
