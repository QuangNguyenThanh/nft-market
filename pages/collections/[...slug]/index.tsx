import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GridItemSix, GridLayout } from "../../../components/Layout/GridLayout";
import big from "../../../public/big-4.jpg";
import { Tab, Disclosure } from "@headlessui/react";
import toast from "react-hot-toast";

import Tabs from "../../../components/Collections/Tabs";
import TabDetails from "../../../components/CollectionDetails/TabDetails";
import History from "../../../components/CollectionDetails/History";
import { hideString } from "../../../utils";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { configContractMarket, configContractNFT } from "../../../models";
import { Result } from "ethers/lib/utils";
import { ethers } from "ethers";
import useReadContractMarket from "../../../hooks/useReadContractMarket";
import { Spinner } from "../../../components/UI/Spinner";
import useReadContractNFT from "../../../hooks/useReadContractNFT";
import useAccountWallet from "../../../hooks/useAccountWallet";
import { Modal } from "../../../components/UI/Modal";
import FormCompleteListing from "../../../components/CollectionDetails/FormCompleteListing";
import Loading from "../../../components/UI/Loading";
import clsx from "clsx";
import Approval from "../../../components/CollectionDetails/Approval";
import Logger from "../../../lib/logger";
interface CollectionDetailsProps {}
const addressMarket = "0x9D700Dd233f7Ef509F4284d1b0D459Dbcd2e29B5";

