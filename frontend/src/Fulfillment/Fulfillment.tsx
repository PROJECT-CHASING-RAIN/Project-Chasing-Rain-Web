export default {
    fulfillment: [
      {
        _id: 1,
        shippedDate: '02/20/2025',
        deliveryPeriod: '02/20/2025 - 02/25/2025',
        user: {
          name: 'Taylor',
        },
        arrived: true,
        isDelivered: true,
        deliveredDate: '02/25/2025',
      },
      {
        _id: 2,
        shippedDate: '02/20/2025',
        deliveryPeriod: '02/20/2025 - 02/27/2051',
        user: {
          name: 'Pedro',
        },
        arrived: false,
        isDelivered: false,
        deliveredDate: null,
     }, {
        _shippedDate: null,
        deliveryPeriod: '02/22/2025 - 02/23/2051',
        user: {
          name: 'Sanjay',
        },
        arrived: false,
        isDelivered: false,
        deliveredDate: null,
      },
    ],
  };