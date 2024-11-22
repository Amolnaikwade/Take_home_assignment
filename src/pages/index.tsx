import React from "react";
import OrderTable from "../components/OrderTable";
import { useOrders } from "../hooks/useOrders";
import Spinner from "../components/Spinner";

const Home: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError, error } = useOrders();

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      
      {/* Error Handling */}
      {isError && <p>Error loading data: {error?.message}</p>}

      {/* Render the order tables */}
      {data?.pages.map((page, index) => (
        <OrderTable key={index} orders={page.data} />
      ))}
      
      {/* Spinner for loading next page */}
      {isFetchingNextPage ? (
        <Spinner />
      ) : (
        hasNextPage && (
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            Load More
          </button>
        )
      )}
    </div>
  );
};

export default Home;
