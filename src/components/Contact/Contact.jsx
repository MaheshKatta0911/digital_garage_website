import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import SmsSharpIcon from '@mui/icons-material/SmsSharp';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerwidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We will be enhancing the services for you in an unpredictable way.
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span>021 123 145 144</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <SmsSharpIcon size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Message</span>
                      <span>021 123 145 144</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Message Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <div className="image-container">
            <img
              src="https://www.bm-workshop.com/media/source/Rolls-Royce-Wraith-Mansory-Edition-12.jpg"
              alt="Rolls Royce"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
