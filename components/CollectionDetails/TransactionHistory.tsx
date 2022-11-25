import React from "react";

interface TransactionHistoryProps {}

const TransactionHistory: React.FunctionComponent<TransactionHistoryProps> = (
  props
) => {
  return (
    <>
      <div>
        <div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 z-50 -top-3 left-2 rounded-xl rounded-full ring-2 hover:ring-4 w-10 h-10 hover:scale-[1.05] cursor-pointer transition-all">
              <img
                src={
                  "https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&w=256"
                }
                width={40}
                height={40}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              />
              <div className="flex flex-col">
                <div className="w-max text-gray-check-box">
                  Bid <span className="font-bold">0.0005 ETH</span>
                </div>
                <div className="w-max text-gray-check-box">
                  by <span className="font-bold">Jimmy Wright</span> at
                  6/14/2021, 6:40 AM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
