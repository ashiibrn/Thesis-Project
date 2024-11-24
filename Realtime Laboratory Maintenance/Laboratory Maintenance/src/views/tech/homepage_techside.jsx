// homepage_techside.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import dashboard_icon from "../../assets/user/dashboard_icon.svg";
import health_icon from "../../assets/user/health_icon.svg";
import info_icon from "../../assets/user/info_icon.svg";
import location_icon from "../../assets/user/location_icon.svg";
import message_icon from "../../assets/user/message_icon.svg";
import about_icon from "../../assets/user/about_icon.svg";
import alert_icon from "../../assets/user/alert_icon.svg";
import { useStateContext } from '../../contexts/contextprovider';

function HomepageTech() {
  const navigate = useNavigate();
  const { user } = useStateContext(); // Get user info from context to manage dynamic display

  return (
    <div className="dashboard1">
      <div className="dashboard-route-button1">
      <div className="dashboard-sub-route-button1">
          <button onClick={() => navigate('/tech/homepage_tech')} className='currentActiveButton'>
            <img src={dashboard_icon} alt="dashboard_icon" />
            <p>DASHBOARD</p>
          </button>
          <button onClick={() => navigate('/tech/health_tech')} className='notCurrentActiveButton'>
            <img src={health_icon} alt="health_icon" />
            <p>HEALTH</p>
          </button>
          <button onClick={() => navigate('/tech/com_info_tech')} className='notCurrentActiveButton'>
            <img src={info_icon} alt="info_icon" />
            <p>INFO</p>
          </button>
          <button onClick={() => navigate('/tech/location')} className='notCurrentActiveButton'>
            <img src={location_icon} alt="location_icon" />
            <p>LOCATION</p>
          </button>
          <button onClick={() => navigate('/tech/message_tech')} className='notCurrentActiveButton'>
              <img src={message_icon} alt="message_icon" />
              <p>CONTACT</p>
          </button>
          <button onClick={() => navigate('/tech/about')} className='notCurrentActiveButton'> 
            <img src={about_icon} alt="about_icon" />
            <p>ABOUT</p>
          </button>
        </div>

        <section className="dashboard-sub-route-button2">
          <div className="dashboard-sub-route-button2-partition">
            <button onClick={() => navigate('/tech/Health')} className="dashboard-whole-button1">
            <div className="dashboard-whole-button1-label1">
                <img src={health_icon} alt="health_icon" />
                <p>COMPUTER HEALTH</p>
              </div>
              <div className="dashboard-whole-button1-label2">
                <div className="dashboard-first-button-sub1">
                  <p>13</p>
                  <div>
                    <img src={alert_icon} alt="alert_icon" />
                    <p>issue</p>
                  </div>
                </div>
                <hr />
                <div className="dashboard-second-button-sub1">
                  <div className="dashboard-second-button-sub2">
                    <p>5</p>
                    <p>hardware</p>
                  </div>
                  <div className="dashboard-second-button-sub2">
                    <p>8</p>
                    <p>software</p>
                  </div>
                </div>
              </div>
            </button>

            <button onClick={() => navigate('/tech/com_info')} className="dashboard-half-button1">
              <div className="dashboard-whole-button1-label1">
                <img src={info_icon} alt="info_icon" />
                <p>COMPUTER INFORMATION</p>
              </div>
              <div className="dashboard-whole-button2-label2">
                <p>72</p>
                <p>computers</p>
              </div>
            </button>

            <button onClick={() => navigate('/tech/about')} className="dashboard-half-button1">
              <div className="dashboard-whole-button1-label1">
                <img src={location_icon} alt="location_icon" />
                <p>ROUTER</p>
              </div>
              <div className="dashboard-whole-button2-label2">
                <p>3</p>
                <p>locations</p>
              </div>
            </button>
          </div>

          <div className="dashboard-sub-route-button2-partition">
            <button onClick={() => navigate('/tech/reports_display')} className="dashboard-half-button1">
              <div className="dashboard-whole-button1-label1">
                <img src={message_icon} alt="message_icon" />
                <p>REPORTS</p>
              </div>
              <div>
                <p>Reports Display</p>
              </div>
            </button>

            <button onClick={() => navigate('/tech/message_tech')} className="dashboard-half-button1">
              <div className="dashboard-whole-button1-label1">
                <img src={message_icon} alt="message_icon" />
                <p>CONTACT</p>
              </div>
              <div className="dashboard-half-button1-label3">
                <p>Contact Technician on Duty</p>
              </div>
            </button>

            <button onClick={() => navigate('/tech/about')}  className="dashboard-whole-button1">
              <div className="dashboard-whole-button1-label1">
                <img src={about_icon} alt="about_icon" />
                <p>ABOUT</p>
              </div>
              <div className="dashboard-half-button1-label3">
                <p>"Computers are powerful tools- <br /> when well-maintained, they <br /> empower to achieve the impossible."</p>
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomepageTech;
