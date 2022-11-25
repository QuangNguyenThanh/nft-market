import React from "react";
import profile_banner from "../../public/profile_banner.png";
interface ProfileBannerProps {
  cover: string;
  className?: string;
}

const ProfileBanner: React.FunctionComponent<ProfileBannerProps> = ({
  cover,
  className,
}) => {
  return (
    <>
      <div
        className={`h-52 sm:h-80 py-20`}
        style={{
          //   backgroundImage: `url(${profile_banner})`,
          backgroundImage: `url(${`https://i.seadn.io/gae/5c-HcdLMinTg3LvEwXYZYC-u5nN22Pn5ivTPYA4pVEsWJHU1rCobhUlHSFjZgCHPGSmcGMQGCrDCQU8BfSfygmL7Uol9MRQZt6-gqA?auto=format&w=1920`})`,
          backgroundSize: cover ? "cover" : "30%",
          backgroundPosition: "center center",
          backgroundRepeat: cover ? "no-repeat" : "repeat",
          // backgroundColor: "rgba(229, 232, 235, 0.314)",
        }}
        data-test="profile-cover"
      />
    </>
  );
};

export default ProfileBanner;
