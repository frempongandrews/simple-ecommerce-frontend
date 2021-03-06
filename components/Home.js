import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import Layout from "./Layout";
import { centsToPounds, generateShorterProductTitle } from "../lib/helpers";
// index-accessories.html
const Home = ({ products }) => {
  const renderProducts = () => {
    return products.map((product, i) => {
      return (
        <div
          className={`col-lg-5 offset-lg-1 col-md-10 offset-md-2 mb-100`}
          key={product._id}
        >
          <div className="accessories-single-category wow zoomIn">
            <Link href={`/product/${product.slug}-${product.id}`}>
              <a className="banner-hover" />
            </Link>
            {/*<span className="number">01/</span>*/}
            <span className="number">0{i + 1}/</span>
            <Image
              src={product.publicImage}
              width={470}
              height={600}
              layout="responsive"
              objectFit="contain"
            />

            <div className="accessories-single-category__content">
              <p className="name">
                {generateShorterProductTitle(product.title)}
              </p>
              <p className="price">
                <span className="discounted-price">
                  £{centsToPounds(product.price)}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      {/*=============================================
	=            section title  container      =
	=============================================*/}
      <div className="section-title-container section-title-container--instagram mb-80 mt-100 mb-md-60 mb-sm-60 mt-md-80 mt-sm-80">
        <div className="container wide">
          <div className="row">
            <div className="col-xl-3 d-none d-xl-block">
              <div className="section-title__label section-title__label-style2 section-title__label--left section-title__label-style2--left">
                <p>
                  SS-2018 <span className="line">84</span>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10 offset-lg-1 offset-xl-0">
              {/*=======  section title  =======*/}
              <div className="section-title text-center">
                <h1>Best selling products</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur cing elit. Suspe
                  ndisse suscipit sagittis leo estibulum issim Lorem ipsum dolor
                  sit amet, consectetur cing elit.
                </p>
              </div>
              {/*=======  End of section title  =======*/}
            </div>
            <div className="col-xl-3 d-none d-xl-block text-right">
              <div className="section-title__label  section-title__label-style2 section-title__label--right section-title__label-style2--right">
                <p>
                  BASIC <br /> MINIMALISM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of section title container ======*/}
      {/*=============================================
	=            accessories home content         =
	=============================================*/}
      <div className="home-content--accessories mb-100 mb-md-80 mb-sm-80">
        <div className="container">
          <div className="row align-items-center">
            {renderProducts()}
            <div className="col-lg-12">
              {/*=======  shop button  =======*/}
              {/* <div className="shop-button text-center">
                <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                  {" "}
                  <i className="icon-left ion-plus" /> LOAD more
                </a>
              </div> */}
              {/*=======  End of shop button  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of accessories home content  ======*/}

      {/*=============================================
	=            instagram slider area         =
	=============================================*/}
      <div className="instagram-slider-area mb-100 mb-md-80 mb-sm-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 order-2 order-lg-1">
              {/*=============================================
					=            instagram image slider         =
					=============================================*/}
              <div className="instagram-image-slider-area">
                {/*=======  instagram image container  =======*/}
                <div className="instagram-image-slider-container">
                  <div className="instagram-feed-thumb">
                    <div
                      id="instagramFeedThree"
                      className="instagram-carousel"
                    ></div>
                  </div>
                </div>
                {/*=======  End of instagram image container  =======*/}
              </div>
              {/*=====  End of instagram image slider  ======*/}
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              {/*=======  instagram intro  =======*/}
              <div className="instagram-section-intro pl-50 pl-lg-50 pl-md-0 pl-sm-0 pl-xs-0 pl-xxs-0 mb-0 mb-lg-0 mb-md-50 mb-sm-50 mb-xs-50 mb-xxs-50">
                <p>
                  <a>@minimal_shop</a>
                </p>
                <h3>Follow us on Instagram</h3>
              </div>
              {/*=======  End of instagram intro  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of instagram slider area  ======*/}
    </>
  );
};

Home.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Home;
