import React from 'react';

// Progress shows the current mana held by the player and/ or other goals. Contains button to trigger end-run in some types of Run.

// TODO
// Everything

const Progress = ({ mana }) => {
  return (
    <div>
      {mana} / 1,000,000
    </div>
  )
}

export default Progress;
