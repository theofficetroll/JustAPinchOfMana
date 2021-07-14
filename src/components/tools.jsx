import React from 'react';
import Orb from '../components/orb.jsx';

// Tools holds visual representations of the tools being utilized by the player. Should get busier as more tools are added.

// TODO
// Add additional tools as they're created.

// Tools to create
// Mirror: adds a percentage of orb click value when orb clicked
// Spinner: produces mana every second
// Clock: produces mana every 10 seconds
// Pendulum: produces mana every 30 seconds
// Echo Chamber: produces mana when orb clicked based on the number of times the player has clicked

const Tools = ({ mana, onManaChange, orbCooldown, orbClickValue }) => {
  return (
    <div>
      <Orb mana={mana} onManaChange={onManaChange} orbCooldown={orbCooldown} orbClickValue={orbClickValue} />
    </div>
  )
}

export default Tools;
