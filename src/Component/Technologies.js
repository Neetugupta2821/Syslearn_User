import React from 'react'
import technologies from '../Image/web-technologies.png'
import software from '../Image/software-development.png'
import application from '../Image/software-application.png'
import data from '../Image/data-management.png'
import simulation from '../Image/3D-simulation.png'
import virtual from '../Image/vr-ar.png'
import testing  from '../Image/testing.png'
import AI from '../Image/ai.png'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
 

export default function Technologies() {
  const { t, i18n } = useTranslation();
  return (
   <>
   <section className="digitalSec">
  <div className="container">
    <div className="row">
      <div className="digitaTechno">
        <h3>{t('Digital technologies')}</h3>
      </div>
      <p className="text-center">
       {t("Syslearn mission is to support you in your projects by putting Offers  that are available to you according to your needs. For your projects what whatever technology or solution you need: Software Products (AI), HMI, information systems, web technologies,embedded systems, IoT, mobile development, project management, business intelligence, DBMS, CAD, 3D simulation, virtual reality and increased.")}
      </p>
    </div>
    <div className="row mt-3">
      <div className="col-lg-3 col-md-4 mb20 col-sm-6">
        <div className="htmlCard">
          <div className="imgHtml">
            <img src={technologies}  alt="" />
          </div>
          <h3>{t('Web Technologies')}</h3>
          <p>{t('HTML5, Angular, PHP, CSS, JS, FLEX, J2EE ...')}</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mb20 col-sm-6">
        <div className="htmlCard">
          <div className="imgHtml">
            <img src={software}  alt="" />
          </div>
          <h3>{t('Software development')}</h3>
          <p>{t('HTML5, Angular, PHP, CSS, JS, FLEX, J2EE ...')}</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mb20 col-sm-6">
        <div className="htmlCard">
          <div className="imgHtml">
            <img src={application}  alt="" />
          </div>
          <h3>{t('Software Interface')}</h3>
          <p>{t('HTML5, Angular, PHP, CSS, JS, FLEX, J2EE ...')}</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mb20 col-sm-6">
        <div className="htmlCard">
          <div className="imgHtml">
            <img src={data} alt="" />
          </div>
          <h3>{t('Database')}</h3>
          <p>{t('HTML5, Angular, PHP, CSS, JS, FLEX, J2EE ...')}</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mb20 col-sm-6">
        <div className="htmlCard">
          <div className="imgHtml">
            <img src={simulation}  alt="" />
          </div>
          <h3>{t('CAD / 3D simulation')}</h3>
          <p>{t('HTML5, Angular, PHP, CSS, JS, FLEX, J2EE ...')}</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mb20 col-sm-6">
        <div className="htmlCard">
          <div className="imgHtml">
            <img src={virtual}  alt="" />
          </div>
          <h3>{t('VR/AR ')}</h3>
          <p>{t('HTML5, Angular, PHP, CSS, JS, FLEX, J2EE ...')}</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mb20 col-sm-6">
        <div className="htmlCard">
          <div className="imgHtml">
            <img src={testing}  alt="" />
          </div>
          <h3>{t('Software Testing')}</h3>
          <p>{t('HTML5, Angular, PHP, CSS, JS, FLEX, J2EE ...')}</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mb20 col-sm-6">
        <div className="htmlCard">
          <div className="imgHtml">
            <img src={AI}  alt="" />
          </div>
          <h3>{t('AI Tools')}</h3>
          <p>{t('HTML5, Angular, PHP, CSS, JS, FLEX, J2EE ...')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

   </>
  )
}
