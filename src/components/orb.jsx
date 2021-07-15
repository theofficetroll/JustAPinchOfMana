import React, { useEffect, useState } from 'react';

// Orb can be clicked by the player to provide mana. Visually "fills" as the player gets closer to goal in Runs where that matters.

// TODO
// Add visual indicator that orb not ready

const Orb = ({ mana, onManaChange, orbClickValue, orbCooldown}) => {

  const [ orbInterval, setOrbInterval ] = useState(5000); // change value to orbCooldown
  const [ orbReady, setOrbReady ] = useState(true);


  useEffect(() => {
    setInterval(() => {
      setOrbReady(oldValue => {
        if (oldValue = false) {
          return true;
        };
      })
    }, orbInterval);
  }, []);

  const onClick = () => {
    if(orbReady) {
      onManaChange(mana + orbClickValue);
      setOrbReady(false);
    } else {
      console.log('orb not ready');
    }
  }

  return (
    <div>
      <button className='orb' onClick={onClick} />
    </div>
  )
}

export default Orb;
