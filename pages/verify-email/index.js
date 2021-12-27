import Link from "next/link";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { verifyRegisteredUser } from "../../lib/api";
import { checkUserAuthStatus } from "../../lib/helpers";
// shop-customer-login.html

const VerifyUser = () => {
  // console.log("*********Router", router);
  const [state, setState] = useState({
    isVerifyingUser: false,
    isFinishedVerifyingUser: false,
    // success
    message: "",
    error: null,
  });
  const [inputValues, setInputValues] = useState({
    email: "",
    verificationCode: "",
  });

  useEffect(() => {
    console.log("**********Verify email mounted");
  }, []);

  const onInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const onVerifyRegisteredUser = async () => {
    console.log("**********onVerifyRegisteredUser running");
    setState({
      ...state,
      isVerifyingUser: true,
      isFinishedVerifyingUser: false,
      message: "",
      error: null,
    });
    const res = await verifyRegisteredUser({
      email: inputValues.email,
      verificationCode: inputValues.verificationCode,
    });
    // error
    if (res.status >= 400) {
      setState({
        ...state,
        isVerifyingUser: false,
        isFinishedVerifyingUser: true,
        message: res?.data?.message,
        error: {
          ...res.data,
        },
      });
      return;
    }
    // success
    setState({
      ...state,
      isVerifyingUser: false,
      isFinishedVerifyingUser: true,
      message: res?.data?.message,
      error: null,
    });
  };
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
              {state.isVerifyingUser && <h4>Verifying...</h4>}
              {state.message && <h3>{state.message}</h3>}
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
                        name="email"
                        value={inputValues.email}
                        onChange={onInputChange}
                        required
                      />
                      {state?.error?.email && (
                        <p style={{ color: "darkred", fontSize: "0.8em" }}>
                          {state?.error?.email}
                        </p>
                      )}
                    </div>
                    <div className="col-lg-12 mb-60">
                      <input
                        type="text"
                        placeholder="verification code"
                        name="verificationCode"
                        value={inputValues.verificationCode}
                        onChange={onInputChange}
                        required
                      />
                      {state?.error?.verificationCode && (
                        <p style={{ color: "darkred", fontSize: "0.8em" }}>
                          {state?.error?.verificationCode}
                        </p>
                      )}
                    </div>
                    <div className="col-lg-12 text-center mb-30">
                      <button
                        type="button"
                        className="lezada-button lezada-button--medium"
                        onClick={onVerifyRegisteredUser}
                      >
                        verify
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of login content  ======*/}
    </>
  );
};

VerifyUser.propTypes = {
  message: PropTypes.string,
};

export const getServerSideProps = async (ctx) => {
  return await checkUserAuthStatus(ctx);
};

export default VerifyUser;
