import React from 'react'; 


import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card'; 
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';  
import Button from '@material-ui/core/Button';  

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
            width: 300,
        },
    },
    title: {
        fontSize: 14,
    }, 
    cardTutorials: {
        minWidth: 225,
        maxWidth: 900,
        margin: '20px 5% 30px 10%', //top right bottom left 
    },       
}));

export default function Tutorials() {

    const classes = useStyles(); 

    return (
        <Card className={classes.cardTutorials}> 

            <CardContent>   

                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    SIGNATURE TUTORIALS
                </Typography>          
                <CardActions>
                    <Button variant="contained" color="secondary">
                        <Link to="/tutorialoutlook">Outlook</Link>
                    </Button>
                    <Button variant="contained" color="secondary">
                        <Link to="/tutorialgmail">Gmail</Link>
                    </Button> 
                </CardActions>

            </CardContent>

        </Card>
    );
}
