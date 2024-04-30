import React from 'react'

import abouticon1 from '../Image/abouticon1.png'
import abouticon10 from '../Image/abouticon10.png'
import abouticon11 from '../Image/abouticon11.png'
import abouticon12 from '../Image/abouticon12.png'
import abouticon13 from '../Image/abouticon13.png'
import abouticon14 from '../Image/abouticon14.png'
import aboutFive from '../Image/about-five-image.jpg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import easelpainting from '../Image/easel-painting.png'
import patch from '../Image/patch.png'
import brightness from '../Image/brightness-and-contrast.png'
import technology from '../Image/technology.png'
import dotshape from '../Image/dot-shape (2).png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
export default function DigitalTechnology() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <section
                className="blogBanner2"

            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ">
                            <h1>{t('Digital Technology')}</h1>
                            <p>
                            {t('We embody a horizontal, transparent and equitable vision of the ESN, to allow those who make it rich to reap the benefits fruit.')}{" "}
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="getKnowSec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div>
                                <div className="getKnowPos">
                                    <div className="getKnowImg">
                                        <img src={aboutFive} alt="" />
                                    </div>
                                    <div className="ourTarget">
                                        <div className="ourTargetPos">
                                            <h5>
                                                {t('Our Target to Easy Solution of Business Progress')} &amp;  {t('Customer Satisfaction')}
                                                
                                            </h5>
                                            <div className="ourTargetComma">
                                                <FormatQuoteIcon style={{ "font-size": "60px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contentGetTar">
                                <span className="getSpan caption">{t('Get to Know')}</span>
                                <h2 className="title">
                                    {t('About')}{" "}
                                    <span className="color-secondary">{('Digital Technology')}</span>
                                </h2>
                                <p>
                                     {t('Syslearn offers personalized support based on your problem, your sector and your target for. We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness')}
                                </p>
                                <div className="sliderDigital">
                                    <h4>{t('Our Technology')}</h4>
                                    <div className="row">
                                        <logo-slider>
                                            <div>
                                                <img src={abouticon1} alt="angular" />
                                                <img src={abouticon10} alt="angular" />
                                                <img src={abouticon11} alt="angular" />
                                                <img src={abouticon12} alt="angular" />
                                                <img src={abouticon13} alt="angular" />
                                                <img src={abouticon14} alt="angular" />
                                                <img src={abouticon10} alt="angular" />
                                                <img src={abouticon11} alt="angular" />
                                                <img src={abouticon10} alt="angular" />
                                                <img src={abouticon11} alt="angular" />
                                                <img src={abouticon1} alt="angular" />
                                            </div>
                                            <div>
                                                <img src={abouticon1} alt="angular" />
                                                <img src={abouticon10} alt="angular" />
                                                <img src={abouticon11} alt="angular" />
                                                <img src={abouticon12} alt="angular" />
                                                <img src={abouticon13} alt="angular" />
                                                <img src={abouticon14} alt="angular" />
                                                <img src={abouticon10} alt="angular" />
                                                <img src={abouticon11} alt="angular" />
                                                <img src={abouticon10} alt="angular" />
                                                <img src={abouticon11} alt="angular" />
                                                <img src={abouticon1} alt="angular" />
                                            </div>
                                        </logo-slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="site-section  ">
                <div className="container">
                    <div className="row mb-5 justify-content-center text-center">
                        <div className="col-lg-4">
                            <span className="caption getSpan">{t('Our technologies')}</span>
                            <h2 className="title-with-line text-center mb-5">{t('What We Do')}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb50">
                            <div className="feature-1">
                                <div className="icon-wrapper ">
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-bar-chart-line"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
                                        ></path>
                                        <path
                                            fillRule="evenodd"
                                            d="M0 14.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"
                                        />
                                    </svg>
                                </div>
                                <div className="feature-1-content">
                                    <h2>{t('Growth Business')}</h2>
                                    <p>
                                         {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb50">
                            <div className="feature-1">
                                <div className="icon-wrapper ">
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-life-preserver"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                                        />
                                        <path d="M11.642 6.343L15 5v6l-3.358-1.343A3.99 3.99 0 0 0 12 8a3.99 3.99 0 0 0-.358-1.657zM9.657 4.358L11 1H5l1.343 3.358A3.985 3.985 0 0 1 8 4c.59 0 1.152.128 1.657.358zM4.358 6.343L1 5v6l3.358-1.343A3.985 3.985 0 0 1 4 8c0-.59.128-1.152.358-1.657zm1.985 5.299L5 15h6l-1.343-3.358A3.984 3.984 0 0 1 8 12a3.99 3.99 0 0 1-1.657-.358z"></path>
                                    </svg>
                                </div>
                                <div className="feature-1-content">
                                    <h2>{t('Lifetime Support')}</h2>
                                    <p>
                                    {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb50">
                            <div className="feature-1">
                                <div className="icon-wrapper ">
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-circle-square"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z" />
                                        <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z"></path>
                                    </svg>
                                </div>
                                <div className="feature-1-content">
                                    <h2>{t('Advanced Accounting')}</h2>
                                    <p>
                                    {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb50">
                            <div className="feature-1">
                                <div className="icon-wrapper ">
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-wallet2"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2.5 4l10-3A1.5 1.5 0 0 1 14 2.5v2h-1v-2a.5.5 0 0 0-.5-.5L5.833 4H2.5z" />
                                        <path
                                            fillRule="evenodd"
                                            d="M1 5.5A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-8zM2.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="feature-1-content">
                                    <h2>{t('Investment Bonds')}</h2>
                                    <p>
                                    {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb50">
                            <div className="feature-1">
                                <div className="icon-wrapper ">
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-briefcase"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                                        ></path>
                                        <path
                                            fillRule="evenodd"
                                            d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="feature-1-content">
                                    <h2>{t('Investment Management')}</h2>
                                    <p>
                                    {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb50">
                            <div className="feature-1">
                                <div className="icon-wrapper ">
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        className="bi bi-calculator-fill"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                                        ></path>
                                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"></path>
                                    </svg>
                                </div>
                                <div className="feature-1-content">
                                    <h2>{t('Money Calculations')}</h2>
                                    <p>
                                    {t("Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="alt-services" className="alt-services">
                <div className="container " data-aos="fade-up">
                    <div className="row justify-content-around gy-4">
                        <div className="col-lg-5 d-flex flex-column justify-content-center">
                            <h3>{t('Digital Publish on Multi-Devices')} &amp;  {t('Platforms')}</h3>
                            <p>
                                 {('Esse voluptas cumque vel exercitationem. Reiciendis est hic accusemus. No ipsam et sed minima temporibus laudantium. Soluta voluptate sed  facere corporis dolores excepturi')}
                            </p>
                            <div
                                className="icon-box d-flex position-relative"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <img src={easelpainting} alt="" />
                                <div className="triveLeft">
                                    <h4>
                                        <a href="" className="stretched-link">
                                            Lorem Ipsum
                                        </a>
                                    </h4>
                                    <p>
                                         {t('Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident')}
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div
                                className="icon-box d-flex position-relative"
                                data-aos="fade-up"
                                data-aos-delay={200}
                            >
                                <img src={patch} alt="" />
                                <div className="triveLeft">
                                    <h4>
                                        <a href="" className="stretched-link">
                                            Nemo Enim
                                        </a>
                                    </h4>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div
                                className="icon-box d-flex position-relative"
                                data-aos="fade-up"
                                data-aos-delay={300}
                            >
                                <img src={brightness} alt="" />
                                <div className="triveLeft">
                                    <h4>
                                        <a href="" className="stretched-link">
                                            Dine Pad
                                        </a>
                                    </h4>
                                    <p>
                                        Explicabo est voluptatum asperiores consequatur magnam. Et
                                        veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                            <div
                                className="icon-box d-flex position-relative"
                                data-aos="fade-up"
                                data-aos-delay={400}
                            >
                                <img src={technology} alt="" />
                                <div className="triveLeft">
                                    <h4>
                                        <a href="" className="stretched-link">
                                            Tride clov
                                        </a>
                                    </h4>
                                    <p>
                                        Est voluptatem labore deleniti quis a delectus et. Saepe dolorem
                                        libero sit non aspernatur odit amet. Et eligendi
                                    </p>
                                </div>
                            </div>
                            {/* End Icon Box */}
                        </div>
                        <div
                            className="col-lg-6 img-bg"


                        >
                            <div className="img2">
                                <img src={dotshape} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
