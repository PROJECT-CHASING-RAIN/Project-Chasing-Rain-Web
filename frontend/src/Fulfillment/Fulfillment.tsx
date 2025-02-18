import React from 'react';
import { Link } from 'react-router-dom';
import fulfillmentData from './fulfillmentData';

function Fulfillment() {
  return (
    <div className="content content-margined">
      <div className="fulfillment-header">
        <h3>Fulfillment</h3>
      </div>
      <div className="fulfillment-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>USER</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {fulfillmentData.orders.map((order) => (
              <tr key={order._id} className={order.isShipped ? '' : 'unshipped'}>
                <td>{order._id}</td>
                <td>{order.createdAt}</td>
                <td>{order.totalPrice}</td>
                <td>{order.user.name}</td>
                <td>{order.isShipped ? 'Shipped' : 'Unshipped'}</td>
                <td>
                  <Link to={"/order/" + order._id} className="button secondary">
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fulfillment;