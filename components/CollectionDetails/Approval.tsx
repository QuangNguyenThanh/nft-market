import { InformationCircleIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import React, { Dispatch } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { configContractNFT } from "../../models";
import { hideString } from "../../utils";

interface ApprovalProps {
  tokenId: any;
  setIsLoading: any;
  isLoading: boolean;
  setStep: Dispatch<number>;
}
const addressMarket = "0x04745b42e6Adde4AC018aA4FA325A57Df0243CB0";
const Approval: React.FunctionComponent<ApprovalProps> = ({
  tokenId,
  setIsLoading,
  isLoading,
  setStep,
}) => {
  const { config } = usePrepareContractWrite({
    ...configContractNFT,
    functionName: "approve",
    args: [process.env.NEXT_PUBLIC_ADDRESS_MARKER, tokenId],
    onError(error) {
      console.error("Has error approval = ", { error });
    },
  });
  const { writeAsync } = useContractWrite(config);
  const handleApprovalToken = async () => {
    try {
      setIsLoading(true);
      const writeTxn = await writeAsync?.();
      const result = await writeTxn?.wait();
    } catch (error) {
      console.log("error", error);
    } finally {
      console.log("finallly");
      setIsLoading(false);
      setStep(2);
    }
  };
  return (
    <>
      <div className={clsx({ "blur-[2px]": isLoading })}>
        <div className={clsx("flex flex-col mb-4")}>
          <div className="flex justify-between text-gray-600">
            <div className="font-bold">To Address</div>
            <div>
              {hideString({
                start: 5,
                end:
                  (process.env.NEXT_PUBLIC_ADDRESS_MARKER &&
                    process.env.NEXT_PUBLIC_ADDRESS_MARKER.length - 4) ||
                  0,
                originalString: process.env.NEXT_PUBLIC_ADDRESS_MARKER || "",
                replaceBy: "...",
              })}
            </div>
          </div>

          <div className="flex justify-between text-gray-600">
            <div className="font-bold">Token ID</div>
            <div>{tokenId}</div>
          </div>
        </div>
        {/* <div className="flex">
        <div className="flex">
          <img
            src="https://testnets.opensea.io/static/images/placeholder.png"
            alt="Crypto SparkMinds"
            className="w-20 h-20 text-gray-500"
          />
          <div className="text-gray-500 flex flex-col justify-center">
            <div>CryptoSparkminds</div>
            <div>Quantity: 1</div>
          </div>
        </div>
      </div> */}

        <div className="text-gray-500 text-sm flex justify-center items-center gap-2 mb-4">
          <InformationCircleIcon className="w-4 h-4" />
          <div>
            You will be asked to review and confirm this listing from your
            wallet.
          </div>
        </div>
        <button
          type="submit"
          onClick={handleApprovalToken}
          className="text-center m-auto w-full px-2 py-2 mt-[10px] rounded bg-primary-color border-primary-color text-white hover:bg-[#28a765] text-[16px]"
        >
          Approve
        </button>
      </div>
    </>
  );
};

export default Approval;
