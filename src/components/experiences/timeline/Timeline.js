import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElements from './TimelineElements';
import './Timeline.css';
import WorkIcon from "../../../images/work_icon.png";
import SchoolIcon from "../../../images/school_icon.png";


const Timeline = () => {
    let workIconStyles = { background: "#06D6A0" }
    let schoolIconStyles = { background: "#f9c74f" }
    return (
        <div>
            <h1 className="title">EXPERIENCES</h1>
            <VerticalTimeline>
            {TimelineElements.map(element => {
                let isWorkIcon = element.icon === "work"
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              //icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-company">
                {element.company}
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                {element.location}
              </h6>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          )
        })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline
