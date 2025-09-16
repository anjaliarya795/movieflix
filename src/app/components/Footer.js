import React from 'react';
import footerStyles from '@/app/styles/footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.content}>
                <div className={footerStyles.top}>
                    <div className={footerStyles['logo-details']}>
                        <span className={footerStyles.logo_name}>MovieFlix</span>
                    </div>
                    <div className={footerStyles['media-icons']}>
                        <Link href="#"><FaFacebookF /></Link>
                        <Link href="#"><FaTwitter /></Link>
                        <Link href="#"><FaInstagram /></Link>
                        <Link href="#"><FaLinkedinIn /></Link>
                        <Link href="#"><FaYoutube /></Link>
                    </div>
                </div>

                <div className={footerStyles['link-boxes']}>
                    <ul className={footerStyles.box}>
                        <li className={footerStyles.link_name}>Links</li>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/movies">Movies</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>

                    <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                        <li className={footerStyles.link_name}>Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>

            <div className={footerStyles['bottom-details']}>
                <div className={footerStyles.bottom_text}>
                    
                    <span className={footerStyles.policy_terms}>
                        <Link href="/">Privacy policy</Link>
                        <Link href="/">Terms & condition</Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
