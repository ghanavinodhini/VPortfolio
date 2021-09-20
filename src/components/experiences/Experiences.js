import React from 'react';
import {Element} from 'react-scroll';
import ExperienceBox from './experienceBox/ExperienceBox';
import Timeline from './timeline/Timeline';

 function experiences() {
    return (
        <Element className="experiences" id="experiences">
            <div>
                <Timeline />
            </div>

        </Element>
    )
}

export default experiences;
