import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

class SearchBar extends Component {
  state = {
    isChecked : false
  }

  handleChange = (target) => {
    const {value} = target;
    this.props.liftQueryUp(value);
  }

  toggleCheck = () => {
    this.setState({isChecked : !this.state.isChecked});
    this.props.liftCheckedUp(this.state.isChecked);
  }

  render() {
    return (<div className="search-bar">
      <Search 
      placeholder="Search..."
      onChange={e => this.handleChange(e.target)}
      style={{width : '50vw'}}
      />
      <br/>
    <input type="checkbox" name="inStock" id="stock" value={this.state.isChecked} onChange={this.toggleCheck}/>
    <label htmlFor="inStock">Only show products in stock</label>
    </div>)
  }
}

export default SearchBar;