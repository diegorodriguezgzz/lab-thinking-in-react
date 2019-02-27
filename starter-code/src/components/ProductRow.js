import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
  
  render () {
    return (
      <tr className={(this.props.stocked) ? "product--stocked": "product--out"}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;