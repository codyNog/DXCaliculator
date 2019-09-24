import { useState } from "react";
import { createContainer } from "unstated-next";

const useProfile = () => {
  const [profile, setProfile] = useState("");
  const onChangeProfile = (value: string) => {
    setProfile(value);
  };
  return {
    profile,
    onChangeProfile
  };
};

const Profile = createContainer(useProfile);

export default Profile;
