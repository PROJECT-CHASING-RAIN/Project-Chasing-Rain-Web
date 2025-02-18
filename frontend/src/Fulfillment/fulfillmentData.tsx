const fulfillmentData = {
    orders: [
      {
        _id: '1',
        createdAt: '2025-02-18',
        totalPrice: 100,
        user: { name: 'John Doe' },
        isShipped: true,
      },
      {
        _id: '2',
        createdAt: '2025-02-17',
        totalPrice: 200,
        user: { name: 'Jane Smith' },
        isShipped: false,
      },
      {
        _id: '3',
        createdAt: '2025-02-12',
        totalPrice: 42.90,
        user: { name: 'Sanjay' },
        isShipped: false,
      },
      {
        _id: '4',
        createdAt: '2025-02-09',
        totalPrice: 49.90,
        user: { name: 'Taylor'},
        isShipped: true,
      }
    ],
  };
  
  export default fulfillmentData;