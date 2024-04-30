import React from 'react'
import logo from '../Image/logo.png'
import { Link } from 'react-router-dom'
import uk from '../Image/uk.jpg'
import eglish from '../Image/Flag_of_France.svg.png'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Header() {
    const { t, i18n } = useTranslation();
    const handlesubmit = (code) => {
        i18n.changeLanguage(code);
        console.log("SELECT", code);
    
        localStorage.setItem("language", code)
    
      }
    
    return (
        <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to='/'><li className="nav-item">
                            {t('Welcome')}
                        </li></Link>
                        <Link to="/WhoWeAre">  <li className="nav-item">
                            {t('Who are we ?')}
                        </li></Link>
                        <Link to="/DigitalTechnology"><li className="nav-item">
                            {t('Digital technologies')}
                        </li></Link>
                        <Link to='/Service'>  <li className="nav-item">
                            {t('Services')}
                        </li></Link>
                        <Link to="/Value">  <li class="nav-item">
                           {t('Values')}
                        </li></Link>
                        <Link to='/Recruitment'> <li class="nav-item">
                           {t('Recruitment')}
                        </li></Link>
                        <Link to="/Blog"> <li className="nav-item">
                            {t('Blog')}
                        </li></Link>
                        <Link to='/Job'><li className="nav-item">
                            {t('Jobs')}
                        </li></Link>
                        {/* <li className="nav-item image_language">
                            <img src={uk} />
                        </li>
                        <li className="nav-item image_language">
                            <img src={eglish} />
                        </li> */}


                    </ul>
                    <form className="d-flex" role="search">

                        <Link to='/Contact'><button className="btn btn-outline-success" type="submit">Contact</button></Link>
                    </form>
                    <div className='languageImg'>
                        <div className='image_language'>
                            <img src={uk} onClick={() => handlesubmit("GB")} />

                        </div>
                        <div className='image_language'>
                            <img src={eglish} onClick={() => handlesubmit("FR")} />
                        </div>

                    </div>
                </div>
            </div>
        </nav>
        </div>
    )
}
