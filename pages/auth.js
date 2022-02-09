import Auth from "../components/Auth";
import { checkUserAuthStatus } from "../lib/helpers";

const AuthPage = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <Auth />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  return await checkUserAuthStatus(context);
};

export default AuthPage;
