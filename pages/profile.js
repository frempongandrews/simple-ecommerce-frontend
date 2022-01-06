import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const currentUser = state.currentUser;
  useEffect(() => {}, [currentUser]);

  if (!currentUser) {
    return (
      <div className="container" style={{ minHeight: "60vh" }}>
        <h2>Profile page</h2>
        <p>Login to see your profile details</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ minHeight: "60vh" }}>
      <h2>Profile page</h2>
      <div>{JSON.stringify(currentUser, null, 4)}</div>
    </div>
  );
};

export default ProfilePage;
