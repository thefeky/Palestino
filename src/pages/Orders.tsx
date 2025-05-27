import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface OrderItem {
  productID: string;
  productName: string;
  productPrice: number;
  quantity: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  address: string;
  phone: string;
  createdAt: string;
}

function Orders() {
  const { user } = useUser();
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    const stored = localStorage.getItem(`orders_${user.id}`);
    if (stored) {
      setOrders(JSON.parse(stored));
    }
  }, [user, navigate]);

  return (
    <>
      <title>Orders | Palestino</title>
      <meta
        name="description"
        content="View your order history on Palestino."
      />

      <main className="w-[90%] max-w-6xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-gray-600">You haven’t placed any orders yet.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border p-4 rounded-md bg-gray-50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                  <h2 className="font-semibold text-lg">Order #{order.id}</h2>
                  <span className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleString()}
                  </span>
                </div>

                <p className="text-sm text-gray-700">
                  Shipping to: {order.address} — {order.phone}
                </p>

                <ul className="mt-3 space-y-1 text-sm">
                  {order.items.map((item) => (
                    <li
                      key={`${order.id}-${item.productID}`}
                      className="flex justify-between"
                    >
                      <span>
                        {item.productName} × {item.quantity}
                      </span>
                      <span>
                        ${(item.productPrice * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-right font-semibold mt-2">
                  Total: ${order.total.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default Orders;
