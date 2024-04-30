import React from 'react'
import ser1 from '../Image/serv1.webp'
import ser2 from '../Image/serv2.webp'
import ser3 from '../Image/serv3.webp'
import ser4 from '../Image/serv4.jpg'
import ser5 from '../Image/serv5.jpg'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
 
import { Link } from 'react-router-dom'
export default function Service() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <section
                className="blogBanner4"

            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ">
                            <h1>{t('Services')}</h1>
                            <p>
                                 {t('We embody a horizontal, transparent and equitable vision of the ESN, to allow those who make it rich to reap the benefits fruits.')}{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="ourServicesSec pbUnset">
                <div className="container">
                    <div className="row text-center">
                        <h3 className="ourSerNew ">{t('Our Services')}</h3>
                    </div>
                    <div className="row">
                      
                        <div className="col-lg-4 col-md-6 mb20">
                            <div className='serviceNew'>
                                <div className='serviceNewImg'>
                                    <img src={ser1} />
                                </div>
                                <div className='serviceContentNew'>
                                    <h4>{t('Ocean Freight Shipping')}</h4>
                                    <p>
                                         {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard')}
                                    </p>
                                    <Link to="/">{t('Read more')}</Link>
                                </div>
                                <div className='plusICon'> <i className='fa fa-plus'></i> </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb20">
                            <div className='serviceNew'>
                                <div className='serviceNewImg'>
                                    <img src={ser2} />
                                </div>
                                <div className='serviceContentNew'>
                                    <h4>{t('Ocean Freight Shipping')}</h4>
                                    <p>
                                       {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard')}
                                    </p>
                                    <Link to="/">{t('Read more')}</Link>
                                </div>
                                <div className='plusICon'> <i className='fa fa-plus'></i> </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb20">
                            <div className='serviceNew'>
                                <div className='serviceNewImg'>
                                    <img src={ser3} />
                                </div>
                                <div className='serviceContentNew'>
                                    <h4>{t('Ocean Freight Shipping')}</h4>
                                    <p>
                                       {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard')}
                                    </p>
                                    <Link to="/">{t('Read more')}</Link>
                                </div>
                                <div className='plusICon'> <i className='fa fa-plus'></i> </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb20">
                            <div className='serviceNew'>
                                <div className='serviceNewImg'>
                                    <img src={ser2} />
                                </div>
                                <div className='serviceContentNew'>
                                    <h4>{t('Ocean Freight Shipping')}</h4>
                                    <p>
                                       {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard')}
                                    </p>
                                    <Link to="/">{t('Read more')}</Link>
                                </div>
                                <div className='plusICon'> <i className='fa fa-plus'></i> </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb20">
                            <div className='serviceNew'>
                                <div className='serviceNewImg'>
                                    <img src={ser4} />
                                </div>
                                <div className='serviceContentNew'>
                                    <h4>{t('Ocean Freight Shipping')}</h4>
                                    <p>
                                       {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard')}
                                    </p>
                                    <Link to="/">{t('Read more')}</Link>
                                </div>
                                <div className='plusICon'> <i className='fa fa-plus'></i> </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb20">
                            <div className='serviceNew'>
                                <div className='serviceNewImg'>
                                    <img src={ser5} />
                                </div>
                                <div className='serviceContentNew'>
                                    <h4>Ocean Freight Shipping</h4>
                                    <p>
                                       {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard')}
                                    </p>
                                    <Link to="/">{t('Read more')}</Link>
                                </div>
                                <div className='plusICon'> <i className='fa fa-plus'></i> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
