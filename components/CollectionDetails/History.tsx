import React from "react";
import TransactionHistory from "./TransactionHistory";

interface HistoryProps {}

const History: React.FunctionComponent<HistoryProps> = (props) => {
  return (
    <>
      <div className="flex flex-col gap-5 overflow-scroll h-[290px] px-2 py-2">
        {[1, 2, 3, 4, 5, 6, 7, 7, 8].map((_, index) => {
          return <TransactionHistory key={index} />;
        })}
      </div>
    </>
  );
};

export default History;
