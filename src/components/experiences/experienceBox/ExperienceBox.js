import React from 'react';
import { Grid,Typography } from '@material-ui/core';
import Timeline from '../timeline/Timeline';


const ExperienceBox = () => {
    return (
        <div >
           <Grid container="section">
            <Grid item xs={12}>
                <Grid container>
                    {/* Work Experiences */}
                    <Grid item xs={12} md={6}></Grid>
                    <Timeline />
                    {/* Education History */}
                    <Grid item xs={12} md={6}></Grid>
                </Grid>
            </Grid>
           </Grid>
        </div>
    )
}

export default ExperienceBox
