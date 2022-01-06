import cookie from "cookie";

const requireAuth = (gssp) => {
  // gssp - getServerSideProps of the protected page

  return async (context) => {
    const { req } = context;
    console.log("********req.headers.cookie", req.headers.cookie);
    const cookieInHeaders = req.headers.cookie || "";
    const cookieObj = cookie.parse(cookieInHeaders);
    const noToken = !cookieObj["access_token"];
    if (noToken) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
    console.log("**********Run own gssp");
    return await gssp(context);
  };
};

export default requireAuth;
