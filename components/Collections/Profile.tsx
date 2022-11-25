import React from "react";
import { GridItemTwelve, GridLayout } from "../Layout/GridLayout";
import Avatar from "./Avatar";
import Details from "./";
import ProfileDetails from "./ProfileDetails";
import Collections from "./Collections";

interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = (props) => {
  return (
    <>
      <GridLayout className="py-8">
        <GridItemTwelve>
          <ProfileDetails />
        </GridItemTwelve>
        <GridItemTwelve>
          <Collections />
        </GridItemTwelve>
      </GridLayout>
    </>
  );
};

export default Profile;
