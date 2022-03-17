import { withNProgress } from "@tanem/react-nprogress";
import PropTypes from "prop-types";
import React from "react";
import Bar from "./Bar";
import Container from "./Container";
import "./index.css";
import Spinner from "./Spinner";

// this is data passed to the component to create a loading bar

const Progress = ({ isFinished = null, progress = null, animationDuration = null }) => (
  <Container isFinished={isFinished} animationDuration={animationDuration}>
    <Bar progress={progress} animationDuration={animationDuration} />
    <Spinner />
  </Container>
);

Progress.propTypes = {
  animationDuration: PropTypes.number.isRequired,
  isFinished: PropTypes.bool,
  progress: PropTypes.number,
};

export default withNProgress(Progress);
