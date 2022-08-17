import React from "react";
import { useState } from "react";
import MyProfileView from "./myProfileView";
import MyProfileModification from "./myProfileModification";

const MyProfile = () => {
  const [myProfile, setMyProfile] = useState(0);

  const handleMyProfile = () => {
    if (myProfile === 0) {
      setMyProfile(1);
    } else if (myProfile === 1) {
      setMyProfile(0);
    }
  };

  const myProfileObj = {
    0: <MyProfileView handleMyProfile={handleMyProfile} />,
    1: <MyProfileModification handleMyProfile={handleMyProfile} />,
  };
  return <div className="myPageProfile">{myProfileObj[myProfile]}</div>;
};

export default MyProfile;
