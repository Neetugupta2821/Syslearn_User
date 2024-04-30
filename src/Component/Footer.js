import React from 'react'
import careerImg from '../Image/careerImg.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import footerLogo from '../Image/footerLogo.png'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <footer>
        <div className="footermain">
          <div className="container">
            <div className="row careerChnageSec">
              <div className="col-lg-6 d-flex align-items-center">
                <div>
                  <h2 className="lookingForHead">{t('Subscribe to the Newsletters!')}</h2>
                  <p className="careerChangePara">
                    {t('Subscribe to receive the latest news exclusively, we will send them directly to your email box.')}
                  </p>
                  <div className="buttonParent">
                    <a href="#">{t('APPLY NOW')}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="careerChangeImg">
                  <img src={careerImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerContent">
          <div className="container">
            <div className="row borderFotter">
              <div className="col-lg-4 col-sm-12">
                <div className="footerLogoContent">
                  <div className="footerLogo">
                    <img src={footerLogo} alt="" />
                  </div>
                  <p>
               {t('The Syslearn software agency specializes in software, web and customized development.')}
                  </p>
                  <ul className="footerIconSocial">
                    <li>
                      <a href="#">
                        <LinkedInIcon/>{t('Follow us on LinkedIn')}  
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="cateforiesContent">
                  <h5>{t('Categories')}</h5>
                  <ul>
                    <li>
                      <a href="#">{t('Full time')}</a>
                    </li>
                    <li>
                      <a href="#">{t('Part time')}</a>
                    </li>
                    <li>
                      <a href="#">{t('Freelance')}</a>
                    </li>
                    <li>
                      <a href="#">{t('Internship')}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="cateforiesContent">
                  <h5>{t('Company')}</h5>
                  <ul>
                    <li>
                      <a href="#">{t('About us')}</a>
                    </li>
                    <li>
                      <a href="#">{t('Leadership')}</a>
                    </li>
                    <li>
                      <a href="#">{t('Career')}</a>
                    </li>
                    <li>
                      <a href="#">{t('Internship')}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="cateforiesContent">
                  <h5>{t('Newsletter')}</h5>
                  <p>{t('Get exclusive deals by signing up to our Newsletter.')}</p>
                  <div className="formFooter">
                    <input type="email" placeholder="Email" />
                    <div className="footerFormButton">
                      <button>{t('SIGN UP')}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <p className="copyPara">
                  {t('Copyright © 2023, All rights reserved. Powered by Syslearn.')}
                </p>
              </div>
              <div className="col-md-6">
                <div className="listCopy">
                  <ul>
                    <li>
                      <a href="#">{t('Term of use')}</a>
                    </li>
                    <li>
                      <a href="#">{t('Privacy policy')}</a>
                    </li>
                    <li>
                      <a href="#">{t('Cookie policy')}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
