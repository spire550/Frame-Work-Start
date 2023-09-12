import avatar from '../siteimage/avataaars.svg'
import React from 'react'

export default function Home() {


    return (
        <>
            <div className="home d-flex justify-content-center align-items-center text-white p-5">
                <div className="text-center">
                    <img src={avatar} alt="" className="my-3 w-75 "/>
                    <div className="text-center pt-4" >
                        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <div className="line me-3" ></div>
                            <i className="fa-solid fa-star position-relative"></i>
                            <div className="line ms-3"></div>
                        </div>
                    </div>
                    
                    <div>Graphic Artist - Web Designer - Illustrator</div>
                </div>
            </div>
        </>
    )
}
