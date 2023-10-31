/* eslint-disable react/no-unknown-property */
import React, { Component } from "react";
import Grid from "@mui/material/Grid";

function Projects() {
  return (
    <div id="projects" className="secondary-theme">
      <h4 className="header_text primary-theme-text">Projects</h4>

      <p className="flow-text body_text">
        My Github page highlights a few projects that I have worked on, but if
        you are looking for something specific or would like to learn more about
        my work, feel free to contact me through LinkedIn.
      </p>

      <Grid container spacing={0}>
        <Grid item xs={6}>
          <a href="https://github.com/sagars729" align="left">
            <p className="flow-text body_text tertiary-theme-text">
              View My Github Profile
            </p>
          </a>
        </Grid>
        <Grid item xs={6}>
          <a
            href="https://www.linkedin.com/in/sagar-saxena-714804159/"
            align="right"
          >
            <p className="flow-text body_text tertiary-theme-text">
              Contact Me On LinkedIn
            </p>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
