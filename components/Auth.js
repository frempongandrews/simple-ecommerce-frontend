import Link from "next/link";
// shop-customer-login.html

const Auth = () => {
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
                      <input type="text" placeholder="Email address" required />
                    </div>
                    <div className="col-lg-12 mb-60">
                      <input type="password" placeholder="Password" required />
                    </div>
                    <div className="col-lg-12 text-center mb-30">
                      <button className="lezada-button lezada-button--medium">
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
                    <div className="col-lg-12 mb-60">
                      <input type="text" placeholder="Email address" required />
                    </div>
                    <div className="col-lg-12 mb-60">
                      <input type="password" placeholder="Password" required />
                    </div>
                    <div className="col-lg-12 text-center mb-30">
                      <button className="lezada-button lezada-button--medium">
                        Register
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
          </div>
        </div>
      </div>
      {/*=====  End of login content  ======*/}
    </>
  );
};

export default Auth;
