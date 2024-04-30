import React from 'react'
import iconThree from '../Image/icon-3.webp'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Universit() {
  const { t, i18n } = useTranslation();
  return (
     <>
     <section className="universitySecRow">
  <div className="container">
    <div className=" row">
      <div className="col-lg-3 col-sm-6">
        <div className="universityMain">
          <div className="universityParent">
            <div className="uniImg">
              <img src={iconThree}  alt="" />
            </div>
            <div>
              <h3>{t('University Life')}</h3>
              <h5 className="text-muted">{t('Overall in here')}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="universityMain">
          <div className="universityParent">
            <div className="uniImg">
              <img src={iconThree} alt="" />
            </div>
            <div>
              <h3>{t('Graduation')} </h3>
              <h5 className="text-muted">{t('Getting Diploma')}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="universityMain">
          <div className="universityParent">
            <div className="uniImg">
              <img src={iconThree} alt="" />
            </div>
            <div>
              <h3>{t('Social')}</h3>
              <h5 className="text-muted">{t('Overall in here')}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="universityMain">
          <div className="universityParent">
            <div className="uniImg">
              <img src={iconThree} alt="" />
            </div>
            <div>
              <h3>{t('Athletics')}</h3>
              <h5 className="text-muted">{t('Sport Clubs')}</h5>
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
