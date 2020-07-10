import React from 'react'
import c1 from '../../../assets/introducing/images/c1.png'
import c2 from '../../../assets/introducing/images/c2.png'
import c3 from '../../../assets/introducing/images/c3.png'
import Locate from '../../components/Locate'

const Contact = () => (
    <>
        <Locate locate="Contato"/>
            <section className="ab-info-main py-5" id="contact">
                <div className="container py-xl-5 py-lg-3">
                    <div className="title-section text-center mb-md-5 mb-4">
                        <h3 className="w3ls-title mb-3">Contact <span>Us</span></h3>
                        <p className="titile-para-text mx-auto">Inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo.Nemo
                            enim totam rem aperiam.</p>
                    </div>
                    <div className="row contact-agileinfo pt-lg-4">
                        
                        <div className="col-md-5 address">
                            <h3 className="footer-title mb-4 pb-lg-2">Our Address</h3>
                            <div className="row address-info-w3ls">
                                <div className="col-3 address-left">
                                    <img src={c1} alt="" className="img-fluid" />
                                </div>
                                <div className="col-9 address-right mt-2">
                                    <h5 className="address mb-2">Address</h5>
                                    <p> California, USA</p>
                                </div>
                            </div>
                            <div className="row address-info-w3ls my-2">
                                <div className="col-3 address-left">
                                    <img src={c2} alt="" className="img-fluid" />
                                </div>
                                <div className="col-9 address-right mt-2">
                                    <h5 className="address mb-2">Email</h5>
                                    <p>
                                        <a href="mailto:example@email.com"> mail@example.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="row address-info-w3ls">
                                <div className="col-3 address-left">
                                    <img src={c3} alt="" className="img-fluid" />
                                </div>
                                <div className="col-9 address-right mt-2">
                                    <h5 className="address mb-2">Phone</h5>
                                    <p>+1 234 567 8901</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-7 contact-right mt-lg-0 mt-5">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-lg-6 form-group pr-lg-2">
                                        <input type="text" className="form-control" name="Name" placeholder="Name" required="" />
                                    </div>
                                    <div className="col-lg-6 form-group pl-lg-2">
                                        <input type="email" className="form-control" name="Email" placeholder="Email" required="" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="Phone" placeholder="Phone" required="" />
                                </div>
                                <div className="form-group">
                                    <textarea name="Message" className="form-control" placeholder="Message" required=""></textarea>
                                </div>
                                <button type="submit" className="btn submit-contact-main ml-auto">Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>

        </>    
)

export default Contact