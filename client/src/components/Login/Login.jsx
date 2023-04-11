import React, {useState} from "react";
import Heading from "./Heading";
import axios from "axios";

function Login() {
    const [user, setUser] = useState({
        email: "",
        passwd: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        if (name === "email"){
            setUser(preValue => {
                return {
                    ...preValue,
                    email: value,
                }
            })
        }
        if (name === "passwd"){
            setUser(preValue => {
                return {
                    ...preValue,
                    passwd: value,
                }
            })
        }
    }

    function handleSubmit(event){
        event.preventDefault();

        const credentials = {
            email: event.target.email.value,
            passwd: event.target.passwd.value
        };
        setUser(credentials);

        axios.post("http://localhost:3030/api/login", user, {headers: {
            'Content-Type': 'application/json'
            }}).then(res=>{
            console.log(res.status);
            console.log(res.data);
        });
    }

    return (
        <form method="POST" action="/login" className="form-body" onSubmit={handleSubmit}>
            <Heading type="Student Login" />
            <input className="form-field first-field" type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
            <input className="form-field last-field" type="password" placeholder="Password" name="passwd" value={user.passwd} onChange={handleChange}/>
            <div className="remember-me">
                <label htmlFor="remember">
                    <input type="checkbox" id="remember" />Remember Me 
                </label>
            </div>
            <button className="btn-primary" type="submit" name="submit">Login</button>
        </form>
    )
}

export default Login;