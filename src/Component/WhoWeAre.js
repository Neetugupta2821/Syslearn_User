import React, { useRef, useEffect } from 'react';
import checkmark from '../Image/check-mark.png'
import shape from '../Image/shape-02.png'
import award1 from '../Image/award1.gif'
import aboutSub from '../Image/aboutSub.webp'
import about2 from '../Image/about2.jpg'
import SchoolIcon from '@mui/icons-material/School';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import mission2 from '../Image/mission2.png'
import shape2 from '../Image/shape-24.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import hero1 from '../Image/hero1.jpg';
import bannerHome2 from '../Image/bannerHome2.jpg';
import bannerHome3 from '../Image/bannerHome3.jpg';
import dot from '../Image/dot-shape (2).png';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
export default function WhoWeAre() {
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
            <section
                className="whoWeSlider"

            >
                <div className="container-fluid ">
                    <div className="row">

                        <div className="col-lg-12 prUnset plUnset">
                            <div
                                ref={carousel}
                                className="carousel w-full h-[600px] sm:w-[600px] sm:h-auto mx-auto relative" // Add this class for Flickity styling
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

                        </div>


                    </div>

                </div>
                <div className="contentBannerHome wow slideInLeft" data-wow-duration="1s" data-wow-delay="1ms">
                    <h1>{t('Who Are We')}</h1>
                    <h3>
                        {t('Created in 2019, our organization supports the development strategy of its clients in the field of IT engineering services.')}
                    </h3>


                </div>
            </section>
            <section className="sectionWhoarewe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 wow slideInLeft" data-wow-delay="1s">
                            <div className="leftImg">
                                <div className="abimg-01">
                                    <img src={about2} />
                                    <div className="abimg-02">
                                        <img src={aboutSub} />
                                    </div>
                                    <div className="award-status bounce-slide">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src={award1} />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">29+</h6>
                                                <span className="subtitle">{t('Wonderful Awards')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ab_dotsBanner">
                                    <img src={shape} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 wow slideInRight" data-wow-delay="1s">
                            <div className="whoAreWeRightcont">
                                <label className="pre-title">{t('Who are we?')}</label>
                                <h2 className="title">
                                    {t('Learn')} &amp; {t('Grow Your Skills From')}{" "}
                                    <span className="color-secondary">Syslearn</span>
                                </h2>
                                <p>
                                    Created in 2019, our organization supports the development strategy
                                    of its clients in the field of IT engineering services. Syslearn's
                                    mission is to provide personalized IT services to help its clients
                                    improve their capabilities and face the challenges of digital
                                    transformation.
                                </p>
                                <p>
                                    Our team with an innovative vision, impeccable adaptability and
                                    proven knowledge in various sectors of activity allows us to
                                    intervene in the following areas: (Development of mobile
                                    applications, Web development, Artificial intelligence, Data
                                    science, Tailor-made solutions which adapt precisely to your IT
                                    environment).
                                </p>
                                <ul className="ab_list">
                                    <li>
                                        <img src={checkmark} />{t('Expert Trainers')}
                                    </li>
                                    <li>
                                        <img src={checkmark} />  {t('Expert Trainers')}
                                    </li>
                                    <li>
                                        <img src={checkmark} />  {t('Lifetime Access')}
                                    </li>
                                </ul>
                                <a href="#!" className="konwMoreBtn">
                                     {t('Know More')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-padding-02 mt-n6">
                <div className="container">
                    {/* About Items Wrapper Start */}
                    <div className="about-items-wrapper">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 mb20  wow fadeIn" data-wow-delay="10ms">
                                {/* About Item Start */}
                                <div className="about-item">
                                    <div className="item-icon-title">
                                        <div className="item-icon">
                                            <i class="fa fa-university" aria-hidden="true"></i>
                                            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                                            {/* <SchoolIcon className="svg" aria-hidden="true" /> */}
                                            {/* <i className="fa fa-university" aria-hidden="true" /> */}
                                        </div>
                                        <div className="item-title">
                                            <h3 className="title">{t('Top Instructors')} </h3>
                                        </div>
                                    </div>
                                    <p>
                                    {t('Lorem Ipsum has been the industry standard dummy text since it took and scrambled to make type specimen book has survived.')}
                                    </p>
                                    <p>
                                    {t('Lorem Ipsum has been the industry standard dummy text since it took and scrambled to make type specimen book has survived.')}
                                    </p>
                                </div>
                                {/* About Item End */}
                            </div>
                            <div className="col-lg-4 col-sm-6 mb20  wow fadeIn" data-wow-delay="0.5s">
                                {/* About Item Start */}
                                <div className="about-item">
                                    <div className="item-icon-title">
                                        <div className="item-icon">
                                            <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                        </div>
                                        <div className="item-title">
                                            <h3 className="title">{t('Portable Program')}</h3>
                                        </div>
                                    </div>
                                    <p>
                                    {t('Lorem Ipsum has been the industry standard dummy text since it took and scrambled to make type specimen book has survived.')}
                                    </p>
                                    <p>
                                    {t('Lorem Ipsum has been the industry standard dummy text since it took and scrambled to make type specimen book has survived.')}
                                    </p>
                                </div>
                                {/* About Item End */}
                            </div>
                            <div className="col-lg-4 col-sm-6 mb20 wow fadeIn" data-wow-delay="1.2s">
                                {/* About Item Start */}
                                <div className="about-item">
                                    <div className="item-icon-title">
                                        <div className="item-icon">
                                            <i class="fa fa-asterisk" aria-hidden="true"></i>
                                        </div>
                                        <div className="item-title">
                                            <h3 className="title">{t('Improve Quickly')}</h3>
                                        </div>
                                    </div>
                                    <p>
                                    {t('Lorem Ipsum has been the industry standard dummy text since it took and scrambled to make type specimen book has survived.')}
                                    </p>
                                    <p>
                                    {t('Lorem Ipsum has been the industry standard dummy text since it took and scrambled to make type specimen book has survived.')}
                                    </p>
                                </div>
                                {/* About Item End */}
                            </div>
                        </div>
                    </div>
                    {/* About Items Wrapper End */}
                </div>
            </div>
            <section className="ourMission">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow slideInLeft">
                            <div className="contentOurMission">
                                <h1> {t('Our Mission')} &amp; {t('Vision')}</h1>
                                <p className="mb-3">
                                    {t('Promotion an ourselves up otherwise my. High what each snug rich far yet easy. In companions inhabiting prnceles at insensible do. Heard their sex Prosperous so occasional assista discovered especi.')}
                                </p>
                                <div className="educationFlex">
                                    <div className="imgEdu">
                                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                                    </div>
                                    <div className="eduContent">
                                        <h5>{t('Education')}</h5>
                                        <p>
                                            {t('The Python interpreter and the extensive standard library are freely available in source or binary form for all.')}
                                        </p>
                                    </div>
                                </div>
                                <div className="educationFlex">
                                    <div className="imgEdu">
                                        <i class="fa fa-lastfm" aria-hidden="true"></i>
                                    </div>
                                    <div className="eduContent">
                                        <h5>{t('Elearning Online')}</h5>
                                        <p>
                                             {t('The Python interpreter and the extensive standard library are freely available in source or binary form for all.')}
                                        </p>
                                    </div>
                                </div>
                                <div className="educationFlex">
                                    <div className="imgEdu">
                                        <i class="fa fa-trophy" aria-hidden="true"></i>
                                    </div>
                                    <div className="eduContent">
                                        <h5>{t('Best Industry Leaders')}</h5>
                                        <p>
                                             {t('The Python interpreter and the extensive standard library are freely available in source or binary form for all.')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow slideInRight">
                            <div className="ImgOurMission">
                                <img src={mission2} alt="" />
                            </div>
                            <div className="lineBanner">
                                <img src={shape2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
