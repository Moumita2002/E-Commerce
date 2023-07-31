import React from 'react'
import Layout from '../components/Layout/Layout'
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsYoutube} from 'react-icons/bs';


const Contact = () => {
  return (
    <Layout title={"E-commerce - Contact"}>
      <div className="interior_13">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-container-block">
              <div className="orange-card">
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-ipadp-12 wk-desk-6" id="i7wk">
                <div className="card-content">
                  <p className="text-blk section-head">
                    Get in touch with us
                  </p>
                  <p className="text-blk sub-head">
                      We Provide the best services here, for more information:
                      
                  </p>
                  <div className="social-links text-center text-md-end pt-3 pt-md-0">
                    <a href="#" className="twitter"><BsTwitter/></a>
                    <a href="#" className="youtube"><BsYoutube /></a>
                    <a href="#" className="linkedin"><BsLinkedin /></a>
                  </div>

                </div>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-ipadp-12 wk-desk-6 img-one" id="iwgx">
                <img className="img-sofa3" id="isvcn" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Mask%20Group%20215.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Contact