import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { data } from '../data/data.json';

class FiltSearchBar extends Component {
  state = {
    checked : false,
    query : "",
    displayData : data
  };

  filterChecked = () => {
    const {checked} = this.state;
    //If unchecking, display everything.
    //If checking, then what is displayed will be a subset of displayed data
    let updatedData = [...data];
    if (checked) {
      updatedData = updatedData.filter(el => el.stocked);
    }
    updatedData = this.filterByQuery(updatedData, this.state.query);
    this.setState({displayData : updatedData});
  }

  //Utility function to aid both updating and filterChecked
  filterByQuery = (applyData, query) => {
    return applyData.filter(el => el.name.toUpperCase().indexOf(query.toUpperCase()) !== -1);
  }

  updateChecked = (status) => {
    this.setState({
      checked : status
    });
    this.filterChecked();
  }

  updateQuery = (newQuery) => {
    this.setState({
      query : newQuery
    });
    this.filterChecked();
  }

  render () 
  {
    return (
      <div>
        <SearchBar liftCheckedUp={this.updateChecked} liftQueryUp={this.updateQuery}/>
        <ProductTable {...this.state} />
      </div>
    )
  }
}

export default FiltSearchBar;