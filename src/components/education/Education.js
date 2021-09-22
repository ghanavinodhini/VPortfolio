import React from 'react';
import {Element} from 'react-scroll';
import Timeline from './timeline/Timeline';

 function education() {
    return (
        <Element className="education" id="education">
            <div>
                <Timeline />
            </div>

        </Element>
    )
}

export default education;