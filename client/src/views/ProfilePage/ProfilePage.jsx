import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/GD_PB.png";

import android from "assets/img/examples/android-studio-logo.png";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import python from "assets/img/examples/python-logo.png";
import javascript from "assets/img/examples/javascript_logo.png";
import azure from "assets/img/examples/azure-logo.png";
import sql from "assets/img/examples/sql-logo.png";
import java from "assets/img/examples/java-logo.png";
import firebase from "assets/img/examples/firebase-logo.png";
import react from "assets/img/examples/react-logo.png";
import aws from "assets/img/examples/aws-logo.png";
import ai from "assets/img/examples/ai.png";
import google from "assets/img/examples/googleplay-log.png";
import reactnative from "assets/img/examples/reactnative-logo.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Gustav Dyngeseth"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/aiblue.jpg")} >
        <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Gustav Dyngeseth.</h1>
                  <h3 className={classes.subtitle}>
                    Consultant & Software Developer
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>

        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Gustav Dyngeseth</h3>
                      <h6>Consultant & Software Developer</h6>
                      <Button justIcon link href="https://www.linkedin.com/in/gustavdyngeseth/"className={classes.margin5}>
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button justIcon link href="https://www.instagram.com/gustavd/" className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link href="https://www.facebook.com/GDyngeseth" className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button justIcon link href="https://github.com/Gudzy" className={classes.margin5}>
                        <i className={"fab fa-github"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p> 
                  I am a Computer Science student at NTNU Gløshaugen in Trondheim, specialized within Software Development. In addition, I manage a consultancy named Spire Consulting as Partner & Chief Technology Officer. 
                  We deliver both strategic and technical solutions to small- and medium-sized businesses accross Scandinavia. We are located in Trondheim, Norway. 
                  Feel free to connect with me
                  on <a href="https://www.linkedin.com/in/gustavdyngeseth/">LinkedIn.</a> {" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={15} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Learning",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={android}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={aws}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={ai}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={google}
                                className={navImageClasses}
                              />
                              
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Knowledge",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={python}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={javascript}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={azure}
                                className={navImageClasses}
                              />
                             
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              
                              <img
                                alt="..."
                                src={sql}
                                className={navImageClasses}
                              />
                                <img
                                alt="..."
                                src={firebase}
                                className={navImageClasses}
                              />
                             
                              <img
                                alt="..."
                                src={java}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={react}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorites",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={firebase}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={javascript}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={react}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={python}
                                className={navImageClasses}
                              />
                               <img
                                alt="..."
                                src={reactnative}
                                className={navImageClasses}
                              />
                              
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
