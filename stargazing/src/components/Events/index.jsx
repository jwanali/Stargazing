import React from "react";
import { Select, Space, Layout, Menu } from "antd";
import "./Events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Weather_api from "../../hook/weather_api";
import Weather from "../Weather";
import { useState } from "react";


export default function Events(props) {
  const { Content, Sider } = Layout;
  

  return (
    <div
      style={{ visibility: props.status ? "visible" : "hidden" }}
      className="box"
    >
      <h1 className="event-header">Here is what you can see on date in city</h1>
      <div className="events-menu">
        <Layout style={{ height: "400px", margin: "40px" }}>
          <Sider width={200}>
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={["1"]}
              style={{
                height: "100%",
              }}
              items={[
                {
                  key: 1,
                  icon: (
                    <FontAwesomeIcon
                      icon={icon({ name: "moon", style: "solid" })}
                    />
                  ),
                  label: "Moon",
                },
                {
                  key: 2,
                  icon: (
                    <FontAwesomeIcon
                      icon={icon({ name: "sun", style: "solid" })}
                    />
                  ),
                  label: "Sun",
                },
                {
                  key: 3,
                  icon: (
                    <FontAwesomeIcon
                      icon={icon({
                        name: "circle-half-stroke",
                        style: "solid",
                      })}
                    />
                  ),
                  label: "Eclipses",
                },
                {
                  key: 4,
                  icon: (
                    <FontAwesomeIcon
                      icon={icon({ name: "earth-europe", style: "solid" })}
                    />
                  ),
                  label: "Planets",
                },
                {
                  key: 5,
                  icon: (
                    <FontAwesomeIcon
                      icon={icon({ name: "star", style: "solid" })}
                    />
                  ),
                  label: "Stars",
                },
                {
                  key: 6,
                  icon: (
                    <FontAwesomeIcon
                      icon={icon({ name: "satellite", style: "solid" })}
                    />
                  ),
                  label: "Satellites",
                },
              ]}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </div>
      <div className="weather-container">

      </div>
    </div>
  );
}
