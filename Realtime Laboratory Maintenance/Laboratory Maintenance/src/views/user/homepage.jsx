import { useNavigate } from 'react-router-dom';
import dashboard_icon from "../../assets/user/dashboard_icon.svg";
import health_icon from "../../assets/user/health_icon.svg";
import info_icon from "../../assets/user/info_icon.svg";
import location_icon from "../../assets/user/location_icon.svg";
import message_icon from "../../assets/user/message_icon.svg";
import about_icon from "../../assets/user/about_icon.svg";
import alert_icon from "../../assets/user/alert_icon.svg";
import { useStateContext } from '../../contexts/contextprovider';

function Homepage() {
  const navigate = useNavigate();
  const { user } = useStateContext(); // Get user info from context to manage dynamic display

  return (
    
    <div className="dashboard1">
      <div className="dashboard-route-button1">
        <div className="dashboard-sub-route-button1">
          <button onClick={() => navigate('/user/homepage')} className='currentActiveButton'>
            <img src={dashboard_icon} alt="dashboard_icon" />
            <p>DASHBOARD</p>
          </button>
          <button onClick={() => navigate('/user/Health')} className='notCurrentActiveButton'>
            <img src={health_icon} alt="health_icon" />
            <p>HEALTH</p>
          </button>
          <button onClick={() => navigate('/user/com_info')} className='notCurrentActiveButton'>
            <img src={info_icon} alt="info_icon" />
            <p>INFO</p>
          </button>
          <button onClick={() => navigate('/user/location')} className='notCurrentActiveButton'>
            <img src={location_icon} alt="location_icon" />
            <p>LOCATION</p>
          </button>
          
          <button onClick={() => navigate('/user/message')} className='notCurrentActiveButton'>
              <img src={message_icon} alt="message_icon" />
              <p>CONTACT</p>
          </button>

          <button onClick={() => navigate('/user/about')} className='notCurrentActiveButton'> 
            <img src={about_icon} alt="about_icon" />
            <p>ABOUT</p>
          </button>
        </div>

        <section className="dashboard-sub-route-button2">
          <div className="dashboard-sub-route-button2-partition">
            <button onClick={() => navigate('/user/Health')} className="dashboard-whole-button1">
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
                    <p>Hardware</p>
                  </div>
                  <div className="dashboard-second-button-sub2">
                    <p>8</p>
                    <p>Software</p>
                  </div>
                </div>
              </div>
            </button>

            <button onClick={() => navigate('/user/com_info')} className="dashboard-half-button1">
              <div className="dashboard-whole-button1-label1">
                <img src={info_icon} alt="info_icon" />
                <p>COMPUTER INFORMATION</p>
              </div>
              <div className="dashboard-whole-button2-label2">
                <p>72</p>
                <p>Computers</p>
              </div>
            </button>

            <button onClick={() => navigate('/user/Health')} className="dashboard-half-button1">
              <div className="dashboard-whole-button1-label1">
                <img src={location_icon} alt="location_icon" />
                <p>ROUTER</p>
              </div>
              <div className="dashboard-whole-button2-label2">
                <p>3</p>
                <p>Locations</p>
              </div>
            </button>
          </div>

          <div className="dashboard-sub-route-button2-partition">
            <button className="dashboard-half-button1-hidden">
              <div className="dashboard-whole-button1-label1">
                <img src={message_icon} alt="message_icon" />
                <p>CONTACT</p>
              </div>
              <div>
                <p>Message technician on duty</p>
              </div>
            </button>

            <button onClick={() => navigate('/user/message')} className="dashboard-half-button1">
              <div className="dashboard-whole-button1-label1">
                <img src={message_icon} alt="message_icon" />
                <p>CONTACT</p>
              </div>
              <div className="dashboard-half-button1-label3">
                <br /><p>Message Technician <br /> on Duty.</p>
              </div>
            </button>

            <button onClick={() => navigate('/user/about')} className="dashboard-whole-button1">
              <div className="dashboard-whole-button1-label1">
                <img src={about_icon} alt="about_icon" />
                <p>ABOUT</p>
              </div>
              <div className="dashboard-half-button1-label3">
                <p><i>"Computers are powerful tools- <br /> when well-maintained, they <br /> empower to achieve the impossible."</i></p>
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
