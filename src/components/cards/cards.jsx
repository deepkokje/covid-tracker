import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'


export default function Cards( {data:{confirmed,recovered,deaths,lastUpdate}}) {
        if(!confirmed){
            return 'Loading...'
        }
    return (
        <div className ={styles.container}>  
               <Grid container spacing={3} justify="center">
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.infected)}>
                        <CardContent>
                            <Typography color="tesxtSecondary" gutterBottom>Infected</Typography>
                            <Typography variant='h5'>
                                    <CountUp
                                       start={0}
                                       end={recovered.value}
                                       duration={2.5}
                                       separator=","
                                    /></Typography>
                            <Typography color="tesxtSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                        </CardContent>
                    </Grid>


                    <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                        <CardContent>
                            <Typography color="tesxtSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant='h5'>
                                    <CountUp
                                       start={0}
                                       end={deaths.value}
                                       duration={2.5}
                                       separator=","
                                    /></Typography>
                            <Typography color="tesxtSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>Number of recoveries from COVID-19 </Typography>
                        </CardContent>

                </Grid>

                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                        <CardContent>
                            <Typography color="tesxtSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant='h5'>
                                    <CountUp
                                       start={0}
                                       end={confirmed.value}
                                       duration={2.5}
                                       separator=","
                                    /></Typography>
                             <Typography color="tesxtSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>Number of deaths from COVID-19</Typography>
                        </CardContent>

                </Grid>

                </Grid> 
        </div>
    )
}
