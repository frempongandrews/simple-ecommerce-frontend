import cookie from "cookie";
import Link from "next/link";
import Auth from "../components/Auth";

const AuthPage = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <Auth />
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   const { req } = context;
//   const cookieInHeaders = req.headers.cookie || "";
//   const cookieObj = cookie.parse(cookieInHeaders);
//   // on the server - redirect to home when user is logged in
//   let isTokenPresentAndValid = false;
//   if (cookieObj.hasOwnProperty("access_token")) {
//     // user is logged in
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       isTokenPresentAndValid,
//     },
//   };
// };

export default AuthPage;
