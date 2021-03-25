import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Particles from "react-particles-js";
import Msg from "./Msg";
import Slider from "./Slider";
import Flowchart from "./Flowchart";
import "./Styleproject.css";

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

export default function GraphicDesignPage() {
  const classes = useStyles();

  return (
    <div style={{ overflow: "hidden" }}>
      <div className={classes.root}>
        <Paper className={classes.paper} square>
          <Grid container>
            <Grid item xs={12}>
              <Particles
                height="50vh"
                style={{ backgroundColor: "#1c2135" }}
                params={{
                  particles: {
                    number: {
                      value: 80,
                    },
                    size: {
                      value: 4,
                    },
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse",
                      },
                      onclick: {
                        enable: true,
                        mode: "push",
                      },
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="container_graphics">
                <h1 className="graphics_design_heading">
                  Graphic <br /> Designing.
                </h1>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} style={{ color: "#d4ffe4" }}>
              <div className="container_graphicstext">
                <p>
                  Graphic design is a craft where professionals create visual
                  content to communicate messages. At Abhedya, by applying
                  visual hierarchy and page layout techniques, designers use
                  typography and pictures to meet users’ specific needs and
                  focus on the logic of displaying elements in interactive
                  designs, to optimize the user experience.
                </p>

                <p className="howdoeswe">
                  View Our Work
                  <br />
                  <u>View How Does We Work</u>
                </p>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Flowchart />
        {/* <Slider /> */}
        <div className="showparticles">
          <Particles
            height="25vw"
            className="particlescss"
            params={{
              particles: {
                number: {
                  value: 80,
                },
                size: {
                  value: 4,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                },
              },
            }}
          />
        </div>
        <div className="hideparticles">
          <Particles
            height="30vw"
            className="particlescss"
            params={{
              particles: {
                number: {
                  value: 25,
                },
                size: {
                  value: 4,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                },
              },
            }}
          />
        </div>
        <Msg />
      </div>
    </div>
  );
}
