import React from 'react';
import Orb from '../components/orb.jsx';

// Tools holds visual representations of the tools being utilized by the player. Should get busier as more tools are added.

// TODO
// Add additional tools as they're created.

const Tools = ({ mana, onManaChange, orbCooldown, orbClickValue }) => {
  return (
    <div>
      <Orb mana={mana} onManaChange={onManaChange} orbCooldown={orbCooldown} orbClickValue={orbClickValue} />
    </div>
  )
}

export default Tools;
