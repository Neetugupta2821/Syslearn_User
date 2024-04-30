import React, { useRef, useEffect } from 'react';
import personalized from '../Image/personalized-advice.png'
import report from '../Image/report.png'
import satisfaction from '../Image/satisfaction.png'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

 


export default function Kingster() {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        initFlickity();
    }, []);

    const flickityRef = useRef(null);

    async function initFlickity() {
        if (typeof window !== 'undefined' && flickityRef.current) {
            const Flickity = (await import('flickity')).default;
            new Flickity(flickityRef.current, {
                lazyLoad: true,
                wrapAround: true,
                autoPlay: true,
                pageDots: true,
                freeScroll: true,
                prevNextButtons: false
            });
        }
    }

    return (
        <><section className="kingsterSectionPlain">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="carousel-2" data-flickity='{"groupCells": true }' ref={flickityRef}>

                            <div className="carousel-cell-2">
                                <div className="slideWork">
                                    <div className="bestDoct">
                                        <img src={personalized}  alt="" />
                                    </div>
                                    <h2>{t('Personalized advice')}</h2>
                                    <p>
                                        {" "}
                                         {t('Syslearn offers personalized support based on your problem, your sector and your target to ensure the success of your projects with solutions that meet your objectives.')}
                                    </p>
                                    <div className="buttonParent">
                                        <a href="#">{t('See More')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell-2">
                                <div className="slideWork">
                                    <div className="bestDoct">
                                        <img src={report}  alt="" />
                                    </div>
                                    <h2>{t('Quality report')}</h2>
                                    <p>
                                    {t('Syslearn offers personalized support based on your problem, your sector and your target to ensure the success of your projects with solutions that meet your objectives.')}
                                    </p>
                                    <div className="buttonParent">
                                        <a href="#">{t('See More')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell-2">
                                <div className="slideWork">
                                    <div className="bestDoct">
                                        <img src={satisfaction} alt="" />
                                    </div>
                                    <h2>{t('The satisfaction guarantee')}</h2>
                                    <p>
                                    {t('Syslearn offers personalized support based on your problem, your sector and your target to ensure the success of your projects with solutions that meet your objectives.')}{" "}
                                    </p>
                                    <div className="buttonParent">
                                        <a href="#">{t('See More')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell-2">
                                <div className="slideWork">
                                    <div className="bestDoct">
                                        <img src={personalized}  alt="" />
                                    </div>
                                    <h2>{t('Personalized advice')}</h2>
                                    <p>
                                    {t('Syslearn offers personalized support based on your problem, your sector and your target to ensure the success of your projects with solutions that meet your objectives.')}
                                    </p>
                                    <div className="buttonParent">
                                        <a href="#">{t('See More')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell-2">
                                <div className="slideWork">
                                    <div className="bestDoct">
                                        <img src={report}  alt="" />
                                    </div>
                                    <h2>{t('Quality report')}</h2>
                                    <p>
                                    {t('Syslearn offers personalized support based on your problem, your sector and your target to ensure the success of your projects with solutions that meet your objectives.')}
                                    </p>
                                    <div className="buttonParent">
                                        <a href="#">{t('See More')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-cell-2">
                                <div className="slideWork">
                                    <div className="bestDoct">
                                        <img src={satisfaction}  alt="" />
                                    </div>
                                    <h2>{t('The satisfaction guarantee')}</h2>
                                    <p>
                                        {" "}
                                        {t('Syslearn offers personalized support based on your problem, your sector and your target to ensure the success of your projects with solutions that meet your objectives.')}{" "}
                                    </p>
                                    <div className="buttonParent">
                                        <a href="#">{t('See More')}</a>
                                    </div>
                                </div>
                            </div>
                             

                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* <div className="carousel" data-flickity='{ "groupCells": true }' ref={flickityRef}>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
                <div className="carousel-cell-2"></div>
            </div> */}
        </>
    );
}
