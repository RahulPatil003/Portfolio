import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Rahul</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="fooeter__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="fooeter__link">Projects</a>
                </li>
            
            </ul>
            <div className="footer__social">
            <a href="" className="footer__social-link" target='_blank'>
                <i className="bx bx-envelope"></i>
                </a>
                <a href="" className="footer__social-link" target='_blank'>
                <i className="bx bxl-linkedin"></i>

                </a>
                <a href="" className="footer__social-link" target='_blank'>
                <i className="bx bxl-instagram"></i>

                </a>
            </div>
            <span className="footer__copy">
                &#169; Rahul Patil. All rights reserved.
            </span>
        </div>

    </footer>
  )
}

export default Footer
