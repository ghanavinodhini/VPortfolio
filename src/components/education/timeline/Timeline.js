import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElements from './TimelineElements';
import '../../experiences/timeline/Timeline.css';
import SchoolIcon from "../../../images/school_icon.png";


const Timeline = () => {
    let schoolIconStyles = { background: "#f9c74f" }
    return (
        <div>
            <h1 className="title">EDUCATION</h1>
            <VerticalTimeline>
            {TimelineElements.map(element => {
                let isSchoolIcon = element.icon === "school"
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={schoolIconStyles}
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