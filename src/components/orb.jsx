import React from 'react';

// Orb can be clicked by the player to provide mana. Visually "fills" as the player gets closer to goal in Runs where that matters.

// TODO
// Everything

const Orb = ({ mana, onManaChange }) => {
  return (
    <div>
      <button onClick={() => onManaChange(mana + 1)} />
    </div>
  )
}

export default Orb;
