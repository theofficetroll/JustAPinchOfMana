import React, { useEffect, useState } from 'react';

// Orb can be clicked by the player to provide mana. Visually "fills" as the player gets closer to goal in Runs where that matters.

// TODO
// Add visual indicator that orb not ready

//  Fix cooldown on button, it disables but won't re-enable.

const Orb = ({ mana, onManaChange, orbClickValue, orbCooldown}) => {

  const [ cooldown, setCooldown ] = useState(1000); // change value to orbCooldown
  const [ ready, setReady ] = useState(true);
  const [ timeLeft, setTimeLeft ] = useState(0);


  const setTimer = () => {
    useEffect(() => {
      setTimeout(() => {
        setReady(oldValue => {
          if (oldValue = false) {
            return true;
          };
        })
      }, cooldown);
    }, []);
  }

  const onClick = () => {
    if(ready) {
      onManaChange(mana + orbClickValue);
      setReady(false);
      setTimer();
    } else {
      console.log('orb not ready', timeLeft);
    }
  }

  return (
    <div>
      <button className='orb' onClick={onClick} />
    </div>
  )
}

export default Orb;
