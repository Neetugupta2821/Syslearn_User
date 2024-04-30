import React from 'react'
import shape from '../Image/shape-02.png'
import about1 from '../Image/about-01.webp'
import about2 from '../Image/image.png'
import award1 from '../Image/award1.gif'
import check from '../Image/check-mark.png'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
export default function Whoarewe() {
  const { t, i18n } = useTranslation();
  return (
 <>
 <section className="sectionWhoarewe">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="leftImg">
          <div className="abimg-01">
            <img src={about1}  />
            <div className="abimg-02">
              <img src={about2} />
            </div>
            <div className="award-status bounce-slide">
              <div className="inner">
                <div className="icon">
                  <img src={award1} />
                </div>
                <div className="content">
                  <h6 className="title">29+</h6>
                  <span className="subtitle">{t('Wonderful Awards')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ab_dotsBanner">
            <img src={shape}  alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="whoAreWeRightcont">
          <label className="pre-title">{t('WHO ARE WE ?')}</label>
          <h2 className="title">
            {t('Learn')} &amp; {t('Grow Your Skills From')}{" "}
            <span className="color-secondary">Syslearn</span>
          </h2>
          <p>
            {t("Created in 2019, our organization supports the development strategy of its clients in the field of IT engineering services. Syslearn mission is to provide personalized IT services to help its clients   improve their capabilities and face the challenges of digital transformation.")}
          </p>
          <p>
           {('Our team with an innovative vision, impeccable adaptability and proven knowledge in various sectors of activity allows us to intervene in the following areas: (Development of mobile applications, Web development, Artificial intelligence, Data  science, Tailor-made solutions which adapt precisely to your IT environment).')}
          </p>
          <ul className="ab_list">
            <li>
              <img src={check}/>{t('Expert Trainers')}
            </li>
            <li>
              <img  src={check} />{t('Online Remote Learning')}
            </li>
            <li>
              <img  src={check}/>{t('Lifetime Access')} 
            </li>
          </ul>
          <a href="#!" className="konwMoreBtn">
             {t('Know More')}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

 </>
  )
}
