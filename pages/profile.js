import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const router = useRouter();
  const {
    state: { currentUser },
  } = useContext(AppContext);

  useEffect(() => {
    if (!currentUser) {
      router.push("/auth");
    }
  }, [currentUser]);

  return (
    <div className="container" style={{ minHeight: "60vh" }}>
      <h2>Profile page</h2>
      <div>{JSON.stringify(currentUser, null, 4)}</div>
    </div>
  );
};

export default ProfilePage;
