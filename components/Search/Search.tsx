import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useReadContractNFT from "../../hooks/useReadContractNFT";
import ProfileBanner from "../Collections/ProfileBanner";
import { GridItemTwelve, GridLayout } from "../Layout/GridLayout";
import Collections from "./Collections";
import Profile from "./Profile";

interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = (props) => {
  const router = useRouter();
  const tokenOwnerOf = useReadContractNFT({
    functionName: "tokensOfOwner",
    args: router.query.address,
  });
  const [numOfTokenUser, setNumOfTokenUser] = useState<number | undefined>(
    undefined
  );
  const [tokensUser, setTokensUser] = useState<Array<number | string> | []>([]);
  useEffect(() => {
    if (tokenOwnerOf && tokenOwnerOf?.length !== 0) {
      const _tokensUser = tokenOwnerOf
        .toString()
        .split(",")
        .map((_) => Number(_));
      setTokensUser(_tokensUser);
      setNumOfTokenUser(_tokensUser.length);
    }
  }, [tokenOwnerOf]);
  return (
    <>
      <div>
        <ProfileBanner cover="" className="py-20" />
        <GridLayout className="py-8">
          <GridItemTwelve>
            <Profile
              address={router.query.address}
              numOfTokenUser={numOfTokenUser}
            />
          </GridItemTwelve>
          <GridItemTwelve>
            <Collections tokensUser={tokensUser} />
          </GridItemTwelve>
        </GridLayout>
      </div>
    </>
  );
};

export default Search;
