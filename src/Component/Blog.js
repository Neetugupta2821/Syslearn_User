import React, { useState, useEffect } from 'react'
import img from '../Image/blogcard2.webp'
import axios from "axios";
import { baseUrl } from '../Api/BaseUrl';
//  import bannerHome3 from '../Image/bannerHome3.jpg'
//  import blogcard3 from '../Image/blogcard3.png'
//  import bannerHome2  from '../Image/bannerHome2.jpg'
//  import bannerBlog from '../Image/bannerBlog.jpg'
//  import blogcard2 from '../Image/blogcard2.webp'
//  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
export default function Blog() {
  const { t, i18n } = useTranslation();
  const [blog, setBlog] = useState([])
  const [blogFR, setBlogFR] = useState([])


  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL)
  }, [])

  const handlBlogData = () => {
       {/*This API for getting All List of Blog[english] */}
    axios.get(`${baseUrl}getAllBlogs`)
      .then((response) => {
        console.log(response.data.all_blogs);
        setBlog(response.data.all_blogs)

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handlBlogData()
  }, [])
  const handlBlogDataFR = () => {
     {/*This API for getting All List of Blog[Franch] */}
    axios.get(`${baseUrl}getAllBlogs_fr`)
      .then((response) => {
        console.log(response.data.all_blogs);
        setBlogFR(response.data.all_blogs)

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handlBlogData()
    handlBlogDataFR()
  }, [])
  return (

    <>
      <section className="blogBanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <h1>Blog</h1>
              <p>
                {t('We embody a horizontal, transparent and equitable vision of the ESN, to allow those who make it rich to reap it the fruits.')}{" "}
              </p>

            </div>
          </div>
        </div>
      </section>
      <section className="blogCardSec">
        <div className="container">
          <div className="row">
            {localStorage.getItem('language')==="GB" ?<>
            {blog.map((blog, i) => (
              blog.blog_status === 1  && ( 
                <div className="col-lg-4 pe-3" key={i}>
                  <div className="cardBlog">
                    <div className="blogCardImg">
                      <img src={`http://13.51.205.211:2001/${blog.blogImage}`} alt="" />
                    </div>
                    <small className="postBlog">posted by Zeid</small>
                    <div className="contentBlogCard">
                      <h5>{blog.blog_Heading}</h5>
                      <p>{blog.blog_Desciption}</p>
                    </div>
                    <div className="bannerBtnHome">
                      <button>{t('See More')}</button>
                    </div>
                  </div>
                </div>
              )  
            ))}</>:<>
            {blogFR.map((blog, i) => (
                 blog.blog_status_fr===1 && (
                <div className="col-lg-4 pe-3" key={i}>
                  <div className="cardBlog">
                    <div className="blogCardImg">
                      <img src={`http://13.51.205.211:2001/${blog.blogImage_fr}`} alt="" />
                    </div>
                    <small className="postBlog">posted by Zeid</small>
                    <div className="contentBlogCard">
                      <h5>{blog.blog_Heading_fr}</h5>
                      <p>{blog.blog_Desciption_fr}</p>
                    </div>
                    <div className="bannerBtnHome">
                      <button>{t('See More')}</button>
                    </div>
                  </div>
                </div>
                 )
              
            ))}</>}
           
          </div>

        </div>
      </section>
    </>


  )
}
