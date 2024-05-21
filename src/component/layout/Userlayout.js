import React from "react";

import { Button, Dropdown, Slider } from "antd";
import { Layout, theme, ConfigProvider } from "antd";
import "../../App.css";
import "../../index.css";
import {
  DoubleLeftOutlined,
  DownOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../image/Lastloogo.png";
import Carousal from "../dashboard/Carousel";
import Bridalservices from "../user/Bridalservices";
import { Makeupservices } from "../utiles/Package";
import MakeUpServices from "../user/MakeUpServices";
import Front from "../user/Front";

const { Header, Content, Footer } = Layout;

const iteminfo = [
  {
    name: "MAKEUP CLASSES",
    link: "/makeupclass",
  },
  {
    name: "MAKEUP SERVICES",
    link: "/makeupservices",
  },
  {
    name: "BRIDAL PACKAGES",
    link: "/bridalpackages",
  },

  {
    name: "ABOUT US",
    link: "/aboutus",
  },
  {
    name: "BOOK AN APPOINTMENT",
    link: "/bookanappointment",
  },
];

const UserLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  //  const slides = [
  //   "./image/pic3.png",
  //     "./image/pic5.png",
  //      "./image/pic9.png",
  //      "./image/pic6.png",
  //      "./image/pic8.png",
  //      "./image/pic7.png",
  //      "./image/pic1.png",
  //  ]
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            footerBg: "#31363F",
          },
        },
      }}
    >
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            position: "fixed",
            width: "100%",
            padding: "0 24px",
            backgroundColor: "white",
          }}
        >
          <div className="flex ">
            <div className="flex items-center">
              <img
                src={logo}
                alt="logo"
                style={{ width: "200px", height: "auto" }}
              />
            </div>
          </div>

          <div
            className=" space between words  gap-20 flex mx-auto"
            style={{
              display: "flex",
              alignContent: "center",
              // position: "absolute",
              // right: "40 px",
              justifyContent: "flex-end",
              float: "right",
            }}
          >
            {iteminfo?.map((item, idx) => (
              <NavLink key={idx} to={item?.link}>
                {item?.name}
              </NavLink>
            ))}
          </div>

          <ConfigProvider>
            <div className="demo">
              <div
                style={{
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              ></div>
            </div>
          </ConfigProvider>
        </Header>

        <Content style={{ padding: "0 48px" }}>
          {/* <Carousal/> */}

          <div className="carousel-container">
            <Bridalservices />
          </div>

          <Outlet />
        </Content>
        <Footer className="bg-black text-white">
          <div className="section_padding flex flex-wrap justify-between">
            <div className="sb__footer-links_div">
              <a href="/about">
                <h2 className="text-lg font-bold">About</h2>
              </a>
            </div>
            <div className="sb__footer-links_divv">
              <a href="/contact">
                <h2 className="text-lg font-bold">Contact</h2>
                <p>9807949561</p>
                <p>zayakhdaka34@gmail.com</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4 className="text-lg font-bold">Coming soon on</h4>
              <div className="socialmedia flex">
                <p className="mr-4">
                  <InstagramOutlined />
                </p>
                <p>
                  <FacebookOutlined />
                </p>
              </div>
            </div>
            <div className="sb__footer-below"></div>
            <div className="sb__footer-copyright mt-4">
              <iframe
                className="w-full h-40"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9380741879118!2d85.34673877525314!3d27.688308776193487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195d85b2bf47%3A0xf46c2b9632029b4b!2sCamad%20College!5e0!3m2!1sen!2snp!4v1714795351068!5m2!1sen!2snp"
              ></iframe>
              <p className="mt-4">
                @{new Date().getFullYear()} Brush&Blush. All right reserved.
              </p>
              <div className="sb__footer-below-links">
                <a href="/terms">
                  <div>
                    <p className="text-sm">Terms & Conditions</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default UserLayout;
