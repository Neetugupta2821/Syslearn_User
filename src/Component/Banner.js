import React, { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import hero1 from '../Image/hero1.jpg';
import bannerHome2 from '../Image/bannerHome2.jpg';
import bannerHome3 from '../Image/bannerHome3.jpg';
import dot from '../Image/dot-shape (2).png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Banner() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    initFlickity();
  }, []);

  const carousel = useRef(null);

  async function initFlickity() {
    if (typeof window !== 'undefined' && carousel.current) {
      const Flickity = (await import('flickity')).default;
      new Flickity(carousel.current, {
        lazyLoad: true,
        wrapAround: true,
        autoPlay: true,
        pageDots: false,
      });
    }
  }

  return (
    <>
      <section className="bannerHome">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 prUnset plUnset">
              <div
                ref={carousel}
                className="carousel w-full h-[600px] sm:w-[600px] sm:h-auto mx-auto relative" 
               
              >
                <div className="carousel-cell">
                  <div className="bannerNew">
                    <img src={hero1} alt="" />
                  </div>
                </div>
                <div className="carousel-cell">
                  <div className="bannerNew">
                    <img src={bannerHome3} alt="" />
                  </div>
                </div>
                <div className="carousel-cell">
                  <div className="bannerNew">
                    <img src={bannerHome2} alt="" />
                  </div>
                </div>
                <div className="carousel-cell">
                  <div className="bannerNew">
                    <img src={bannerHome3} alt="" />
                  </div>
                </div>
              </div>
              <div className="dotsBanner">
                <img src={dot} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="contentBannerHome wow slideInLeft" data-wow-duration="1s" data-wow-delay="1ms">
        <h1>{t('Welcome to')} <span className="spanColor">{t('Syslearn')}</span></h1>
        <h3>{t('We believe in the power of technology!')}<br></br>
       {t('Our Motto : Quality & Trust')}</h3>
        <div className="bannerBtnHome">
          <button>{t('See More')}<ArrowForwardIcon/> </button>
        </div>
      </div>
      </section>

      {/* Content outside of the Flickity carousel */}
     
    </>
  );
}
