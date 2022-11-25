import React from "react";
import Profile from "./Profile";
import ProfileBanner from "./ProfileBanner";

interface CollectionsProps {}

const Collections: React.FunctionComponent<CollectionsProps> = (props) => {
  return (
    <>
      <ProfileBanner cover="" />
      <Profile />
    </>
  );
};

export default Collections;
