import React from 'react'
import php from '../Image/php.png'
import javascript from '../Image/js.jpg'
import ctype from '../Image/c-sharp.png'
import pythonIcon from '../Image/python.webp'
import java1 from '../Image/java.png'
import angularIcon from '../Image/angular.png'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
 
export default function Recruitment() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <section
                className="blogBanner7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ">
                            <h1>{t('Recruitment')}</h1>
                            <p>
                                {t('We embody a horizontal, transparent and equitable vision of the ESN, to allow those who make it rich to reap the benefits fruits.')}{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recruitmentSec">
                <div className="container">
                    <div className="row">
                        <h3>{t('Recruitment')}</h3>
                           <p className="mt-2">
                           {t('We are a family where trust, communication and transparency are the key words! If you share these same Skills ​​and want to evolve in a dynamic environment, join us!')}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb20">
                            <div className="recruitFlex">
                                <div className="recruitmentIcon">
                                    <img src={php} alt="" />
                                </div>
                                <div className="recruitmentContent">
                                    <h5>{t('PHP/Symfony Engineer')}</h5>
                                    <p>
                                        {t('With a higher education BAC+5 in computer engineering, you have at least 2 years of significant experience in a similar position. Good technical knowledge of PHP, Symfony, Ansible, Github, Js/Jquery, Unix, Angular Js, Bootstrap, etc. technologies... Your interpersonal skills, your capacity for integration and adaptation as well as your communication are your assets .')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb20">
                            <div className="recruitFlex">
                                <div className="recruitmentIcon">
                                    <img src={javascript} alt="" />
                                </div>
                                <div className="recruitmentContent">
                                    <h5>{t('JAVA/JEE/Spring MVC Engineer')}</h5>
                                    <p>
                                    {t('With a higher education BAC+5 in computer engineering, you have at least 2 years of significant experience in a similar position. Good technical knowledge of PHP, Symfony, Ansible, Github, Js/Jquery, Unix, Angular Js, Bootstrap, etc. technologies... Your interpersonal skills, your capacity for integration and adaptation as well as your communication are your assets .')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-lg-6 mb20">
                            <div className="recruitFlex">
                                <div className="recruitmentIcon">
                                    <img src={ctype} alt="" />
                                </div>
                                <div className="recruitmentContent">
                                    <h5>{t('Embedded Linux Engineer (C/C++ Development)')}</h5>
                                    <p>
                                    {t('With a higher education BAC+5 in computer engineering, you have at least 2 years of significant experience in a similar position. Good technical knowledge of PHP, Symfony, Ansible, Github, Js/Jquery, Unix, Angular Js, Bootstrap, etc. technologies... Your interpersonal skills, your capacity for integration and adaptation as well as your communication are your assets .')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb20">
                            <div className="recruitFlex">
                                <div className="recruitmentIcon">
                                    <img src={pythonIcon} alt="" />
                                </div>
                                <div className="recruitmentContent">
                                    <h5>{t('Python Django Web API Engineer')}</h5>
                                    <p>
                                    {t('With a higher education BAC+5 in computer engineering, you have at least 2 years of significant experience in a similar position. Good technical knowledge of PHP, Symfony, Ansible, Github, Js/Jquery, Unix, Angular Js, Bootstrap, etc. technologies... Your interpersonal skills, your capacity for integration and adaptation as well as your communication are your assets .')}
                                    </p>
                                </div>
                            </div>
                        </div>
                     
                        <div className="col-lg-6 mb20">
                            <div className="recruitFlex">
                                <div className="recruitmentIcon">
                                    <img src={angularIcon} alt="" />
                                </div>
                                <div className="recruitmentContent">
                                    <h5>{t('Angular and/or React engineer')}</h5>
                                    <p>
                                    {t('With a higher education BAC+5 in computer engineering, you have at least 2 years of significant experience in a similar position. Good technical knowledge of PHP, Symfony, Ansible, Github, Js/Jquery, Unix, Angular Js, Bootstrap, etc. technologies... Your interpersonal skills, your capacity for integration and adaptation as well as your communication are your assets .')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb20">
                            <div className="recruitFlex">
                                <div className="recruitmentIcon">
                                    <img src={java1} alt="" />
                                </div>
                                <div className="recruitmentContent">
                                    <h5>{t('PHP/Symfony Engineer')}</h5>
                                    <p>
                                    {t('With a higher education BAC+5 in computer engineering, you have at least 2 years of significant experience in a similar position. Good technical knowledge of PHP, Symfony, Ansible, Github, Js/Jquery, Unix, Angular Js, Bootstrap, etc. technologies... Your interpersonal skills, your capacity for integration and adaptation as well as your communication are your assets .')}
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
