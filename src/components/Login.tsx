import "./Login.css";

function Login() {
    return (
        <div className="login">
            <div className="header">
                <h1>EzTravel</h1>
            </div>
            <div className="subheader">
                <h2>Travel Simply</h2>
            </div>
            <div className="container">
                <form action=""> {/*form is used to collect user response*/}
                    <h1>Welcome Back!</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="loginbutton">
                        <button type="submit">Login</button>
                    </div>
                    <div className="register">
                        <p>No Account? Register <a href="#">Now!</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;