const addressCreator = "0xD3648917C9F9B8b4DEDcB6C9159C04f157DA9e0e";
const addressCollection = "0x7086109a11eC0f81313a2D06E030DF2FdE6eC218";
const CollectionDetails: React.FunctionComponent<CollectionDetailsProps> = (
  props
) => {
  const router = useRouter();
  const { address } = useAccountWallet();

  const [tabCurrent, setTabCurrent] = useState<number>(1);
  const [tokenId, setTokenId] = useState<number>(1);
  const [ownerOfToken, setOwnerOfToken] = useState<Result | string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [isShowAmount, setIsShowAmount] = useState<boolean>(false);
  const [priceNFT, setPriceNFT] = useState<number>();
  const [seller, setSeller] = useState<string>("");
  const [onSaleNFTs, setOnSaleNFTs] = useState<Array<number> | undefined | []>(
    []
  );
  const [listTokenOwner, setListTokenOwner] = useState<Array<number> | []>([]);
  const [isUserOwnerToken, setIsUserOwnerToken] = useState<boolean>(false);

  const onSellToken = async () => {
    setIsShowAmount(true);
  };

  const getApproved = useReadContractNFT({
    functionName: "getApproved",
    args: [tokenId],
  });
  const { data: ownerOf } = useContractRead({
    ...configContractNFT,
    functionName: "ownerOf",
    args: [tokenId],
  });

  const getAllListing = useReadContractMarket({
    functionName: "getAllListtingFromAddress",
    args: "0x7086109a11eC0f81313a2D06E030DF2FdE6eC218",
  });
  const getListing = useReadContractMarket({
    functionName: "getListing",
    args: ["0x7086109a11eC0f81313a2D06E030DF2FdE6eC218", tokenId],
  });
  // console.log("getListing", getListing);
  useEffect(() => {
    if (
      getListing &&
      getListing.seller !== "0x0000000000000000000000000000000000000000"
    ) {
      setPriceNFT(+ethers.utils.formatEther(getListing.price));
      setSeller(getListing.seller);
    } else {
      setPriceNFT(0);
      setSeller("");
    }
  }, [getListing]);

  useEffect(() => {
    setOnSaleNFTs(
      getAllListing
        ?.toString()
        .split(",")
        .map((_) => Number(_))
    );
  }, [getAllListing]);

  const [isTrade, setIsTrade] = useState<boolean>(false);
  // console.log("onSaleNFTs", onSaleNFTs);
  useEffect(() => {
    if (onSaleNFTs && onSaleNFTs.length !== 0) {
      const _index = onSaleNFTs.findIndex((_tokenId) => _tokenId === tokenId);
      if (_index === -1) {
        setIsTrade(false);
      } else {
        setIsTrade(true);
      }
    }
  }, [onSaleNFTs, tokenId]);

  // console.log("ononSaleNFTs", onSaleNFTs);
  const tokensOfOwner = useReadContractNFT({
    functionName: "tokensOfOwner",
    args: [address],
  });

  useEffect(() => {
    if (tokensOfOwner && tokensOfOwner.length !== 0) {
      setListTokenOwner(
        tokensOfOwner
          .toString()
          .split(",")
          .map((_) => Number(_))
      );
    }
  }, [tokensOfOwner]);

  // ========== CHECK TOKEN ==========
  useEffect(() => {
    if (listTokenOwner) {
      const _index = listTokenOwner.findIndex((id) => tokenId === id);
      _index !== -1 ? setIsUserOwnerToken(true) : setIsUserOwnerToken(false);
    }
  }, [listTokenOwner, tokenId]);

  useEffect(() => {
    if (getApproved?.toString() === addressMarket) {
      setStep(2);
    } else {
      setStep(1);
    }
  }, [getApproved, tokenId]);

  useEffect(() => {
    ownerOf && setOwnerOfToken(ownerOf);
  }, [ownerOf]);

  useEffect(() => {
    if (
      router.query &&
      router.query.slug?.length !== 0 &&
      router.query.slug &&
      router.query.slug[1]
    ) {
      setTokenId(+router.query.slug[1]);
    }
  }, [router]);

  const configBuyItem = usePrepareContractWrite({
    ...configContractMarket,
    functionName: "buyItem",
    args: [process.env.NEXT_PUBLIC_ADDRESS_NFT, tokenId],
    overrides: {
      value: ethers.utils.parseEther(priceNFT ? priceNFT.toString() : "0.00"),
      // gasLimit: 100000,
    },
  });

  const buyItem = useContractWrite(configBuyItem.config);

  const onSubmit = async () => {
    if (address) {
      try {
        setIsLoading(true);
        const writeTxn = await buyItem.writeAsync?.();
        const result = await writeTxn?.wait();
      } catch (error) {
        Logger.error("We has error: ", error);
      } finally {
        // console.log("result", writeTxn);
        toast.success("Buy listing success!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setIsLoading(false);
      }
    } else {
      toast.error("Please connect MetaMask", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  // Cancel listing
  // const { configCancelListing } = usePrepareContractWrite({});
  const configRemoveListing = usePrepareContractWrite({
    ...configContractMarket,
    functionName: "cancelListing",
    args: [process.env.NEXT_PUBLIC_ADDRESS_NFT, tokenId],
    overrides: {
      gasLimit: 200000,
    },
    onError(error) {
      console.error("Has error remove = ", { error });
    },
  });

  const removeListing = useContractWrite(configRemoveListing.config);

  const handleRemoveListing = async () => {
    // console.log("tokenId", tokenId);
    try {
      setIsLoading(true);
      const writeTxn = await removeListing.writeAsync?.();
      const result = await writeTxn?.wait();
    } catch (error) {
      Logger.error("We has error: ", error);
    } finally {
      setSeller("");
      toast.success("Remove listing success!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setIsLoading(false);
    }
  };
  const onMakeOffer = () => {
    toast.success("Coming soon!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  // handle buy token
  const handleBuyToken = () => {};
  // Logger.log("[CONFIG_NFT]: ", configContractNFT);
  // Logger.log("[CONFIG_MARKET]: ", configContractMarket);
  // console.log("seller", seller);
  return (
    <>
      <GridLayout className="py-20">
        <GridItemSix>
          <div>
            <picture>
              <img
                className="rounded"
                src="https://assets.raribleuserdata.com/testnet/v1/image/t_image_big/aHR0cHM6Ly9pa3p0dHAubXlwaW5hdGEuY2xvdWQvaXBmcy9RbVlEdlBBWHRpSmc3czhKZFJCU0xXZGdTcGhRZGFjOGoxWXVRTk54Y0dFMWhnLzU5LnBuZw=="
                alt="Landscape picture"
              />
            </picture>
          </div>
        </GridItemSix>
        <GridItemSix className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold">
            CryptoSparkminds #{tokenId ? tokenId : " - - -"}
          </h2>
          <div className="flex gap-48">
            <div className="flex flex-col gap-1">
              <p className="font-bold">Creator</p>
              <div className="flex items-center gap-3 -top-3 left-2 rounded-xl rounded-full ring-2 hover:ring-4 w-10 h-10 hover:scale-[1.05] cursor-pointer transition-all">
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
                <p>
                  {hideString({
                    start: 5,
                    end: (addressCreator && addressCreator.length - 4) || 0,
                    originalString: addressCreator || "",
                    replaceBy: "...",
                  })}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold">Collection</p>
              <div className="flex items-center gap-3 -top-3 left-2 rounded-xl rounded-full ring-2 hover:ring-4 w-10 h-10 hover:scale-[1.05] cursor-pointer transition-all">
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
                <p>
                  {hideString({
                    start: 5,
                    end:
                      (addressCollection && addressCollection.length - 4) || 0,
                    originalString: addressCollection || "",
                    replaceBy: "...",
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Tabs tabCurrent={tabCurrent} setTabCurrent={setTabCurrent} />
          </div>
          <div className="flex flex-col gap-4">
            {tabCurrent === 1 && <TabDetails owner={ownerOfToken} />}
            {tabCurrent === 2 && <History />}
          </div>

          {isUserOwnerToken ? (
            <>
              {/* Action */}
              {address !== seller && (
                <div>
                  <button
                    onClick={onSellToken}
                    className="w-max px-[40px] py-[12px] text-xl rounded-md hover:shadow-rise-sm transition-all font-black cursor-pointer bg-primary-color text-white"
                  >
                    Sell
                  </button>
                </div>
              )}
              {address === seller && (
                <>
                  <div>
                    <div className="text-xl font-bold text-gray-check-box">
                      Price:
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                        alt="ETH"
                        className="w-6 h-6"
                      />
                      <span className="text-2xl font-bold">{priceNFT} ETH</span>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleRemoveListing}
                      className="w-max px-[40px] py-[12px] text-xl rounded-md hover:shadow-rise-sm transition-all font-black cursor-pointer bg-primary-color text-white"
                    >
                      {isLoading ? <Spinner /> : "Remove listing"}
                    </button>
                  </div>
                </>
              )}
            </>
          ) : isTrade ? (
            <>
              <div>
                <div className="text-xl font-bold text-gray-check-box">
                  Price:
                </div>
                <div className="flex gap-2 items-center">
                  <img
                    src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                    alt="ETH"
                    className="w-6 h-6"
                  />
                  <span className="text-2xl font-bold">{priceNFT} ETH</span>
                </div>
              </div>
              {/* Action */}
              {address !== seller && (
                <div>
                  <button
                    onClick={onSubmit}
                    className="w-max px-[40px] py-[12px] text-xl rounded-md hover:shadow-rise-sm transition-all font-black cursor-pointer bg-primary-color text-white"
                  >
                    {isLoading ? <Spinner /> : "Buy now"}
                  </button>
                </div>
              )}
              {address === seller && (
                <>
                  <div>
                    <button
                      onClick={onSubmit}
                      className="w-max px-[40px] py-[12px] text-xl rounded-md hover:shadow-rise-sm transition-all font-black cursor-pointer bg-primary-color text-white"
                    >
                      Buy now
                    </button>
                  </div>
                </>
              )}
            </>
          ) : (
            <div>
              <button
                onClick={onMakeOffer}
                className="w-max px-[40px] py-[12px] text-xl rounded-md hover:shadow-rise-sm transition-all font-black cursor-pointer bg-primary-color text-white"
              >
                Make a offer
              </button>
            </div>
          )}
        </GridItemSix>
      </GridLayout>
      <Modal
        title="Complete your listing"
        show={isShowAmount}
        onClose={() => setIsShowAmount(false)}
      >
        <div className="py-3.5 px-5 ">
          {isLoading && <Loading />}
          <div className={clsx({ "blur-[2px]": isLoading })}>
            <div className="breadcrumb flat">
              <a href="#" className={clsx({ active: step === 1 })}>
                Approval
              </a>
              <a href="#" className={clsx({ active: step === 2 })}>
                Complete price nft
              </a>
            </div>
          </div>
          {step === 1 && (
            <Approval
              tokenId={tokenId}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setStep={setStep}
            />
          )}
          {step === 2 && (
            <FormCompleteListing
              isLoading={isLoading}
              tokenId={tokenId}
              setIsLoading={setIsLoading}
              setIsShowAmount={setIsShowAmount}
              setStep={setStep}
              setSeller={setSeller}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default CollectionDetails;
