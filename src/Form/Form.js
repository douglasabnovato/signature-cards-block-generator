import React from 'react';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';  

const useStyles = makeStyles(theme => ({
    
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 250,
        },
    },
    title: {
        fontSize: 14,
    },
    cardForm: {
        minWidth: 225,
        maxWidth: 1200,
        margin: '20px 5% 20px 5%',//top right bottom left
    }, 

})); 

export default function Form() {

    const classes = useStyles();

    return (
    
        <Card className={classes.cardForm}>

            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    SIGNATURE INFORMATION
                </Typography>  
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Full Name"  />
                    <TextField id="standard-basic" label="Office" />
                    <TextField id="standard-basic" label="Site"/>
                    <TextField id="standard-basic" label="Telephone" />
                    <TextField id="standard-basic" label="Whatsapp"  /> 
                    <TextField id="standard-basic" label="Instagram"/> 
                    <TextField id="standard-basic" label="Github" />
                    <TextField id="standard-basic" label="Linkedin"/>                                                                                                                  
                    <TextField id="standard-basic" label="Facebook" />                    
                    <TextField id="standard-basic" label="Twitter" />              
                    <TextField id="standard-basic" label="Pinterest" /> 
                </form>
            </CardContent>

        </Card>         
                        
    ); 
}  