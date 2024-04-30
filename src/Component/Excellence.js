import React, { useRef, useEffect } from 'react';
import innovation from '../Image/innovation.png'
import commitment from '../Image/commitment.png'
import honesty from '../Image/honesty.png'
import integrity from '../Image/integrity.png'
import expertise  from '../Image/expertise.png'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Excellence() {
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
        <>
            <section className="kingsterSectionPlain section_Our_Values">
                <div className="container-fluid">
                    <div className="row">
                        <div className="digitaTechno">
                            <h3>{t('Our Values, our excellence')}</h3>
                        </div>
                        <p className="text-center">
                        {t('Innovation')},{t('commitment')},{t('honesty')},{t('integrity, expertise are our common values. They allow us to be a')}<br />{t('true trusted partner for our customers.')} 
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="carousel-4  our_Values" data-flickity='{ "groupCells": true }' ref={flickityRef}>
                                
                                    <div className="carousel-cell-4">
                                        <div className="row slideWork">
                                            <div className="col-md-6">
                                                <div className="valuesCont">
                                                    <div>
                                                        <h2>{t('Innovation')}</h2>
                                                        <p>
                                                            {" "}
                                                            {t('We put innovation at the heart of our strategy,development and interventions in areas related to technological changes. We are constantly seeking to we improve in all our activities and encourage  a culture of innovation to ensure development continuous new products and services that meet the needs of our customers.')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="excellenceImg">
                                                    <img src={innovation}  alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-cell-4">
                                        <div className="row slideWork">
                                            <div className="col-md-6">
                                                <div className="valuesCont">
                                                    <div>
                                                        <h2>{t('Commitment')}</h2>
                                                        <p>
                                                             {t('We hire motivated, committed people who are passionate about their profession. Our desire to satisfy our customers is an essential aspect in the execution of our missions, with us the ability to respect our commitments whatever they may be...')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="excellenceImg">
                                                    <img src={commitment}  alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-cell-4">
                                        <div className="row slideWork">
                                            <div className="col-md-6">
                                                <div className="valuesCont">
                                                    <div>
                                                        <h2>{t('Honesty')}</h2>
                                                        <p>
                                                            {t('Transparency and accountability guide us in the exercise of our professional activities. We believe that creating  added value in a sustainable way requires honest and responsible behavior towards society.')}
                                                        </p>
                                                        <p>
                                                            {t('We therefore demonstrate seriousness in our commitments, whether in our work or in our relationships with customers.')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="excellenceImg">
                                                    <img src={honesty}  alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-cell-4">
                                        <div className="row slideWork">
                                            <div className="col-md-6">
                                                <div className="valuesCont">
                                                    <div>
                                                        <h2>{t('Integrity')}</h2>
                                                        <p>
                                                             {t('We believe that the best guarantee of our reputation is maintaining a high level of integrity and ethics in all our daily activities.')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="excellenceImg">
                                                    <img src={integrity }  alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-cell-4">
                                        <div className="row slideWork">
                                            <div className="col-md-6">
                                                <div className="valuesCont">
                                                    <div>
                                                        <h2>{t('Expertise')}</h2>
                                                        <p>
                                                             {t('Syslearn supports companies of different sizes and sectors of activity. Thanks to its expertise and the multidisciplinarity of its teams, it helps you activate the levers of business strategy')}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="excellenceImg">
                                                    <img src={expertise}  alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                     
                </div>
            </section>

        </>
    )
}
