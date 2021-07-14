import React from 'react';
import Orb from '../components/orb.jsx';

// Tools holds visual representations of the tools being utilized by the player. Should get busier as more tools are added.

// TODO
// Everything

const Tools = ({ mana, onManaChange }) => {
  return (
    <div>
      <Orb mana={mana} onManaChange={onManaChange} />
    </div>
  )
}

export default Tools;
