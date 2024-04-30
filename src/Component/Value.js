import React from 'react'
import greentechnology from '../Image/green-technology.png'
import userengagement from '../Image/user-engagement.png'
import value from '../Image/value.png'
import experiment from '../Image/experiment-results.png'
import cloudservice from '../Image/cloud-service.png'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Value() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <section
                className="blogBanner5"

            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ">
                            <h1>{t('Values')}</h1>
                            <p>
                                {t('We embody a horizontal, transparent and equitable vision of the ESN, to allow those who make it rich to reap the benefits fruits.')}{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="valueSec">
                <div className="container">
                    <div className="row">
                        <h3> {t('Our Values, our excellence')}</h3>
                        <p className="mt-2">
                         {t('Innovation')},  {t('commitment')},  {t('honesty')},  {t('integrity')},{t('expertise are our values communities. They allow us to be a true partner of confidence for our customers.')}  
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="flexValues">
                                <div className="imgValue">
                                    <img src={greentechnology}  alt="" />
                                </div>
                                <div className="contentValue">
                                    <h5>{t('Innovation')}</h5>
                                    <p>
                                        {('We put innovation at the heart of our development strategy and intervene in areas linked to technological change. We constantly seek improvement in all our activities and encourage a culture of innovation to ensure the continuous development of new products and services that meet the needs of our customers.')}
                                    </p>
                                </div>
                            </div>
                            <div className="flexValues">
                                <div className="imgValue">
                                    <img src={userengagement} alt="" />
                                </div>
                                <div className="contentValue">
                                    <h5>{t('Engagement')}</h5>
                                    <p>
                                {('We hire motivated, committed and passionate people by their profession. Our desire to satisfy our customers is an essential aspect in the execution of our missions, with us the ability to respect our commitments whatever they be.')}
                                    </p>
                                </div>
                            </div>
                            <div className="flexValues">
                                <div className="imgValue">
                                    <img src={value}  alt="" />
                                </div>
                                <div className="contentValue">
                                    <h5>{t('Honesty')}</h5>
                                    <p>
                                        {('Transparency and accountability guide us in the exercise of our professional activities. We consider that the creating added value in a sustainable way requires behavior  honest and responsible towards society. We therefore do proof of seriousness in our commitments, whether in our work or in our relationships with customers.')}
                                    </p>
                                </div>
                            </div>
                            <div className="flexValues">
                                <div className="imgValue">
                                    <img src={experiment}  alt="" />
                                </div>
                                <div className="contentValue">
                                    <h5>{t('Integrity')}</h5>
                                    <p>
                                         {('We believe that the best guarantor of our reputation is the maintaining a high level of integrity and ethics in all our daily activities.')}
                                    </p>
                                </div>
                            </div>
                            <div className="flexValues">
                                <div className="imgValue">
                                    <img src={cloudservice}  alt="" />
                                </div>
                                <div className="contentValue">
                                    <h5>{t('Expertise')}</h5>
                                    <p>
                                            {('Syslearn supports companies of all sizes and sectors different activities. Thanks to its expertise and multidisciplinarity of its teams, it helps you activate the levers of business strategy')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
