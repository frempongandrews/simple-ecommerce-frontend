import { useState, useEffect } from "react";
import Link from "next/link";
import { registerUser } from "../lib/api";
// shop-customer-login.html

const Auth = () => {
  const [state, setState] = useState({
    loginEmail: "",
    loginPassword: "",
    registerEmail: "",
    registerPassword: "",
    registerConfirmPassword: "",
    // success message
    message: "",
    // object with error messages
    error: null,
    submittedForm: "",
  });

  // while form is submitting
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("********Auth state", state);
  });

  const onInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onRegisterUser = async () => {
    setIsLoading(true);
    const res = await registerUser({
      email: state.registerEmail,
      password: state.registerPassword,
      confirmPassword: state.registerConfirmPassword,
    });

    if (res.status >= 400) {
      setIsLoading(false);
      setState({
        ...state,
        error: {
          ...res.data,
        },
        message: "",
        submittedForm: "register",
      });
      return;
    }

    setIsLoading(false);
    setState({
      ...state,
      error: null,
      message: res?.data?.message,
      submittedForm: "register",
    });
  };

  return (
    <>
      <div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="breadcrumb-title">Auth Page</h1>
              {/*=======  breadcrumb list  =======*/}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-list__item">
                  <Link href={`/`}>
                    <a>HOME</a>
                  </Link>
                </li>
                <li className="breadcrumb-list__item breadcrumb-list__item--active">
                  customer login
                </li>
              </ul>
              {/*=======  End of breadcrumb list  =======*/}
            </div>
          </div>
        </div>
      </div>

      {JSON.stringify(state, null, 4)}
      {isLoading && <h3>Loading...</h3>}

      {/*=============================================
    =            login page content         =
    =============================================*/}
      <div className="login-area mb-130 mb-md-70 mb-sm-70 mb-xs-70 mb-xxs-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-md-50 mb-sm-50">
              <div className="lezada-form login-form">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      {/*=======  login title  =======*/}
                      <div className="section-title section-title--login text-center mb-50">
                        <h2 className="mb-20">Login</h2>
                        <p>Great to have you back!</p>
                      </div>
                      {/*=======  End of login title  =======*/}
                    </div>
                    <div className="col-lg-12 mb-60">
                      <input
                        onChange={onInputChange}
                        type="text"
                        placeholder="Email address"
                        name="loginEmail"
                        required
                      />
                    </div>
                    <div className="col-lg-12 mb-60">
                      <input
                        onChange={onInputChange}
                        type="password"
                        placeholder="Password"
                        required
                        name="loginPassword"
                      />
                    </div>
                    <div className="col-lg-12 text-center mb-30">
                      <button
                        type="button"
                        className="lezada-button lezada-button--medium"
                      >
                        login
                      </button>
                    </div>
                    {/*<div className="col-lg-12">*/}
                    {/*  <input type="checkbox" />{" "}*/}
                    {/*  <span className="remember-text">Remember me</span>*/}
                    {/*  <a href="#" className="reset-pass-link">*/}
                    {/*    Lost your password?*/}
                    {/*  </a>*/}
                    {/*</div>*/}
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6 mb-md-50 mb-sm-50">
              <div
                className="lezada-form login-form"
                style={{ backgroundColor: "white" }}
              >
                <form action="#">
                  <div className="row">
                    <div className="col-lg-12">
                      {/*=======  Register title  =======*/}
                      <div className="section-title section-title--login text-center mb-50">
                        <h2 className="mb-20">Register</h2>
                        <p>If you don’t have an account, register now!</p>
                      </div>
                      {/*=======  End of Register title  =======*/}
                    </div>
                    {state.submittedForm === "register" &&
                      state?.error?.message && (
                        <p style={{ fontSize: "0.8em", color: "red" }}>
                          {state?.error?.message}
                        </p>
                      )}
                    {state.submittedForm === "register" && state?.message && (
                      <p
                        style={{
                          fontSize: "0.8em",
                          color: "darkgreen",
                          textAlign: "center",
                        }}
                      >
                        {state?.message}
                      </p>
                    )}
                    <div className="col-lg-12 mb-60">
                      <input
                        onChange={onInputChange}
                        type="text"
                        placeholder="Email address"
                        required
                        name="registerEmail"
                      />
                      {state.submittedForm === "register" &&
                        state?.error?.email && (
                          <p style={{ fontSize: "0.8em", color: "red" }}>
                            {state?.error?.email}
                          </p>
                        )}
                    </div>
                    <div
                      className="col-lg-12 mb-60"
                      style={{ display: "flex" }}
                    >
                      <div style={{ width: 120, flex: 1, marginRight: 30 }}>
                        <input
                          onChange={onInputChange}
                          type="password"
                          placeholder="Password"
                          name="registerPassword"
                          required
                        />
                        {state.submittedForm === "register" &&
                          state?.error?.password && (
                            <p style={{ fontSize: "0.8em", color: "red" }}>
                              {state?.error?.password}
                            </p>
                          )}
                      </div>

                      <div style={{ width: 120, flex: 1 }}>
                        <input
                          onChange={onInputChange}
                          type="password"
                          placeholder="Confirm password"
                          name="registerConfirmPassword"
                          required
                        />
                        {state.submittedForm === "register" &&
                          state?.error?.confirmPassword && (
                            <p style={{ fontSize: "0.8em", color: "red" }}>
                              {state?.error?.confirmPassword}
                            </p>
                          )}
                      </div>
                    </div>
                    <div className="col-lg-12 text-center mb-30">
                      <button
                        type="button"
                        className="lezada-button lezada-button--medium"
                        onClick={onRegisterUser}
                        disabled={isLoading}
                      >
                        Register
                      </button>
                      <p style={{ marginTop: 20 }}>
                        Already registered but not verified? Please verify your
                        email{" "}
                        <span>
                          <Link href={`/verify-email`}>
                            <a style={{ fontWeight: "bold" }}>here</a>
                          </Link>
                        </span>
                      </p>
                    </div>
                    {/*<div className="col-lg-12">*/}
                    {/*  <input type="checkbox" />{" "}*/}
                    {/*  <span className="remember-text">Remember me</span>*/}
                    {/*  <a href="#" className="reset-pass-link">*/}
                    {/*    Lost your password?*/}
                    {/*  </a>*/}
                    {/*</div>*/}
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

export default Auth;
