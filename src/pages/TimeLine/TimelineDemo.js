import React, { useRef } from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./TimelineDemo.css";

const TimelineDemo = () => {
    const events1 = [
        {
            status: "Queensland University of Technology",
            date: "2018-2021",
            icon: "pi pi-shopping-cart",
            color: "#9C27B0",
            subtitle: "Bachelor of Information Technology ( Computer Science )",
            description: "",
        },

        {
            status: "Leap In! Internship",
            date: "2020-2021",
            icon: "pi pi-cog",
            color: "#673AB7",
            subtitle: "Front-end Developer",
            description: "Tech Stack: React / React Native / Node.js / AWS",
        },
        {
            status: "Uhak Station",
            date: "2021-2022",
            icon: "pi pi-shopping-cart",
            color: "#FF9800",
            subtitle: "Full-stack Developer",
            description: "Tech Stack: React / React Native / Node.js / AWS",
        },
        {
            status: "Delivered",
            date: "16/10/2020 10:00",
            icon: "pi pi-check",
            color: "#607D8B",
        },
    ];

    const customizedMarker = (item) => {
        return (
            <span
                className='custom-marker shadow-1'
                style={{ backgroundColor: item.color }}
            >
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                <h5>{item.subtitle}</h5>
                <br />
                <p>{item.description}</p>
            </Card>
        );
    };

    return (
        <div className='timeline-demo'>
            <div className='card'>
                <Timeline
                    value={events1}
                    align='alternate'
                    className='customized-timeline'
                    marker={customizedMarker}
                    content={customizedContent}
                />
            </div>
        </div>
    );
};
export default TimelineDemo;
