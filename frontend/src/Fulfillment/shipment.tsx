import React from 'react';
import { Link } from 'react-router-dom';
import data from './shipment';


function shipment() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Shipment</h3>
      </div>
      <div className="order-list">
        <table className="table">
            <thead>
                <tr>
                    <th>Shipped Date</th>
                    <th>Delivery Period</th>
                    <th>Name</th>
                    <th>Arrived</th>
                    <th>isDelivered</th>
                    <th>deliveredDate</th>
                </tr>
            </thead>

            <tbody>
            {data.fulfillment.map((fulfillment) => (
              <tr key={fulfillment._id}>
                <td>{fulfillment.shippedDate}</td>
                <td>{fulfillment.deliveryPeriod}</td>
                <td>{fulfillment.user.name}</td>
                <td>{fulfillment.arrived.toString()}</td>
                <td>{fulfillment.isDelivered.toString()}</td>
                <td>{fulfillment.deliveredDate}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default shipment;
