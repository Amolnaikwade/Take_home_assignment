import { useRef } from "react";

const OrderTable = ({ orders }: { orders: any[] }) => {
  const tableRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={tableRef} style={{ height: "500px", overflow: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Order Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderAmount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
