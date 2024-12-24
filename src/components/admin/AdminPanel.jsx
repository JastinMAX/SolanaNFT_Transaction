import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import './AdminPanel.css'; // Import CSS file
import { fetchOrders } from '../../firebase/query';
const AdminPanel = () => {
  const { publicKey } = useWallet();
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const checkAdmin = async () => {
      const adminPublicKeys = [
        'YOUR_ADMIN_PUBLIC_KEY_1',
        'YOUR_ADMIN_PUBLIC_KEY_2',
      ];

      if (publicKey && adminPublicKeys.includes(publicKey.toString())) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      //setLoading(false);
    };

    //checkAdmin();
  }, [publicKey]);

  useEffect( () => {



    fetchOrdersHelper();
  }, [isAdmin]);

    const fetchOrdersHelper = async () => {
        const orders = await fetchOrders();
        setOrders(orders);
        setLoading(false);
    }


  const groupedOrders = orders.reduce((acc, order) => {
    const { userId } = order;
    if (!acc[userId]) {
      acc[userId] = [];
    }
    acc[userId].push(order);
    return acc;
  }, {});
  console.log(groupedOrders)

  if (loading) return <div>Loading...</div>;

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      {isAdmin ? (
        <div>
          {Object.keys(groupedOrders).length > 0 ? (
            Object.keys(groupedOrders).map((userId) => (
              <div key={userId} className="user-orders">
                <h2>User ID: {userId}</h2>
                <ul>
                  {groupedOrders[userId].map((order) => (
                    <li key={order.id} className="order-item">
                      <p><strong>Order ID:</strong> {order.id}</p>
                      <p><strong>NFT Address:</strong> {order.nftMetadata.nftAddress}</p>
                      <p><strong>Size:</strong> {order.nftMetadata.size}</p>
                      <p><strong>Trait:</strong> {JSON.stringify(order.nftMetadata.trait)}</p>
                        <p><strong>Address:</strong> {order.billingInfo.address}</p>
                        <p><strong>Full Name:</strong> {order.billingInfo.name}</p>
                        <p><strong>Email:</strong> {order.billingInfo.email}</p>
                        <p><strong>City:</strong> {order.billingInfo.city}</p>
                      
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      ) : (
        <h2>You are not an admin.</h2>
      )}
    </div>
  );
};

export default AdminPanel;
