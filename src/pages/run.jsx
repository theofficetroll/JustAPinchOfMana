import React from 'react';
import Build from '../components/build.jsx';
import Visuals from '../components/visuals.jsx';
import Research from '../components/research.jsx';
import Orb from '../components/orb.jsx';
import Progress from '../components/progress.jsx';

// TODO
// Add Footer once created.

// This is where runs are played & contains the meat of the game.


const Run = () => {

  return (
    <div>
      <Build />
      <Visuals />
      <Research />
      <Orb />
      <Progress />
    </div>
  )
}

export default Run;
