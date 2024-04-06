import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./footer.module.css";
import { SlArrowUpCircle } from "react-icons/sl";

import { FcPhone } from "react-icons/fc";
import { IoMail } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { CiFacebook } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../images/brandlogo.png";
export default function Footer() {
  return (
    <footer className={`container-fulid ${styles.footer}`}>
      <div className={styles.totalfooter}>
        <div>
          <div>
            <img src={logo} alt="Brand logo" className={styles.logo} /> Reviews
          </div>
          <div className={`container ${styles.container}`}>
            <p>&copy; 17Reviews All rights are reserved</p>
          </div>

          <div className={`${styles.us}`}>
            <div className={`${styles.contactus}`}>
              <h5>Contact Us</h5>
              <p>
                <FcPhone /> +91 7672004522
              </p>
              <p>
                <IoMail /> abdabd1703@gmail.com
              </p>
            </div>
            <div className={`${styles.followus}`}>
              <h5>Follow Us</h5>
              <div>
                <a href="#" className={styles.socialtext}>
                  <CiFacebook /> Facebook
                </a>
              </div>
              <div>
                <a href="#" className={styles.socialtext}>
                  <SiInstagram /> Instagram
                </a>
              </div>

              <div>
                <a href="#" className={styles.socialtext}>
                  <IoLogoYoutube /> Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.uparrow}>
          <a href="#" className={styles.arrow}>
            Goto Up <SlArrowUpCircle />
          </a>
        </div>
      </div>
    </footer>
  );
}
