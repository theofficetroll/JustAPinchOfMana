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
  const [ orbClickValue, setOrbClickValue ] = useState(1);
  const [ orbCooldown, setOrbCooldown ] = useState(5);

  return (
    <div>
      <Build />
      <Research mana={mana} setOrbClickValue={setOrbClickValue} setOrbCooldown={setOrbCooldown} />
      <Tools mana={mana} onManaChange={setMana} orbClickValue={orbClickValue} orbCooldown={orbCooldown} />
      <Progress mana={mana} />
    </div>
  )
}

export default Run;
