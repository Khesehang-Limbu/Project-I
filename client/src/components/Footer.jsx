import React from "react";

function Footer(){
    return (
        <footer className="footer">
            <img src={require("../Assets/footer/copyright.png")} className="footer-img" alt="copyright"/>
            <span className="footer-content">{new Date().getFullYear()}</span>
            <span className="footer-content"> Khesehang Yonghang, Krishna Dev Sah</span>
        </footer>
    )
}

export default Footer;