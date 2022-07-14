import { Link } from 'react-router-dom';
import './App.css';
import logo from './logo.png';


function CandidateForm() {
  return (
    <div>
        <div className="header">
            <div className="logo">
            <img src={logo} alt="Logo"/>
            </div>
            {/* <div className="activities">
            <a href="#">Admin</a>
            </div> */}
        </div>

        <div className="contentbody" style={{margin: "-29px 10%"}}>
            <div className="left" style={{width: "70%"}}>
            {/* <img src={carrerStart} alt=""/> */}
            </div>
            <div className="right">
                <p>Please provide your contact information so we can reach you after you have completed your interview.</p><br/>
                <form>
                    
                    <div className="inputgroup">
                      <div className='inputBox'>
                        <label>Name</label>
                        <input type="text" name="" id="" />
                      </div>
                      <div className='inputBox'>
                        <label> LAST NAME</label><div></div>
                      <input type="text" name="" id="" />
                      </div>
                      
                    </div>
                    <div className="inputgroup">
                        <div className='inputBox'>
                            <label>E-MAIL</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="inputgroup">
                        <div className='inputBox'>
                            <label>PHONE</label>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    
                    <div className="inputgroup">
                      <div className='inputBox'>
                        <label>LOCATION</label>
                        <input type="text" name="" id="" placeholder="CITY" />
                      </div>
                      <div className='inputBox'>
                        <input type="text" name="" id="" placeholder="ST" style={{marginTop: "24px"}} />
                      </div>
                      <div className='inputBox' style={{marginBottom: "20px"}}>
                        <input type="text" name="" id="" placeholder="ZIP" style={{marginTop: "24px"}} />
                      </div>
                    </div>
                    <a className='button' href="preIntvernotice" style={{marginLeft: "10px"}}>Continue</a>
                </form>
                
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
  );
}

export default CandidateForm;