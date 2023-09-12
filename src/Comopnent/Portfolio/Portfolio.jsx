import React from 'react'
import port1 from '../siteimage/poert1.png'
import port2 from '../siteimage/port2.png'
import port3 from '../siteimage/port3.png'


export default function Portfolio() {
    return (
        <>
                <div className="portfolio mb-4 ">
                    <div className="pt-4">
                        <div className="text-center pt-4">
                            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <div className="line-dark me-3" ></div><i
                                    className="fa-solid fa-star"></i>
                                <div className="line-dark ms-3" ></div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative">
                                        <img alt="" className="w-100 rounded-3" src={port1} />
                                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative">
                                        <img alt="" className="w-100 rounded-3" src={port2} />
                                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative">
                                        <img alt="" className="w-100 rounded-3" src={port3} />
                                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative">
                                        <img alt="" className="w-100 rounded-3" src={port1} />
                                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative">
                                        <img alt="" className="w-100 rounded-3" src={port2} />
                                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="rounded-3 overflow-hidden position-relative">
                                        <img alt="" className="w-100 rounded-3" src={port3} />
                                        <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="model position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none">
                        <img alt="" src="" />
                    </div>
                </div>
                
        </>
    )

}
