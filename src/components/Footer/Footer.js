import React from "react";
import { Link } from "react-router-dom";

import FooterImage from "../../assets/img/Bitmap.png";
import classes from "./Footer.module.css";

const footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterNavbar}>
        <div className={classes.FooterNavbarColumn}>
          <h5>Mobil aloqa</h5>
          <Link to="/">Tariflar</Link>
          <Link to="/">Xizmatlar</Link>
          <Link to="/">Xizmatlar uchun to'lov</Link>
          <Link to="/">Aksiyalar</Link>
        </div>
        <div className={classes.FooterNavbarColumn}>
          <h5>Ilovalar va xizmatlar</h5>
          <Link to="/">Mobilset ilovasi</Link>
          <Link to="/">To'lov tizimi</Link>
          <Link to="/">Aksiyalar</Link>
          <Link to="/">Qanday e'lon berish mumkin</Link>
        </div>
        <div className={classes.FooterNavbarColumn}>
          <h5>Kompaniya</h5>
          <Link to="/">Kompaniya haqida</Link>
          <Link to="/">Do'konlar</Link>
          <Link to="/">Bo'sh ish o'rinlari</Link>
          <Link to="/">Kontaktlar</Link>
        </div>
        <div className={classes.FooterNavbarColumn}>
          <h5>Biz bilan aloqa</h5>
          <p className={classes.PhoneNumber}>(+998 97) 120-00-02</p>
          <p className={classes.Address}>
            100011, Toshkent sh. Shayxontohur tumani, Zarqaynar ko’chasi, 3B-uy
          </p>
        </div>
      </div>
      <div className={classes.FooterBottom}>
        <div className={classes.Language}>
          <select>
            <option value="uz">O'zbek</option>
            <option value="ru">Русская</option>
            <option value="en">English</option>
          </select>
          <div className={classes.SocialMedia}>
            <div className={classes.FooterIcon}>
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M6.54138 9.14321L6.26697 13.0029C6.65957 13.0029 6.82961 12.8342 7.03351 12.6317L8.87418 10.8726L12.6882 13.6657C13.3877 14.0556 13.8805 13.8503 14.0692 13.0222L16.5728 1.29118L16.5735 1.29049C16.7953 0.256456 16.1995 -0.147896 15.518 0.105774L0.802346 5.73975C-0.201967 6.12958 -0.186761 6.68945 0.63162 6.94312L4.39382 8.11333L13.1327 2.64524C13.5439 2.37291 13.9179 2.52359 13.6103 2.79592L6.54138 9.14321Z"
                    fill="#3A4357"
                  />
                </g>
              </svg>
            </div>
            <div className={classes.FooterIcon}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.949 0H4.435C1.9895 0 0 1.9895 0 4.435V11.9491C0 14.3945 1.9895 16.384 4.435 16.384H11.9491C14.3945 16.384 16.384 14.3945 16.384 11.9491V4.435C16.384 1.9895 14.3945 0 11.949 0ZM8.192 12.6719C5.72175 12.6719 3.71213 10.6623 3.71213 8.192C3.71213 5.72175 5.72175 3.71213 8.192 3.71213C10.6623 3.71213 12.6719 5.72175 12.6719 8.192C12.6719 10.6623 10.6623 12.6719 8.192 12.6719ZM11.4552 3.44488C11.4552 4.17488 12.049 4.76863 12.779 4.76863C13.509 4.76863 14.1029 4.17488 14.1029 3.44488C14.1029 2.71487 13.509 2.121 12.779 2.121C12.049 2.121 11.4552 2.71487 11.4552 3.44488Z"
                    fill="#3A4357"
                  />
                  <path
                    d="M8.19198 4.67261C6.25148 4.67261 4.67261 6.25136 4.67261 8.19198C4.67261 10.1325 6.25148 11.7114 8.19198 11.7114C10.1326 11.7114 11.7114 10.1325 11.7114 8.19198C11.7114 6.25136 10.1326 4.67261 8.19198 4.67261Z"
                    fill="#3A4357"
                  />
                  <path
                    d="M12.779 3.08154C12.5788 3.08154 12.4158 3.24454 12.4158 3.44479C12.4158 3.64504 12.5788 3.80804 12.779 3.80804C12.9794 3.80804 13.1424 3.64517 13.1424 3.44479C13.1424 3.24442 12.9794 3.08154 12.779 3.08154Z"
                    fill="#3A4357"
                  />
                </g>
              </svg>
            </div>
            <div className={classes.FooterIcon}>
              <svg
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M10.0178 0.004L7.52478 0C4.72398 0 2.91398 1.857 2.91398 4.7312V6.9126H0.407381C0.190781 6.9126 0.0153809 7.0882 0.0153809 7.3048V10.4654C0.0153809 10.682 0.190981 10.8574 0.407381 10.8574H2.91398V18.8326C2.91398 19.0492 3.08938 19.2246 3.30598 19.2246H6.57638C6.79298 19.2246 6.96838 19.049 6.96838 18.8326V10.8574H9.89918C10.1158 10.8574 10.2912 10.682 10.2912 10.4654L10.2924 7.3048C10.2924 7.2008 10.251 7.1012 10.1776 7.0276C10.1042 6.954 10.0042 6.9126 9.90018 6.9126H6.96838V5.0634C6.96838 4.1746 7.18018 3.7234 8.33798 3.7234L10.0174 3.7228C10.2338 3.7228 10.4092 3.5472 10.4092 3.3308V0.396C10.4092 0.1798 10.234 0.0044 10.0178 0.004Z"
                    fill="#3A4357"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className={classes.GetMobileApp}>
          <h5>Mobil ilovani yuklab olish</h5>
          <img src={FooterImage} alt="Download mobile app" />
        </div>
      </div>
    </footer>
  );
};

export default footer;
