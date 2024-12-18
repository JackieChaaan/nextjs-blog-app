import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="logo">
                    <figure>
                        <img src="/assets/Copyright Info.png" alt="logo" />
                    </figure>
                </div>

                <div className="terms-policy">
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
