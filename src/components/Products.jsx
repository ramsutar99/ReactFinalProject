// import React, { useEffect, useState } from "react";
// import "../App.css";

// function Products() {
//   const [products, setProducts] = useState(
//     localStorage.getItem("products")
//       ? JSON.parse(localStorage.getItem("products"))
//       : []
//   );
//   const [expiredFilter, setExpiredFilter] = useState(false);
//   const [lowStockFilter, setLowStockFilter] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch(
//         "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products"
//       );
//       const data = await response.json();

//       localStorage.setItem("products", JSON.stringify(data));
//     };
//     if (localStorage.getItem("products")) {
//       setProducts(JSON.parse(localStorage.getItem("products")));
//     } else {
//       fetchProducts();
//     }
//   }, []);

//   const filteredProducts = products.filter((product) => {
//     if (expiredFilter && lowStockFilter) {
//       return (
//         product.expiryDate <= new Date().toISOString() && product.stock < 100
//       );
//     } else if (expiredFilter) {
//       return product.expiryDate <= new Date().toISOString();
//     } else if (lowStockFilter) {
//       return product.stock < 100;
//     }
//     return true;
//   });

//   return (
//     <section id="products-page">
//       <div className="loader"></div>
//       <h1 className="page-header">Products</h1>
//       <div id="products-table">
//         <div className="filters" style={{ display : 'flex', margin : '0 50px', position:'fixed'}}>
//         <h2>Filters</h2>
//           <h4>
//             Count: <span id="order-count">{filteredProducts.length}</span>
//           </h4>
//           <label>
//             <input
//               type="checkbox"
//               className="checkboxes"
//               checked={expiredFilter}
//               onChange={() => setExpiredFilter(!expiredFilter)}
//             />
//             Expired
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               className="checkboxes"
//               checked={lowStockFilter}
//               onChange={() => setLowStockFilter(!lowStockFilter)}
//             />
//             Low Stock
//           </label>
//         </div>

//         <table>
//           <thead>
//             <tr>
//               <th className="id">ID</th>
//               <th>Product Name</th>
//               <th>Product Brand</th>
//               <th>Expiry Date</th>
//               <th className="price">Unit Price</th>
//               <th className="stock">Stock</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredProducts.map((product) => (
//               <tr key={product.id}>
//                 <td className="id">{product.id}</td>
//                 <td>{product.medicineName}</td>
//                 <td>{product.medicineBrand}</td>
//                 <td>{product.expiryDate}</td>
//                 <td className="price">{`$${product.unitPrice}`}</td>
//                 <td className="stock">{product.stock}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }

// export default Products;


// class  ========================================================================================


import React, { Component } from "react";
import "../App.css";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : [],
      expiredFilter: false,
      lowStockFilter: false,
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const response = await fetch(
      "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products"
    );
    const data = await response.json();

    localStorage.setItem("products", JSON.stringify(data));
    this.setState({ products: data });
  }

  handleExpiredFilterChange = () => {
    this.setState((prevState) => ({
      expiredFilter: !prevState.expiredFilter,
    }));
  };

  handleLowStockFilterChange = () => {
    this.setState((prevState) => ({
      lowStockFilter: !prevState.lowStockFilter,
    }));
  };

  render() {
    const { products, expiredFilter, lowStockFilter } = this.state;

    const filteredProducts = products.filter((product) => {
      if (expiredFilter && lowStockFilter) {
        return (
          product.expiryDate <= new Date().toISOString() && product.stock < 100
        );
      } else if (expiredFilter) {
        return product.expiryDate <= new Date().toISOString();
      } else if (lowStockFilter) {
        return product.stock < 100;
      }
      return true;
    });

    return (
      <section id="products-page">
        <div className="loader"></div>
        <h1 className="page-header">Products</h1>
        <div
          id="products-table"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="filters" style={{ display : 'flex', margin : '0 50px', position:'fixed'}}>
            <h2>Filters</h2>
            <h4>
              Count: <span id="order-count">{filteredProducts.length}</span>
            </h4>
            <label>
              <input
                type="checkbox"
                className="checkboxes"
                checked={expiredFilter}
                onChange={this.handleExpiredFilterChange}
              />
              Expired
            </label>
            <label>
              <input
                type="checkbox"
                className="checkboxes"
                checked={lowStockFilter}
                onChange={this.handleLowStockFilterChange}
              />
              Low Stock
            </label>
          </div>

          <table>
            <thead>
              <tr>
                <th className="id">ID</th>
                <th>Product Name</th>
                <th>Product Brand</th>
                <th>Expiry Date</th>
                <th className="price">Unit Price</th>
                <th className="stock">Stock</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td className="id">{product.id}</td>
                  <td>{product.medicineName}</td>
                  <td>{product.medicineBrand}</td>
                  <td>{product.expiryDate}</td>
                  <td className="price">{`$${product.unitPrice}`}</td>
                  <td className="stock">{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Products;
