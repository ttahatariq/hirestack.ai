import logo from './logo.png';
import video from './video.png'


function Applicants () {
  return (
    <div>
        <div className="header">
        <di className="logo">
            <img src={logo} alt="Logo"/>

        </di>
        <div className="activities">
            <a href="dashboard">Admin</a>
        </div>
        </div>

        <div className="contentbody">
        <div className="left" style={{width: "150px", margin: "0"}}>
            <ul>
                <li><a href="dashboard">DASHBOARD</a></li>
                <li><a href="applicants">APPLICANTS</a></li>
                <li><a href="settings">SETTINGS</a></li>
            </ul>
        </div>
        <div className="right dashboard">
            <h2>WELCOME ADMINSTRATOR</h2>
            <h4>APPLICANT TRACKING</h4>
            <div className="summary" style={{flexDirection: "column", textAlign: "left", marginTop: "30px"}}>
                <p><strong>APPLICANT NAME: SUNNY AVUNGTON</strong></p> <br/>
                <p>What hourly pay range are you expecting or looking for?</p>
                <div className="video">
                    <img src={video} alt="Video" style={{width: "180px"}}/>
                    <div className="comment">
                        <p>RATING:</p> <br/>
                        COMMENT
                        <textarea name="cmnt" id="" cols="35" rows="3"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>


        <footer>
        <div>
            WEB: <a href="#">www.REALVOICE.com</a>
        </div>
        <div>
            HELP DESK: <a href="tel:+">901-609-300</a>
        </div>
        <div>
            EMAIL: <a href="mailto:hr@realvoice.com">HR@REALVOICE.com</a>
        </div>
    </footer> 
    </div>
  )
}

export default Applicants