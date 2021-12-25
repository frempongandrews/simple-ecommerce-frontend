import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// shop-customer-login.html

const VerifyUser = () => {
  const router = useRouter();
  console.log("*********Router", router);
  const { code, email } = router.query;
  let canCheckCode = code && email;
  let [isCheckingCode, setIsCheckingCode] = useState(false);
  useEffect(() => {
    // todo: make call to check if code is valid
  }, []);
  return (
    <>
      <div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="breadcrumb-title">Verify Email</h1>
              {/*=======  breadcrumb list  =======*/}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-list__item">
                  <Link href={`/`}>
                    <a>HOME</a>
                  </Link>
                </li>
                <li className="breadcrumb-list__item breadcrumb-list__item--active">
                  verify email
                </li>
              </ul>
              {/*=======  End of breadcrumb list  =======*/}
            </div>
          </div>
        </div>
      </div>

      {/*=============================================
    =            login page content         =
    =============================================*/}
      <div className="login-area mb-130 mb-md-70 mb-sm-70 mb-xs-70 mb-xxs-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 mb-md-50 mb-sm-50">
              {canCheckCode && <p>Loading...</p>}

              {!canCheckCode && (
                <div
                  className="lezada-form login-form"
                  style={{ backgroundColor: "white" }}
                >
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-12">
                        {/*=======  login title  =======*/}
                        <div className="section-title section-title--login text-center mb-50">
                          <h2 className="mb-20">Verify your email</h2>
                          <p>Please verify your email</p>
                        </div>
                        {/*=======  End of login title  =======*/}
                      </div>
                      <div className="col-lg-12 mb-60">
                        <input
                          type="text"
                          placeholder="Email address"
                          required
                        />
                      </div>
                      <div className="col-lg-12 mb-60">
                        <input
                          type="text"
                          placeholder="verification code"
                          required
                        />
                      </div>
                      <div className="col-lg-12 text-center mb-30">
                        <button
                          type="button"
                          className="lezada-button lezada-button--medium"
                        >
                          verify
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of login content  ======*/}
    </>
  );
};

export default VerifyUser;
