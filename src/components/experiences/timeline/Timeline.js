import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElements from './TimelineElements';
import './Timeline.css';

const Timeline = () => {
    let workIconStyles = { background: "#06D6A0" }
    return (
        <div>
            <h2 className="title">EXPERIENCES</h2>
            <VerticalTimeline>
            {TimelineElements.map(element => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={workIconStyles}
              icon={<img src={element.icon} alt="" />}
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
