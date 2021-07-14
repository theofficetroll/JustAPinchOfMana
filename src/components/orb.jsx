import React from 'react';

// Orb can be clicked by the player to provide mana. Visually "fills" as the player gets closer to goal in Runs where that matters.

// TODO
// Make orb look pretty
// Add countdown timer to be able to click orb again
//

const Orb = ({ mana, onManaChange, orbClickValue, orbCooldown}) => {
  return (
    <div className='orb'>
      <button onClick={() => onManaChange(mana + orbClickValue)} />
    </div>
  )
}

export default Orb;
