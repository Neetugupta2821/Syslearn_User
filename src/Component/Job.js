import React, { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import company1 from '../Image/company_logo_1.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EditOffIcon from '@mui/icons-material/EditOff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CreateIcon from '@mui/icons-material/Create';
import axios from "axios";
import Swal from 'sweetalert2'
import { baseUrl } from '../Api/BaseUrl';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
export default function Job() {
    const { t, i18n } = useTranslation();
    const [model, setModel] = useState(false)
    const [model1, setModel1] = useState(false)
    const [job, setJob] = useState([])
    const [jobId, setJobId] = useState('')
    const [jobIdFR, setJobIdFR] = useState('')
    const [jobFR, setJobFR] = useState([])
    const [error, setError] = useState({
        errors: {},
        isError: false,
    });
    const [selectedfile, setselectedfile] = useState({
        file: null
    });
    const [data, setData] = useState({
        userName: "",
        user_Email: "",
        phone_no: ""

    })
    const [blogErr, setBlogErr] = useState(false);
    const handletoggal = (id) => {
        setJobId(id)
        setModel(true)
    }
    const handletoggal1 = (id) => {
        setJobIdFR(id)
        setModel1(true)
    }
    const handleCloseModal = () => {
        setModel(false);
    };
    const handleCloseModal1 = () => {
        setModel1(false);
    };


    const handleJobData = () => {
        {/*This API for getting All List of JOB[English] */ }
        axios.get(`${baseUrl}getAllJobs`).then((response) => {
            setJob(response.data.All_jobs)
        }).catch((error) => {
            console.log(error)
        })
    }
    const handelJobFRData = () => {
        {/*This API for getting All List of JOB[French] */ }
        axios.get(`${baseUrl}getAllJobs_fr`).then((response) => {
            console.log(response.data.All_jobs_fr)
            setJobFR(response.data.All_jobs_fr)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        handleJobData()
        handelJobFRData()
    }, [])
    const handleFileUpload = e => {
        e.preventDefault();
        const temp_file = e.target.files[0];
        console.log(temp_file);

        setselectedfile({ ...formData, file: temp_file });
    }
    const submitInputdata = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
    const formData = new FormData();
    formData.append("uploadResume", selectedfile.file);
    formData.append("userName", data.userName);
    formData.append("user_Email", data.user_Email);
    formData.append("phone_no", data.phone_no);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error state
        setBlogErr({
            userName: false,
            user_Email: false,
            phone_no: false,
        });

        // Validate form fields
        if (!data.userName.trim()) {
            setBlogErr(prevState => ({ ...prevState, userName: true }));
            return;
        }
        if (!selectedfile.file) {
            setBlogErr(prevState => ({ ...prevState, selectedfile: true }));
            return;
        }
        if (!data.user_Email.trim()) {
            setBlogErr(prevState => ({ ...prevState, user_Email: true }));
            return;
        }
        if (!data.phone_no.trim()) {
            setBlogErr(prevState => ({ ...prevState, phone_no: true }));
            return;
        }

        // Submit form data
        {/*This API FOR applying for the job [English] */ }
        axios.post(`${baseUrl}apply_on_Job/${jobId}`, formData)
            .then((response) => {
                console.log(response);
                setModel(false);
                Swal.fire({
                    title: "Job applied successfully!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                // Clear form fields and file input
                setData({
                    userName: "",
                    user_Email: "",
                    phone_no: ""
                });
                setselectedfile({
                    file: null
                });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire("Error", `${error?.response?.data?.jobErrorMessage}`, "error");
                setModel(false);

            });
    };
    const handleSubmitFR = (e) => {
        e.preventDefault();

        // Reset error state
        setBlogErr({
            userName: false,
            user_Email: false,
            phone_no: false,
        });

        // Validate form fields
        if (!data.userName.trim()) {
            setBlogErr(prevState => ({ ...prevState, userName: true }));
            return;
        }
        if (!selectedfile.file) {
            setBlogErr(prevState => ({ ...prevState, selectedfile: true }));
            return;
        }
        if (!data.user_Email.trim()) {
            setBlogErr(prevState => ({ ...prevState, user_Email: true }));
            return;
        }
        if (!data.phone_no.trim()) {
            setBlogErr(prevState => ({ ...prevState, phone_no: true }));
            return;
        }

        // Submit form data
        {/*This API FOR applying for the job [French] */ }
        axios.post(`${baseUrl}apply_on_Job_fr/${jobIdFR}`, formData)
            .then((response) => {
                console.log(response);
                setModel1(false);
                Swal.fire({
                    title: "Job applied successfully!",
                    text: "You clicked the button!",
                    icon: "success"
                });
                // Clear form fields and file input
                setData({
                    userName: "",
                    user_Email: "",
                    phone_no: ""
                });
                setselectedfile({
                    file: null
                });
            })
            .catch((error) => {
                console.log(error);
                Swal.fire("Error", `${error?.response?.data?.jobErrorMessage}`, "error");
                setModel(false);

            });
    };

    const GB = localStorage.getItem('language')
    console.log(GB)

    return (
        <>
            <section
                className="blogBanner2"

            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ">
                            <h1>{t('Jobs')}</h1>
                            <p>{t('Search Between More Then 50,000 Open Jobs.')}</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="latestSec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="latestParent">
                                <button>{t('Latest Jobs')}</button> <a href="">{t('Recent Jobs')}</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {localStorage.getItem('language') === "GB" ? <>
                            {job.map((info, i) => (
                                info.job_status === 1 && (
                                    <div className="col-lg-4 col-xxl-3 col-sm-6 col-md-6 mb20">
                                        <div className="productMain">
                                            <div className="fullBtn">
                                                <button>{t('FULL TIME')}</button>
                                                <span className="heart">
                                                    <FavoriteBorderIcon className="fa fa-heart-o" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <div className="imgProduct">
                                                <img src={`http://13.51.205.211:2001/${info.JobImage}`} alt="" />
                                                <h5>{info.job_Heading} </h5>
                                                <p>
                                                    <small>{info.Job_Experience}|{info.Salary}</small>
                                                </p>
                                                <button className="applyBtn" onClick={() => handletoggal(info._id)}>{t('Apply Now')}</button>
                                                <Link to='/JobDetail' state={{ dataType: job, dataId: info._id }}><button className="readMore">{t('Read More')}</button></Link>

                                            </div>
                                        </div>
                                    </div>
                                )

                            ))}</> : <>
                            {jobFR.map((info, i) => (
                                info.job_status_fr === 1 && (
                                    <div className="col-lg-4 col-xxl-3 col-sm-6 col-md-6 mb20">
                                        <div className="productMain">
                                            <div className="fullBtn">
                                                <button>{t('FULL TIME')}</button>
                                                <span className="heart">
                                                    <FavoriteBorderIcon className="fa fa-heart-o" aria-hidden="true" />
                                                </span>
                                            </div>
                                            <div className="imgProduct">
                                                <img src={`http://13.51.205.211:2001/${info.JobImage_fr}`} alt="" />
                                                <h5>{info.job_Heading_fr} </h5>
                                                <p>
                                                    <small>{info.Job_Experience_fr}|{info.Salary_fr}</small>
                                                </p>
                                                <button className="applyBtn" onClick={() => handletoggal1(info._id)}>{t('Apply Now')}</button>
                                                <Link to='/JobDetail' state={{ dataFR: jobFR, dataIdFR: info._id }}><button className="readMore">{t('Read More')}</button></Link>

                                            </div>
                                        </div>
                                    </div>
                                )

                            ))}
                        </>}

                        {model && <div
                            className="form_body"
                        >
                            <div className="form_tittle">
                                <div className="modal-content2">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                            {t('Apply Here')}
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            onClick={handleCloseModal}
                                        />
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="formJob">
                                                <div className="uploadResume">
                                                    <label htmlFor="fileUp">{t('Upload Resume')}</label>
                                                    <input type='file' name='file' onChange={handleFileUpload} accept=".pdf" />


                                                </div>
                                                <span style={{ color: "red" }}>
                                                    {blogErr && !selectedfile
                                                        ? "*Please Enter Your Heading"
                                                        : ""}
                                                </span>

                                                <label htmlFor="">{t('User Name')}</label>
                                                <input type="text" placeholder="user name" onChange={submitInputdata} name='userName' value={data.userName} />
                                                <span style={{ color: "red" }}>
                                                    {blogErr && !data.userName
                                                        ? "*Please Enter Your Name"
                                                        : ""}
                                                </span>
                                                <label htmlFor="">{t('User Email')}</label>
                                                <input type="email" placeholder="user email" onChange={submitInputdata} name='user_Email' value={data.user_Email} />
                                                <span style={{ color: "red" }}>
                                                    {blogErr && !data.user_Email
                                                        ? "*Please Enter Your Email"
                                                        : ""}
                                                </span>
                                                <label htmlFor="">{t('Phone Number')}</label>
                                                <input type="number" placeholder="phone number" onChange={submitInputdata} name='phone_no' value={data.phone_no} />
                                                <span style={{ color: "red" }}>
                                                    {blogErr && !data.phone_no
                                                        ? "*Please Enter Your phone number"
                                                        : ""}
                                                </span>
                                                <div className="btnRight">
                                                    <button>submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {model1 && <div
                            className="form_body"
                        >
                            <div className="form_tittle">
                                <div className="modal-content2">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                            {t('Apply Here')}
                                        </h1>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            onClick={handleCloseModal1}
                                        />
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmitFR}>
                                            <div className="formJob">
                                                <div className="uploadResume">
                                                    <label htmlFor="fileUp">{t('Upload Resume')}</label>
                                                    <input type='file' name='file' onChange={handleFileUpload} accept=".pdf" />


                                                </div>
                                                <span style={{ color: "red" }}>
                                                    {blogErr && !selectedfile
                                                        ? "*Please Enter Your Heading"
                                                        : ""}
                                                </span>

                                                <label htmlFor="">{t('User Name')}</label>
                                                <input type="text" placeholder="user name" onChange={submitInputdata} name='userName' value={data.userName} />
                                                <span style={{ color: "red" }}>
                                                    {blogErr && !data.userName
                                                        ? "*Please Enter Your Name"
                                                        : ""}
                                                </span>
                                                <label htmlFor="">{t('User Email')}</label>
                                                <input type="email" placeholder="user email" onChange={submitInputdata} name='user_Email' value={data.user_Email} />
                                                <span style={{ color: "red" }}>
                                                    {blogErr && !data.user_Email
                                                        ? "*Please Enter Your Email"
                                                        : ""}
                                                </span>
                                                <label htmlFor="">{t('Phone Number')}</label>
                                                <input type="number" placeholder="phone number" onChange={submitInputdata} name='phone_no' value={data.phone_no} />
                                                <span style={{ color: "red" }}>
                                                    {blogErr && !data.phone_no
                                                        ? "*Please Enter Your phone number"
                                                        : ""}
                                                </span>
                                                <div className="btnRight">
                                                    <button>submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
            <section className="jobCategorySec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="jobCateTop">
                                <h2>{t('Job Categories')}</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text printing and type setting industry
                                    Lorem Ipsum been industry standard dummy text ever since when
                                    unknown printer took a galley.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-4 col-sm-6 mb20">
                            <div className="jobCatCard">
                                <div className="catIcon">
                                    <QueryStatsIcon style={{ "fontSize": "50px" }} />
                                </div>
                                <div className="contentCate">
                                    <h4>{t('Web Software Dev')}</h4>
                                    <p>122 Jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb20">
                            <div className="jobCatCard">
                                <div className="catIcon">
                                    <EditOffIcon style={{ "fontSize": "50px" }} />
                                </div>
                                <div className="contentCate">
                                    <h4>{t('Web Software Dev')}</h4>
                                    <p>122 Jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb20">
                            <div className="jobCatCard">
                                <div className="catIcon">
                                    <BusinessCenterIcon style={{ "fontSize": "50px" }} />
                                </div>
                                <div className="contentCate">
                                    <h4>{t('Web Software Dev')}</h4>
                                    <p>122 Jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb20">
                            <div className="jobCatCard">
                                <div className="catIcon">
                                    <CreateIcon style={{ "fontSize": "50px" }} />
                                </div>
                                <div className="contentCate">
                                    <h4>{t('Web Software Dev')}</h4>
                                    <p>122 Jobs</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-4 col-sm-6 mb20">
                            <div className="jobCatCard">
                                <div className="catIcon">
                                    <QueryStatsIcon style={{ "fontSize": "50px" }} />
                                </div>
                                <div className="contentCate">
                                    <h4>{t('Web Software Dev')}</h4>
                                    <p>122 Jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb20">
                            <div className="jobCatCard">
                                <div className="catIcon">
                                    <EditOffIcon style={{ "fontSize": "50px" }} />
                                </div>
                                <div className="contentCate">
                                    <h4>{t('Web Software Dev')}</h4>
                                    <p>122 Jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb20">
                            <div className="jobCatCard">
                                <div className="catIcon">
                                    <BusinessCenterIcon style={{ "fontSize": "50px" }} />
                                </div>
                                <div className="contentCate">
                                    <h4>{t('Web Software Dev')}</h4>
                                    <p>122 Jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 mb20">
                            <div className="jobCatCard">
                                <div className="catIcon">
                                    <CreateIcon style={{ "fontSize": "50px" }} />
                                </div>
                                <div className="contentCate">
                                    <h4>{t('Web Software Dev')}</h4>
                                    <p>122 Jobs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
