import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import requireAuth from "../components/hoc/requireAuth";

const ProfilePage = () => {
  const {
    state: { currentUser },
  } = useContext(AppContext);
  return (
    <div className="container" style={{ minHeight: "60vh" }}>
      <h2>Profile page</h2>
      <div>{JSON.stringify(currentUser, null, 4)}</div>
    </div>
  );
};

export const getServerSideProps = requireAuth((context) => {
  // Your normal `getServerSideProps` code here
  // get protected data here

  return {
    props: {},
  };
});

export default ProfilePage;
