import React, { useState } from 'react';
import Build from '../components/build.jsx';
import Tools from '../components/tools.jsx';
import Research from '../components/research.jsx';
import Progress from '../components/progress.jsx';

// TODO
// Add Footer once created.

// This is where runs are played & contains the meat of the game.


const Run = () => {

  const [ mana, setMana ] = useState(0);

  return (
    <div>
      <Build />
      <Research />
      <Tools mana={mana} onManaChange={setMana} />
      <Progress mana={mana} />
    </div>
  )
}

export default Run;
