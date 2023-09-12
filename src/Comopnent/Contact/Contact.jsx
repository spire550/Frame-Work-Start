import React from 'react'
import '../Contact/Contact.css'

export default function Contact() {
    return (
        <>
            <div className="contact mb-4 p-5 ">
                <div className="pt-3 conatiner">
                    <div className="text-center pt-4">
                        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">conatct section</h2>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <div className="line-dark me-3"></div><i
                                className="fa-solid fa-star"></i>
                            <div className="line-dark ms-3" ></div>
                        </div>
                    </div>
                    <form noValidate="" action="" className="w-50 p-3 mx-auto mt-5">
                        <div className='p-3'>
                            <label htmlFor="userName">userName : </label>
                            <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3"/>
                        </div>
                        <div className='p-3'>
                            <label htmlFor="userAge">userAge : </label>
                            <input id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3"/>
                        </div>
                        <div className='p-3'>
                            <label htmlFor="userEmail">userEmail : </label>
                            <input id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3"/>
                        </div>
                        <div className='p-3'>
                            <label htmlFor="userPassword">userPassword : </label>
                            <input id="userPassword" type="password" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3"/>
                        </div>
                        <button className="btn mt-4 text-white"> Send Message </button>
                    </form>
                </div>
            </div>

        </>
    )
}
