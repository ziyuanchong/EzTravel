import "./Register.css";

function Register() {
    return (
        <div className="register">
            <div className="header">
                <h1>EzTravel</h1>
            </div>
            <div className="container">
                <form action=""> {/*form is used to collect user response*/}
                    <h1>Travel With Us!</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required />
                    </div>
                    <div className="loginbutton">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;