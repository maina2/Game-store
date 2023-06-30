import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3000/Orders');
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/Orders/${id}`);
      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {orders.map((order) => (
        <div key={order.OrderID}>
          <p>Order ID: {order.OrderID}</p>
          <p>User Name: {order.UserName}</p>
          <p>Game ID: {order.GameID}</p>
          <button onClick={() => deleteOrder(order.OrderID)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
