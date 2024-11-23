import { useContext } from "react"
import UserContext from "../Context/UserContext"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function () {
    const { userData, setUserData, setUserLoggedStatus } = useContext(UserContext);
    const navigate = useNavigate();

    function oprateLoginClick() {

    }
    return (<>
        {/* <!DOCTYPE html> */}


        <div className="form-container-body">
            <div className="form-container-container">
                <div className="form-container-card">
                    <h2 className="form-container-h2">Login</h2>
                    <form className="form-container-form">
                        <input className="form-container-input" type="text" id="username" name="username" placeholder="Username" required />
                        <input className="form-container-input" type="password" id="password" name="password" placeholder="Password" required />
                        <label id="errLable" style={{fontFamily: "-moz-initial", WebkitTextFillColor: "red", textAlign: "center"}}></label>
                        <button className="form-container-button" type="submit" onClick={async (event) => {
                            event.preventDefault();
                            const username = document.getElementById("username").value;
                            const password = document.getElementById("password").value;

                            axios.post("http://localhost:9000/verifyuser",{
                                username,
                                password
                            }).then((val)=>{
                                if(!val.data.success){
                                    document.getElementById("errLable").innerText = "Wrong Credentials"
                                }
                                else{
                                    setUserData(val.data.userData);
                                    navigate("/")
                                }
                                
                            }).catch(err=>{
                                alert(JSON.stringify(err));
                            })

                        }}>Login</button>
                    </form>
                </div>
            </div>
        </div>

    </>)
}