import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElements from './TimelineElements';
import '../../experiences/timeline/Timeline.css';

const Timeline = () => {
    let schoolIconStyles = { background: "#f9c74f" }
    return (
        <div>
            <h2 className="title">EDUCATION</h2>
            <VerticalTimeline>
            {TimelineElements.map(element => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={schoolIconStyles}
              icon = {<img src={element.icon} alt="" />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
               <h5 className="vertical-timeline-element-company">
                {element.school}
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