import React, { useEffect, useState } from 'react'
import logo from '../Image/logo.png'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Swal from 'sweetalert2'
import axios from "axios";
import { baseUrl } from '../Api/BaseUrl';
export default function JobDetail() {
  const { t, i18n } = useTranslation();
  const [model, setModel] = useState(false)
  const [model1, setModel1] = useState(false)
  const [jobId, setJobId] = useState('')
  const [jobIdFR, setJobIdFR] = useState('')
  const [selectedfile, setselectedfile] = useState({
    file: null
  });
  const [jobdetail, setJobDetail] = useState({
    Job_Experience: "",
    Salary: "",
    company_Address: "",
    job_Description: "",
    job_Heading: "",
    id: ""
  })
  const [jobdetailFR, setJobDetailFR] = useState({
    Job_ExperienceFR: "",
    SalaryFR: "",
    company_AddressFR: "",
    job_DescriptionFR: "",
    job_HeadingFR: "",
    idFR: ""
  })
  const [data, setData] = useState({
    userName: "",
    user_Email: "",
    phone_no: ""
  })
  const [blogErr, setBlogErr] = useState(false);
  const location = useLocation()
  const { dataType, dataId } = location.state || {};

  console.log(dataType, dataId)
  let getNewJobData;
  let getNewJobDataFR;
  if (localStorage.getItem('language') === "GB") {
    getNewJobData = dataType.filter((item) => {
      return item._id === location.state.dataId;
    });
    console.log(getNewJobData)

  } else {
    const { dataFR, dataIdFR } = location.state;
    console.log(dataFR, dataIdFR)
     getNewJobDataFR = dataFR.filter((item) => {
      return item._id === dataIdFR
    })
    console.log(getNewJobDataFR)

  }

  useEffect(() => {
    if (getNewJobData && getNewJobData.length > 0) {
      const SetNewJobData = getNewJobData[0];
      console.log(SetNewJobData);
      setJobDetail((predata) => ({
        ...predata,
        Job_Experience: SetNewJobData.Job_Experience,
        Salary: SetNewJobData.Salary,
        company_Address: SetNewJobData.company_Address,
        job_Description: SetNewJobData.job_Description,
        job_Heading: SetNewJobData.job_Heading,
        id: SetNewJobData._id
      }));
    }
  }, []);

  useEffect(() => {
    if (getNewJobDataFR && getNewJobDataFR.length > 0) {
      const SetNewJobDataFR = getNewJobDataFR[0];
      console.log(SetNewJobDataFR);
      setJobDetailFR((predata) => ({
        ...predata,
        Job_ExperienceFR: SetNewJobDataFR.Job_Experience_fr,
        SalaryFR: SetNewJobDataFR.Salary_fr,
        company_AddressFR: SetNewJobDataFR.company_Address_fr,
        job_DescriptionFR: SetNewJobDataFR.job_Description_fr,
        job_HeadingFR: SetNewJobDataFR.job_Heading_fr,
        idFR: SetNewJobDataFR._id
      }));
    }
    console.log(jobdetailFR.Job_ExperienceFR)
  }, []);



  
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
  return (
    <>
      <section
        className="blogBanner8"

      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <h1>Job Details</h1>
              <p>
                Nous incarnons une vision horizontale, transparente et équitable de
                l'ESN, pour permettre à ceux qui en font la richesse d'en récolter les
                fruits.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="jobDetails">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="parentLogo">
                <div className="DetailLogo">
                  <img src={logo} alt="" />
                </div>
                <div>
                  <div className="parentMaiNcCall">
                    <div className="parentCalDetail">
                      <div className="callIcon">
                        <i className="fa fa-link" />
                      </div>
                      <div className="textICon">
                        <a href="https://itdevelopmentservices.com/design_website/sysLearn/index.html">
                          http://www.guxoft.com
                        </a>
                      </div>
                    </div>
                    <div className="parentCalDetail">
                      <div className="callIcon">
                        <i className="fa fa-phone" />
                      </div>
                      <div className="textICon">
                        <a href="#">+912345678</a>
                      </div>
                    </div>
                    <div className="parentCalDetail">
                      <div className="callIcon">
                        <i className="fa fa-envelope" />
                      </div>
                      <div className="textICon">
                        <a href="#">syslearn@demo.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jobDes">
                <h5>Job Description</h5>
                <p>
                {jobdetail.job_Description ? `${jobdetail.job_Description}` : `${jobdetailFR.job_DescriptionFR}`}
                 
                </p>
                <p className="mt-2">
                  This involves a lot of collaboration with the engineering and
                  R&amp;D Teams to prioritise and launch new features. You will also
                  play an important role in deployments, product roadmaps and data
                  security.
                </p>
                <h5>Experience</h5>
                <p>
                  {jobdetail.Job_Experience ? `${jobdetail.Job_Experience}` : `${jobdetailFR.Job_ExperienceFR}`}
                  {/* {jobdetail.Job_Experience} */}
                </p>
                <h5>Must Have</h5>
                <ul>
                  <li>
                    Proficient in ReactJS and other5modern JS libraries/frameworks
                  </li>
                  <li>
                    Proficient in ES6/7 object oriented JavaScript and architecture
                    and development of Single page web applications.
                  </li>
                  <li>
                    Basic understanding of nodeJS and its package managers like npm
                    and yarn.
                  </li>
                  <li>
                    Proficient in flux pattern based development and libraries build
                    upon it like redux, mobX and its derivative micro frameworks like
                    reduxForm etc.
                  </li>
                  <li>
                    Proficient in Event handling/event driven programming and creating
                    event observers at appropriate abstraction levels.
                  </li>
                  <li>
                    Strong understanding of build tools like web-pack, its
                    configuration, scripting and environment management
                    (dev/test/prod).
                  </li>
                  <li>
                    {" "}
                    Basic knowledge of HTML5, CSS3 and its frameworks and
                    pre-processors.
                  </li>
                  <li>
                    Should be able to resolve cross browser incompatibilities
                    associates with JS and CSS…
                  </li>
                  <li>Working Knowledge of D3 and similar JS charting libraries</li>
                </ul>
                <h5>Nice to Have</h5>
                <ul>
                  <li>Working knowledge of REST API design.</li>
                  <li>Working knowledge of User Experience Design</li>
                  <li>Working knowledge of responsive design.</li>
                  <li> Good understanding of Web 2.0 and Semantic Web standards.</li>
                  <li>Good understanding of data-structures and algorithms.</li>
                  <li>Ability to understand and balance performance tradeoffs.</li>
                  <li>
                    Experience with programming languages like Ruby on Rails, Python,
                    Node JS
                  </li>
                  <li>Experience in deploying complex systems in AWS</li>
                  <li>Experience with best practices such as A/B testing.</li>
                </ul>
                <h5>Just to Add</h5>
                <p>
                  Creative Workplace and open work culture. Creativity and out of the
                  box thinking is nurtured.
                </p>
                <p>
                  {" "}
                  Some perks: Excellent Filter Coffee, Free lunches, PS4 and Fooseball
                  breaks, stocked kitchen topped up with a nice set of people to work
                  with!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sideDetails">
                <div className="applyDetails">
                  {localStorage.getItem('language') === "GB" ?  <button onClick={() => handletoggal(jobdetail.id)}>Apply for job</button>: <button onClick={() => handletoggal1(jobdetailFR.idFR)}>Apply for job</button>}
                 
                </div>
                <p className="OverviewJob">Job Overview</p>
                <div className="bgSide">
                  <div className="jobOverviewParent">
                    <div className="iconOverview">
                      <i className="fa fa-money" />
                    </div>
                    <div>
                      <p className="offerdSalary"> Offered Salary </p>
                      <p>$5000 - $10000</p>
                    </div>
                  </div>
                  <div className="jobOverviewParent">
                    <div className="iconOverview">
                      <i className="fa fa-transgender-alt" />
                    </div>
                    <div>
                      <p className="offerdSalary"> Gender </p>
                      <p>Gender</p>
                    </div>
                  </div>
                  <div className="jobOverviewParent">
                    <div className="iconOverview">
                      <i className="fa fa-graduation-cap" />
                    </div>
                    <div>
                      <p className="offerdSalary"> Career Level </p>
                      <p>Lead</p>
                    </div>
                  </div>
                  <div className="jobOverviewParent">
                    <div className="iconOverview">
                      <i className="fa fa-industry" />
                    </div>
                    <div>
                      <p className="offerdSalary">Industry </p>
                      <p> Information Technology</p>
                    </div>
                  </div>
                  <div className="jobOverviewParent">
                    <div className="iconOverview">
                      <i className="fa fa-history" />
                    </div>
                    <div>
                      <p className="offerdSalary"> Experience </p>
                      <p> 6-7 Years</p>
                    </div>
                  </div>
                  <div className="jobOverviewParent">
                    <div className="iconOverview">
                      <i className="fa fa-university" />
                    </div>
                    <div>
                      <p className="offerdSalary"> Qualification </p>
                      <p> Bachelor Degree</p>
                    </div>
                  </div>
                </div>
                <h5>Job Location</h5>
                <div className="mapDetail">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11382320.295574686!2d29.995966!3d45.853565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2sUkraine!5e0!3m2!1sen!2sus!4v1706943512911!5m2!1sen!2sus"
                    height={350}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </section>

    </>
  )
}
