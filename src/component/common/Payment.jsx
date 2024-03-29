import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Common.css'


// Functional component for the Payment page
const Payment = () => {
    // Using the useNavigate hook to handle navigation
    const navigate = useNavigate();

    // Function to navigate to the "/alldetails" route
    const FutherForward = () => {
        navigate("/alldetails")
    }

    // Rendering the Payment page component
    return (
        <>
            <section className="h-custom PaymentParent">
                <h2 className='text-center mt-2'>Please pay ₹ ₹ ₹  for detailed report.</h2>
                <div className="container PaymentChild py-3">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div>
                                        <div className="card  text-white rounded-3 PaymentBackColor">
                                            <div className="card-body">
                                                <p className="small mb-2">Card type</p>
                                                <a href="#!" type="submit" className="text-white">
                                                    <i className="fab fa-cc-mastercard fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <i className="fab fa-cc-visa fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <i className="fab fa-cc-amex fa-2x me-2" />
                                                </a>
                                                <a href="#!" type="submit" className="text-white">
                                                    <i className="fab fa-cc-paypal fa-2x" />
                                                </a>
                                                <form className="mt-4">
                                                    <div className="form-outline form-white mb-4">
                                                        <input
                                                            type="text"
                                                            id="typeName"
                                                            className="form-control form-control-lg"
                                                            siez={17}
                                                            placeholder="Cardholder's Name"
                                                        />
                                                        <label className="form-label" htmlFor="typeName">
                                                            Cardholder's Name
                                                        </label>
                                                    </div>
                                                    <div className="form-outline form-white mb-4">
                                                        <input
                                                            type="text"
                                                            id="typeText"
                                                            className="form-control form-control-lg"
                                                            siez={17}
                                                            placeholder="1234 5678 9012 3457"
                                                            minLength={19}
                                                            maxLength={19}
                                                        />
                                                        <label className="form-label" htmlFor="typeText">
                                                            Card Number
                                                        </label>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="typeExp"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="MM/YYYY"
                                                                    size={7}
                                                                    minLength={7}
                                                                    maxLength={7}
                                                                />
                                                                <label className="form-label" htmlFor="typeExp">
                                                                    Expiration
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-outline form-white">
                                                                <input
                                                                    type="password"
                                                                    id="typeText"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="●●●"
                                                                    size={1}
                                                                    minLength={3}
                                                                    maxLength={3}
                                                                />
                                                                <label className="form-label" htmlFor="typeText">
                                                                    Cvv
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <hr className="my-4" />
                                                <button
                                                    type="button"
                                                    className="btn btn-info btn-block btn-lg mainButton"
                                                    onClick={FutherForward}
                                                >
                                                    <div className="d-flex justify-content-between">
                                                        <span>
                                                            Checkout
                                                            <i className="fas fa-long-arrow-alt-right ms-2" />
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// Exporting the component
export default Payment;