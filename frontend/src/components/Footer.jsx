import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div><footer className="site-footer " style={{marginTop:"7rem"}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">eDoc is a website to provide services of online medical consultancy for their
patients. With eDoc, the customers can interact with the doctors of their
preference at any time of the day from anywhere. The goal is to revolutionize
the way one connect with healthcare professionals. The well being of our customers is highly prioritized by providing a seamless experience of scheduling
appointments, consultation with doctors of highest standards without the
hustle of travelling and waiting in lines. Experience the future of medical
consultations with eDoc, your trusted online healthcare companion.</p>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                            <p style={{textAlign:"center", fontSize:'1.3rem'}}>AwaraGard</p>
                        </p>
                    </div>




                </div>
            </div>
        </footer></div>
    )
}

export default Footer