import React from 'react';

const PRODUCTS = [
  {category: 'Foods', price: '$69.69', stocked: true, name: 'Rice with Fish 1'},
  {category: 'Foods', price: '$30.03', stocked: true, name: 'Rice with Fish 2'},
  {category: 'Foods', price: '$22.22', stocked: false, name: 'Rice with Fish 3'},
  {category: 'Drinks', price: '$44.11', stocked: true, name: 'Milk 1'},
  {category: 'Drinks', price: '$30.69', stocked: false, name: 'Milk 2'},
  {category: 'Drinks', price: '$77.77', stocked: true, name: 'Milk 3'},
];

// FilterableProductTable
// - SearchBar
// - ProductTable
// -- ProductCategoryRow
// -- ProductRow

class ProductCategoryRow extends React.Component {
  render() {
    const { category } = this.props;

    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const { product } = this.props;
    const name = product.stocked ? product.name :
      <span style={{color: 'red'}}>{product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const { products, filterText, inStockOnly } = this.props;
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }

      if (inStockOnly && !product.stocked) {
        return;
      }

      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );

      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.value);
  }

  render() {
    const { filterText, inStockOnly } = this.props;

    return (
      <form>
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          { ' ' }
          Only show products in stock.
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);

    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly
    });
  }

  render() {
    const { filterText, inStockOnly } = this.state;
    const { products } = this.props;

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />

        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

class Thinking extends React.Component {
  render() {
    return (
      <FilterableProductTable products={PRODUCTS} />
    );
  }
}

export default Thinking;
