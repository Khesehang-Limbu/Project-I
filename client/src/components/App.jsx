import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login/Login";

function App(){
    return (
        <div>
            <Header />
            <Login type="Student Login" />
            <Footer />
        </div>
    );
}

export default App;