import React, { useRef, useEffect } from 'react';
import thumb01 from '../Image/course_thumb01.webp'
import thumb02 from '../Image/course_thumb02.webp'
import thumb03 from '../Image/course_thumb03.webp'
import aiCrash from '../Image/aiCrash.png'
import finance from '../Image/finance.png'

import thumb05 from '../Image/course_thumb05.webp'
import thumb06 from '../Image/course_thumb06.webp'
import thumb07 from '../Image/course_thumb07.webp'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Services() {
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
                prevNextButtons: false,
                 
            });
        }
    }
    return (
        <>
            <section className="kingsterSectionPlain">
                <div className="container-fluid">
                    <div className="row">
                        <div className="digitaTechno">
                            <h3>{t('Our Services')}</h3>
                        </div>
                        <p className="text-center">
                             {t('Syslearn is a dynamic player in')} <strong> {t('consulting')}</strong> {t('and')}{" "}
                            <strong>{t('IT engineering services ')}</strong> .{t('Our mission')}<br />  {t('is to support our clients in implementing effective solutions.')}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="carousel-3 our_services" ref={flickityRef}>

                                <div className="carousel-cell-3 mx-3">
                                    <div className="slideWork">
                                        <div className="bestDoct">
                                            <img src={thumb01} alt="" />
                                        </div>
                                        <h2>{t('Mobile application development')}</h2>
                                        <p>{t('In a world focused on new technologies, Syslearn allows your company to create a link with your audience through an application...')}</p>
                                        <div className="buttonParent">
                                            <a href="#">{t('See More')}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell-3  mx-3">
                                    <div className="slideWork">
                                        <div className="bestDoct">
                                            <img src={finance} alt="" />
                                        </div>
                                        <h2>{t('Training')}</h2>
                                        <p>{t('SYSLEARN offers you very high-level IT training and coaching on all aspects related to the Web, software development and more broadly...')}</p>
                                        <div className="buttonParent">
                                            <a href="#">{t('See More')}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell-3  mx-3">
                                    <div className="slideWork">
                                        <div className="bestDoct">
                                            <img src={thumb03} alt="" />
                                        </div>
                                        <h2>{t('Web development')}</h2>
                                        <p>{t('We develop websites according to the highest quality standards so that your customers user experience (UX) is the best possible....')}</p>
                                        <div className="buttonParent">
                                            <a href="#">{t('See More')}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell-3  mx-3">
                                    <div className="slideWork">
                                        <div className="bestDoct">
                                            <img src={aiCrash} alt="" />
                                        </div>
                                        <h2>{t('Artificial intelligence')}</h2>
                                        <p>{t('AI technology improves business performance and productivity by automating processes or tasks that previously required human resources....')}</p>
                                        <div className="buttonParent">
                                            <a href="#">{t('See More')}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell-3  mx-3">
                                    <div className="slideWork">
                                        <div className="bestDoct">
                                            <img src={thumb05} alt="" />
                                        </div>
                                        <h2>{t('Data science')}</h2>
                                        <p>{t('Our data science engineers use all their know-how to deal with all your issues related to large masses of data: collection, storage,...')}</p>
                                        <div className="buttonParent">
                                            <a href="#">{t('See More')}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell-3  mx-3">
                                    <div className="slideWork">
                                        <div className="bestDoct">
                                            <img src={thumb06} alt="" />
                                        </div>
                                        <h2>{t('Tailor-made solutions')}</h2>
                                        <p>{t('We develop innovative turnkey solutions with modules that can be interfaced with all types of information systems to best meet the ...')}</p>
                                        <div className="buttonParent">
                                            <a href="#">{t('See More')}</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-cell-3  mx-3">
                                    <div className="slideWork">
                                        <div className="bestDoct">
                                            <img src={thumb07} alt="" />
                                        </div>
                                        <h2>{t('QA ( Tester Cources)')}</h2>
                                        <p>{t('Our data science engineers use all their know-how to deal with all your issues related to large masses of data: collection, storage,...')}</p>
                                        <div className="buttonParent">
                                            <a href="#">{t('See More')}</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
