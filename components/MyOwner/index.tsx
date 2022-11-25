import React from "react";
import ProfileBanner from "../Collections/ProfileBanner";
import ProfileDetails from "../Collections/ProfileDetails";
import { GridItemSix, GridItemTwelve, GridLayout } from "../Layout/GridLayout";
import MyCollections from "./MyCollections";
import Profile from "./Profile";

interface MyOwnerProps {}

const MyOwner: React.FunctionComponent<MyOwnerProps> = (props) => {
  return (
    <>
      <div>
        <ProfileBanner cover="" className="py-20" />
        <GridLayout className="py-8">
          <GridItemTwelve>
            <Profile />
          </GridItemTwelve>
          <GridItemTwelve>
            <MyCollections />
          </GridItemTwelve>
        </GridLayout>
      </div>
    </>
  );
};

export default MyOwner;
