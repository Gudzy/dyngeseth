import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Link } from "react-router-dom";


import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx";

class SectionCompletedExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Hi, there!</h2>
              <h4>
              I am Gustav Dyngeseth, and I'm an engineer. I can help you or your organization improve productivity through my workshops, consulting, or digitalized solutions. I'm passionate about communication and your success is my business.
              </h4>
              <Link to="/about" className={classes.dropdownLink}>
              <Button 
                color="primary"
                size="lg"
                target="_blank">More about me</Button>
                </Link>
            </GridItem>
            
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(SectionCompletedExamples);
