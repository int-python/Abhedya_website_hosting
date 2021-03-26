import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Particles from "react-particles-js";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#1c2135",
  },
  h2: {
    backgroundColor: "#dff9fb",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}>
            {/* <Particles
              height="350px"
              style={{ backgroundColor: "#1c2135" }}
              params={{
                "particles": {
                    "number": {
                        "value": 80
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                        
                    }
                }
            }}
              
              
            /> */}
            <div className="Policy__top">
                <Particles 
                    className="Policy__partical"
                    height="350px" 
                    params={{
                        "particles": {
                            "number": {
                                "value": 80
                            },
                            "size": {
                                "value": 4
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }

                            }
                        }
                    }}
                />
                <div className="Policy__topHead">
                    <p className="Policy__topHeading">Abhedya's Blogs</p>    
                    {/* <p className="PolicyPage__topDetail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p> */}
                </div>
            </div>
          </Grid>       
        </Grid>
      </Paper>
    </div>
  );
}
