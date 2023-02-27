// import React, { useState, useEffect } from "react";
// import "../App.css";

// function Orders() {
//   const [orders, setOrders] = useState(
//     localStorage.getItem("orders")
//       ? JSON.parse(localStorage.getItem("orders"))
//       : []
//   );
//   const [filters, setFilters] = useState({
//     New: true,
//     Packed: true,
//     InTransit: true,
//     Delivered: true,
//   });

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const response = await fetch(
//         "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"
//       );

//       const data = await response.json();
//       setOrders(data);
//       localStorage.setItem("orders", JSON.stringify(data));
//     };

//     if (localStorage.getItem("orders")) {
//       setOrders(JSON.parse(localStorage.getItem("orders")));
//     } else {
//       fetchOrders();
//     }
//   }, []);

//   const handleFilterChange = (filterName) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [filterName]: !prevFilters[filterName],
//     }));
//   };

//   const filteredOrders = orders.filter((order) => filters[order.orderStatus]);

//   return (
//     <section id="orders-page">
//       {/* Loader */}
//       <div className="loader"></div>

//       {/* Content */}
//       <h1 className="page-header">Orders</h1>
//       <div id="orders-table">
//         <div className="filters">
//           <h2>Filters</h2>
//           <h4>
//             Count: <span id="order-count">{filteredOrders.length}</span>
//           </h4>
//           <label htmlFor="newFilter">
//             <input
//               type="checkbox"
//               className="checkboxes"
//               name="New"
//               id="newFilter"
//               checked={filters.New}
//               onChange={() => handleFilterChange("New")}
//             />
//             New
//           </label>
//           <label htmlFor="packedFilter">
//             <input
//               type="checkbox"
//               className="checkboxes"
//               name="Packed"
//               id="packedFilter"
//               checked={filters.Packed}
//               onChange={() => handleFilterChange("Packed")}
//             />
//             Packed
//           </label>
//           <label htmlFor="inTransitFilter">
//             <input
//               type="checkbox"
//               className="checkboxes"
//               name="InTransit"
//               id="inTransitFilter"
//               checked={filters.InTransit}
//               onChange={() => handleFilterChange("InTransit")}
//             />
//             In Transit
//           </label>
//           <label htmlFor="deliveredFilter">
//             <input
//               type="checkbox"
//               className="checkboxes"
//               name="Delivered"
//               id="deliveredFilter"
//               checked={filters.Delivered}
//               onChange={() => handleFilterChange("Delivered")}
//             />
//             Delivered
//           </label>
//         </div>

//         <table>
//           <thead>
//             <tr>
//               <th className="id">ID</th>
//               <th>Customer</th>
//               <th>Date</th>
//               <th>Amount</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody id="orders">
//             {filteredOrders.map((order) => (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.customerName}</td>
//                 <td>{order.orderDate}</td>
//                 <td>{order.amount}</td>
//                 <td>{order.orderStatus}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// }

// export default Orders;

// class

import React, { Component } from "react";
import "../App.css";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      filters: {
        New: true,
        Packed: true,
        InTransit: true,
        Delivered: true,
      },
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    // const { orders } = this.state;
    if (localStorage.getItem("orders")) {
      this.setState({ orders: JSON.parse(localStorage.getItem("orders")) });
    } else {
      this.fetchOrders();
    }
  }

  async fetchOrders() {
    const response = await fetch(
      "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"
    );
    const data = await response.json();
    localStorage.setItem("orders", JSON.stringify(data));
    this.setState({ orders: data });
  }

  handleFilterChange(filterName) {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        [filterName]: !prevState.filters[filterName],
      },
    }));
  }

  render() {
    const { orders, filters } = this.state;
    const filteredOrders = orders.filter((order) => filters[order.orderStatus]);

    return (
      <section id="orders-page">
       

        {/* Content */}
        <h1 className="page-header">Orders</h1>
        <div id="orders-table">
          <div className="filters"  >
            <h2>Filters</h2>
            <h4>
              Count: <span id="order-count">{filteredOrders.length}</span>
            </h4>
            <label htmlFor="newFilter">
              <input
                type="checkbox"
                className="checkboxes"
                name="New"
                id="newFilter"
                checked={filters.New}
                onChange={() => this.handleFilterChange("New")}
              />
              New
            </label>
            <label htmlFor="packedFilter">
              <input
                type="checkbox"
                className="checkboxes"
                name="Packed"
                id="packedFilter"
                checked={filters.Packed}
                onChange={() => this.handleFilterChange("Packed")}
              />
              Packed
            </label>
            <label htmlFor="inTransitFilter">
              <input
                type="checkbox"
                className="checkboxes"
                name="InTransit"
                id="inTransitFilter"
                checked={filters.InTransit}
                onChange={() => this.handleFilterChange("InTransit")}
              />
              In Transit
            </label>
            <label htmlFor="deliveredFilter">
              <input
                type="checkbox"
                className="checkboxes"
                name="Delivered"
                id="deliveredFilter"
                checked={filters.Delivered}
                onChange={() => this.handleFilterChange("Delivered")}
              />
              Delivered
            </label>
          </div>

          <table>
            <thead>
              <tr>
                <th className="id">ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="orders">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.amount}</td>
                  <td>{order.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}


export default Orders;