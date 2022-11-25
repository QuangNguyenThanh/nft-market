import { InformationCircleIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { ethers } from "ethers";
import React, { Dispatch, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { number, object, string } from "zod";
import useSellToken from "../../hooks/useSellToken";
import { configContractMarket } from "../../models";
import Form, { useZodForm } from "../UI/Form";
import { InputTextField } from "../UI/FormField";
import { Spinner } from "../UI/Spinner";

interface FormCompleteListingProps {
  isLoading: boolean;
  tokenId: any;
  setIsLoading: Dispatch<boolean>;
  setIsShowAmount: Dispatch<boolean>;
  setStep: Dispatch<number>;
  setSeller: Dispatch<string>;
}

const FormCompleteListing: React.FunctionComponent<
  FormCompleteListingProps
> = ({
  isLoading,
  tokenId,
  setIsLoading,
  setIsShowAmount,
  setStep,
  setSeller,
}) => {
  const newApprovalNFT = object({
    amount: string(),
  });

  const form = useZodForm({
    schema: newApprovalNFT,
  });

  const [priceToken, setPriceToken] = useState<string>("0.0000");

  const { config } = usePrepareContractWrite({
    ...configContractMarket,
    functionName: "listItem",
    args: [
      "0x7086109a11eC0f81313a2D06E030DF2FdE6eC218",
      tokenId,
      ethers.utils.parseEther(priceToken),
    ],
    overrides: {
      gasLimit: 200000,
    },
    onError(error) {
      console.error("Has error form = ", { error });
    },
  });

  const { write, status, reset, data } = useContractWrite(config);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    write?.();
  };

  useEffect(() => {
    const waitConfirm = data?.wait();
    waitConfirm?.then((res) => {
      setIsLoading(false);
      setStep(1);
      setIsShowAmount(false);
      setSeller(res.from);
      toast.success("You are selling listing success!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      reset();
    });
  }, [data]);

  return (
    <>
      <span className={clsx({ "blur-[2px]": isLoading })}>
        You are about to sell a
      </span>
      <span className={clsx("font-bold", { "blur-[2px]": isLoading })}>
        CryptoSparkminds #{tokenId}
      </span>
      <div className={clsx({ "blur-[2px]": isLoading })}>
        <Form form={form} className="mt-2">
          <InputTextField
            label="Amount (ETH)"
            className="mb-[10px] px-3 py-2 bg-white rounded"
            placeholder="Enter your a price"
            {...(form.register("amount"),
            {
              onChange: (e) => {
                setPriceToken(e.target.value);
              },
            })}
          />
          <div className="flex">
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
          </div>

          <div className="text-gray-500 text-sm flex justify-center items-center gap-2 mb-4">
            <InformationCircleIcon className="w-4 h-4" />
            <div>
              You will be asked to review and confirm this listing from your
              wallet.
            </div>
          </div>
          <button
            onClick={onSubmit}
            className="text-center m-auto w-full px-2 py-2 mt-[10px] rounded bg-primary-color border-primary-color text-white hover:bg-[#28a765] text-[16px]"
          >
            Confirm listing
          </button>
        </Form>
      </div>
    </>
  );
};

export default FormCompleteListing;
