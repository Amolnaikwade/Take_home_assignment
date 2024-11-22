import { useInfiniteQuery } from "@tanstack/react-query";
import fetchClient from "../utils/fetchClient";

// Define the structure of each order
interface Order {
  id: string;
  customerName: string;
  orderAmount: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  createdAt: string;
}

// Define the structure of the response for each page of orders
interface OrdersResponse {
  data: Order[];  // The orders for this page
  nextCursor: string | null;  // The cursor for the next page
}

// The hook to fetch orders with pagination
export const useOrders = () => {
  return useInfiniteQuery<OrdersResponse>(
    "orders",  // Query key
    async ({ pageParam = "" }) => {
      const response = await fetchClient.get("/orders", {
        params: { cursor: pageParam, limit: 50 }, // API params
      });
      return response.data;  // Data returned from the API
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor || false,  // Get the next cursor from the last page
    }
  );
};
