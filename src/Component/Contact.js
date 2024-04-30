import React, { useState } from 'react'
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import axios from "axios";
import { baseUrl } from '../Api/BaseUrl';
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

export default function Contact() {
    const { t, i18n } = useTranslation();
    const [name, setName] = useState('')
    const [Company, setCompany] = useState('')
    const [Phone, setPhone] = useState('')
    const [Email, setEmail] = useState('')
    const [Subject, setSubject] = useState('')
    const [Message, setMessage] = useState('')
    const [blogErr, setBlogErr] = useState(false);

    const handlsubmit = (e) => {
        e.preventDefault()
        setBlogErr({
            name: false,
            Company: false,
            Phone: false,
            Email: false,
            Subject: false,
            Message: false,
        });
        // Validate the input fields
        if (!name) {
            setBlogErr((prevState) => ({ ...prevState, name: true }));
        }
        if (!Company) {
            setBlogErr((prevState) => ({ ...prevState, Company: true }));
        }
        if (!Phone) {
            setBlogErr((prevState) => ({ ...prevState, Phone: true }));
        }
        if (!Email) {
            setBlogErr((prevState) => ({ ...prevState, Email: true }));
        }
        if (!Subject) {
            setBlogErr((prevState) => ({ ...prevState, Subject: true }));
        }
        if (!Message) {
            setBlogErr((prevState) => ({ ...prevState, Message: true }));
        }

        // If any field is empty, stop the submission
        if (!name || !Company || !Phone || !Email || !Subject || !Message) {
            return;
        }
        axios.post(`http://13.51.205.211:2001/api/contact_us`, {
            userName: name,
            user_Email: Email,
            user_phone: Phone,
            message: Message,
            Company: Company,
            Subject: Subject
        }).then((response) => {
            console.log(response)
            Swal.fire({
                title: "Data saved successfully!",
                text: "You clicked the button!",
                icon: "success"
            });
            setBlogErr(false);
            setName('')
            setEmail('')
            setCompany('')
            setPhone('')
            setMessage('')
            setSubject('')
        }).catch((error) => {
            console.log(error)
        })
        console.log({
            name,
            Email,
            Phone,
            Message,
            Company,
            Subject

        })
    }

    return (
        <>
            <section
                className="blogBanner6"

            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ">
                            <h1>{t('Contact Us')}</h1>
                            <p>
                                Nous incarnons une vision horizontale, transparente et équitable de
                                l'ESN, pour permettre à ceux qui en font la richesse d'en récolter les
                                fruits.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mapSec bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 wow slideInLeft col-sm-12">
                            <div className="bannnerleftContent ">
                                <h5 className="bannerH5">{t('GET IN TOUCH')}</h5>
                                <h1 className="bannerh1">
                                    {t('Do not hesitate to contact us for more information.')}
                                </h1>
                                <p className="bannerpara">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                                <div className="mapIconParent">
                                    <div className="mapIcon">
                                        <LocalPhoneIcon />
                                    </div>
                                    <div className="maptext">
                                        <h5>{t('Call us')}</h5>
                                        <p>Phone : +6221.2002.2012 Fax : +6221.2002.2013</p>
                                    </div>
                                </div>
                                <div className="mapIconParent">
                                    <div className="mapIcon">
                                        <EmailIcon />
                                    </div>
                                    <div className="maptext">
                                        <h5>{t('Email us')}</h5>
                                        <p>support@yourdomain.tld hello@yourdomain.tld</p>
                                    </div>
                                </div>
                                <div className="mapIconParent">
                                    <div className="mapIcon">
                                        <RoomIcon />
                                    </div>
                                    <div className="maptext">
                                        <h5>{t('Head Office')}</h5>
                                        <p>Jalan Cempaka Wangi No 22 Jakarta - Indonesia</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="contactFormdata">
                                <form className="row g-3" onSubmit={handlsubmit}>
                                    <div className="col-md-6 col-sm-12">
                                        <label htmlFor="inputEmail4" className="form-label">
                                          {t('Name')}
                                        </label>
                                        <input
                                            type="name"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Name"
                                            onChange={(e) => setName(e.target.value)}
                                            name="name"
                                            value={name}

                                        />
                                        <span style={{ color: "red" }}>
                                            {blogErr && !name
                                                ? "*Please Enter Your  Name"
                                                : ""}
                                        </span>
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        <label htmlFor="inputPassword4" className="form-label">
                                             {t('Company')}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Company"
                                            onChange={(e) => setCompany(e.target.value)}
                                            name="Company"
                                            value={Company}
                                        />
                                        <span style={{ color: "red" }}>
                                            {blogErr && !Company
                                                ? "*Please Enter Your Company Name"
                                                : ""}
                                        </span>
                                    </div>

                                    <div className="col-md-6 col-sm-12">
                                        <label htmlFor="inputAddress" className="form-label">
                                            {t('Phone')}
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="inputAddress"
                                            placeholder="Phone"
                                            onChange={(e) => setPhone(e.target.value)}
                                            name="Phone"
                                            value={Phone}
                                        />
                                        <span style={{ color: "red" }}>
                                            {blogErr && !Phone
                                                ? "*Please Enter Your Phone No"
                                                : ""}
                                        </span>
                                    </div>


                                    <div className="col-md-6 col-sm-12">
                                        <label htmlFor="inputAddress2" className="form-label">
                                            {t('Email')}
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputAddress2"
                                            placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            name="Email"
                                            value={Email}
                                        />
                                        <span style={{ color: "red" }}>
                                            {blogErr && !Email
                                                ? "*Please Enter Your Email"
                                                : ""}
                                        </span>
                                    </div>

                                    <div className="col-md-12 col-sm-12">
                                        <label htmlFor="inputCity" className="form-label">
                                             {t('Subject')}
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputCity"
                                            placeholder="Subject"
                                            onChange={(e) => setSubject(e.target.value)}
                                            name="Subject"
                                            value={Subject}
                                        />
                                        <span style={{ color: "red" }}>
                                            {blogErr && !Subject
                                                ? "*Please Enter Your Subject"
                                                : ""}
                                        </span>
                                    </div>

                                    {/* <div className="col-md-6 col-sm-12">
                                        <label htmlFor="inputState" className="form-label">
                                            Division
                                        </label>
                                        <select id="inputState" className="form-select">
                                            <option selected="">Operational</option>
                                            <option>option1</option>
                                            <option>option1</option>
                                            <option>option1</option>
                                        </select>
                                    </div> */}
                                    <div className="col-md-12">
                                        <label htmlFor="inputState" className="form-label">
                                           {t('Message')}
                                        </label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            defaultValue={"                             "}
                                            onChange={(e) => setMessage(e.target.value)}
                                            name="Message"
                                            value={Message}
                                        />
                                        <span style={{ color: "red" }}>
                                            {blogErr && !Message
                                                ? "*Please Enter Your Message"
                                                : ""}
                                        </span>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="bannerBtnHome text-center">
                                            <button>
                                                {" "}
                                                 {t('Send')} <i className="fa fa-arrow-right" />{" "}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
