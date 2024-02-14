import { FaPen } from "react-icons/fa";
import { FaCut } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { BiSolidGame } from "react-icons/bi";
import { FaCode } from "react-icons/fa6";
import { GoCodescan } from "react-icons/go";
import { FaTrophy } from "react-icons/fa";
import { GiOpenTreasureChest } from "react-icons/gi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const schedules = [
    {
      date: "9:30AM - 10:30AM",
      icon: <FaPen color="#fff" />,
      title: "Registration",
      subTitle: "Online and Spot",
      text: "Secure your spot and unlock endless possibilities by registering for our captivating IT fest today.",
    },
    {
      date: "10:30AM - 11:30AM",
      icon: <FaCut color="#fff" />,
      title: "Inaugration",
      subTitle: "Overview of event",
      text: "Join us as we kick off our IT fest with an inspiring inauguration ceremony.",
    },
    {
      date: "11:30AM - 12:30AM",
      icon: <MdQuiz color="#fff" />,
      title: "ITRIX",
      subTitle: "IT Quiz",
      text: "Test your knowledge and compete in our thrilling IT quiz competition.",
    },
    {
      date: "11:30AM - 1:00PM",
      icon: <BiSolidGame color="#fff" />,
      title: "Gaming",
      subTitle: "e-Football 2024",
      text: "Step into the virtual arena and compete in the adrenaline-fueled eFootball 2024 tournament.",
    },
    {
      date: "2:00PM - 3:00PM",
      icon: <FaCode color="#fff" />,
      title: "Code Racer",
      subTitle: "Coding",
      text: "Unleash your coding prowess and conquer challenges in our coding competition.",
    },
    {
      date: "3:00PM - 4:00PM",
      icon: <GoCodescan color="#fff" />,
      title: "Bug Hunt",
      subTitle: "Debugging",
      text: "Sharpen your debugging skills and tackle complex problems head-on.",
    },
    {
      date: "2:00PM - 4:00PM",
      icon: <GiOpenTreasureChest color="#fff" />,
      title: "Hazine Hunt",
      subTitle: "Treasure Hunt",
      text: "Embark on an exhilarating adventure and uncover hidden treasures in our thrilling treasure hunt",
    },
    {
      date: "4:00PM - 5:00PM",
      icon: <FaTrophy color="#fff" />,
      title: "Closing ceremony",
      subTitle: "Prize Distribution",
      text: "Celebrate the culmination of our IT fest with an unforgettable closing ceremony filled with joy and camaraderie.",
    },
  ];

  return (
    <div className="mt-10">
      <VerticalTimeline lineColor="linear-gradient(180deg, #bb29ff 0%, #4299E1 100%)">
        {schedules.map(({ date, icon, title, subTitle, text }, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#242424",
              color: "#fff",
              boxShadow: "none",
            }}
            date={date}
            iconStyle={{ background: "#6864ed ", boxShadow: "none" }}
            icon={icon}
          >
            <h3 className="text-xl vertical-timeline-element-title uppercase">
              {title}
            </h3>
            <h4 className="text-sm vertical-timeline-element-subtitle">
              {subTitle}
            </h4>
            <p>{text}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
