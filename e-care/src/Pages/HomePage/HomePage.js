import React, { Component } from 'react'
import * as $ from "jquery";

import './homepage.css';



import article1 from "../../Assets/homepage/Images/article-1.png";
import arcticle2 from "../../Assets/homepage/Images/article-2.png";
import article3 from "../../Assets/homepage/Images/article-3.png";
import healthtips01 from "../../Assets/homepage/Images/healthtips01.png";
import healthtips02 from "../../Assets/homepage/Images/healthtips02.png";
import bg from '../../Assets/homepage/Images/bg.png';
import smlogo from '../../Assets/homepage/Images/sm-logo.png';
import star from '../../Assets/homepage/Images/Star.png';
import cross from '../../Assets/homepage/Images/cross.png';
import man from '../../Assets/homepage/Images/man.png';


// IMPORTING HEADER
import SubHeader from '../../Components/Partials/SubHeader/SubHeader'
import PublicNav from '../../Components/Partials/PublicNav/PublicNav';
import CovidOverview from '../../Components/Partials/CovidOverview/CovidOverview';
import Domains from '../../Components/Domains/Domains';


$(document).ready(function () {
    $(".sections-carousel").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `
    <button type="button" class="slick-prev d-inline-block align-middle">
      <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9907 3.98125L6.49489 14.5L16.9907 25.0187L13.7595 28.25L0.00947189 14.5L13.7595 0.75L16.9907 3.98125Z" fill="#002689"/>
      </svg>
    </button>`,
        nextArrow: `
    <button type="button" class="slick-next d-inline-block align-middle">
      <svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.00927734 25.0188L10.5051 14.5L0.00927734 3.98125L3.24053 0.75L16.9905 14.5L3.24053 28.25L0.00927734 25.0188Z" fill="#002689"/>
      </svg>
    </button>`,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 575.68,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
        ],
    });
});


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <PublicNav />
                <SubHeader page = 'home' image = "./Images/hero.png" heading ="Book an Appointment " description="React out to our Doctors or build your appointment right away"/>
                <CovidOverview />
                <Domains />
               

                <div className="hero-image mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6 pt-4 pb-5 text-center">
                                <p className='next text-white'>E-Care on News</p>
                                <img src={smlogo} className='img-fluid p-4' alt="sm-logo" />
                                <p className='next2 text-white'>Condimentum egestas lobortis quis est <br /> adipiscing phasellus sed.</p>
                                <div className="row d-flex justify-content-center">
                                    <img src={star} alt="star" className='img-fluid' />
                                    <img src={star} alt="star" className='img-fluid' />
                                    <img src={star} alt="star" className='img-fluid' />
                                    <img src={star} alt="star" className='img-fluid' />
                                    <img src={star} alt="star" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid bg-cl py-2">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                            <div className="col d-flex flex-column align-items-center justify-content-center py-4">
                                <h2 className="text-white">500+</h2>
                                <p className="lead font-weight-bold text-white text-center">
                                    Satisfied patients
                                </p>
                            </div>
                            <div className="col d-flex flex-column align-items-center justify-content-center py-4">
                                <h2 className="text-white">210+</h2>
                                <p className="lead font-weight-bold text-white text-center">
                                    Doctors
                                </p>
                            </div>
                            <div className="col d-flex flex-column align-items-center justify-content-center py-4">
                                <h2 className="text-white">100+</h2>
                                <p className="lead font-weight-bold text-white text-center">
                                    Nurses
                                </p>
                            </div>
                            <div className="col d-flex flex-column align-items-center justify-content-center py-4">
                                <h2 className="text-white">50+</h2>
                                <p className="lead font-weight-bold text-white text-center">
                                    Care units
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="row row-cols-1">
                        <h3 className="text-center" style={{ color: '#FC3B3B', fontFamily: "'Source Sans Pro', sans-serif", fontWeight: "600" }} >Register yourself</h3>
                        <p className="text-center registerP">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row row-cols-1 pb-5 row-cols-md-2">
                        <div className="col ttr text-center py-4">
                            <img src={cross} className='img-fluid pt-5 pb-4' alt="red cross" />
                            <h3 style={{ fontSize: '25px' }} className='pb-5 grr'>I am a Doctor/Nurse</h3>
                            <p className='pb-3 text-dark'>
                                Sign in as a doctor or a nurse thus <br /> be able to post tips on
                                health and <br /> reach out to patients
                            </p>
                            <div className="mx-auto">
                                <button className="btn registerBtn pl-4 pr-4">
                                    Register as a Doctor/Nurse
                                </button>
                            </div>
                        </div>
                        <div className="col ttr text-center hero-image py-4">
                            <img src={man} className='img-fluid pt-5 pb-4' alt="red cross" />
                            <h3 className='text-white text-center pb-5'>I am a Patient</h3>
                            <p className='text-white pb-3'>
                                Sign in as a candidate to be able to <br /> consult a doctor and get
                                notification
                            </p>
                            <div className="mx-auto">
                                <button className="btn registerBtn2 pl-4 pr-4">
                                    Register as a Patient
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-3">
                    <div className="row row-cols-1">
                        <h3 className="text-center" style={{ color: '#FC3B3B', fontFamily: "'Source Sans Pro', sans-serif", fontWeight: "600" }}>Health Articles</h3>
                        <p className="text-center registerP">
                            Health and disease-related news and content posts <br /> everyday
                        </p>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col my-3">
                            <div className="border-0 card col px-0 shadow">
                                <img src={article1} className="card-img-top" height="284" />
                                <div className="card-body">
                                    <h5 className="card-title ttr">
                                        Get relevant information about <br /> Hepatitis-C
                                    </h5>
                                    <p className="small text-danger">March 26 | 0 comments</p>
                                    <p className="card-text text-muted">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <div className="text-right">
                                        <a href="#" className="grr font-weight-bold">
                                            Continue reading
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-3">
                            <div className="border-0 card col px-0 shadow">
                                <img src={arcticle2} className="card-img-top" height="284" />
                                <div className="card-body">
                                    <h5 className="card-title ttr">
                                        How to Cure Alzimer disease with self <br /> care home tips?
                                    </h5>
                                    <p className="small text-danger">MARCH 29 | 5 comments</p>
                                    <p className="card-text text-muted">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <div className="text-right">
                                        <a href="#" className="grr font-weight-bold">
                                            Continue reading
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-3">
                            <div className="border-0 card col px-0 shadow">
                                <img src={article3} className="card-img-top" height="284" />
                                <div className="card-body">
                                    <h5 className="card-title ttr">
                                        COVID-19 Fight - Work
                                    </h5>
                                    <p className="small text-danger">MARCH 29 | 5 comments</p>
                                    <p className="card-text text-muted">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <div className="text-right ">
                                        <a href="#" className="grr font-weight-bold">
                                            Continue reading
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col my-3">
                            <div className="border-0 card col px-0 shadow">
                                <img src={article3} className="card-img-top" height="284" />
                                <div className="card-body">
                                    <h5 className="card-title ttr">
                                        COVID-19 Fight - Work From Home
                                    </h5>
                                    <p className="small text-danger">MARCH 29 | 5 comments</p>
                                    <p className="card-text text-muted">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <div className="text-right">
                                        <a href="#" className="grr font-weight-bold">
                                            Continue reading
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col text-center">
                            <h3 style={{ color: '#FC3B3B', fontFamily: "'Source Sans Pro', sans-serif", fontWeight: "600" }} className="">Health Tips Videos</h3>
                            <p className="text-muted">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <img className="img-fluid" src={healthtips01} alt="" />
                        </div>
                        <div className="col d-flex flex-column justify-content-center">
                            <h4 className="gre py-2">Dr. M. Michael</h4>
                            <p className="text-secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                                vitae explicabo fugit commodi tempore, sit a aliquam dolor vel
                                quidem natus eum earum idci officia in. Inventore, omnis
                                reprehenderit!
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-end mr-3">
                        <div>
                            <a href="#">More {">>"}</a>
                        </div>
                    </div>
                    <hr className="bg-success" />
                    <div className="row row-cols-1 row-cols-md-2 d-flex flex-row-reverse">
                        <div className="col">
                            <img className="img-fluid" src={healthtips02} alt="" />
                        </div>
                        <div className="col d-flex flex-column justify-content-center">
                            <h4 className="gre text-md-right py-2">Dr. M. Michael</h4>
                            <p className="text-secondary text-md-right">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                                vitae explicabo fugit commodi tempore, sit a aliquam dolor vel
                                quidem natus eum earum idci officia in. Inventore, omnis
                                reprehenderit!
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
