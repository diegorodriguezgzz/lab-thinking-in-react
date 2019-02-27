import React, { Component } from 'react';
import ProductRow from './ProductRow';
import './ProductTable.css'

class ProductTable extends Component {
  state = {
    displayData : this.props.displayData,
    checked : this.props.checked,
    query : this.props.query
  }

  render() {
    return (<div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.state.displayData.map((el, i) => (
            <ProductRow key={i} {...el} />
          ))}
        </tbody>
      </table>

    </div>)
  }
}

export default ProductTable;