import { useContext } from "react"
import UserContext from "../Context/UserContext"
import axios from "axios";


export default function () {
    const { userData, setUserData, setUserLoggedStatus } = useContext(UserContext);

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
                        <button className="form-container-button" type="submit" onClick={(event) => {
                            const xml = new XMLHttpRequest();
                            xml.open("POST","http://localhost:9000/verifyuser");
                            xml.send(({
                                userName: document.getElementById("username").value,
                                password: document.getElementById("password").value
                            }))
                            event.preventDefault();
                        }}>Login</button>
                    </form>
                </div>
            </div>
        </div>

    </>)
}