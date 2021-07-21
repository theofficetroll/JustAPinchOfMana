import React from 'react';

// ToolBuild shows data for a specific tool:
// How many there are, how much Mana they produce, and how much to purchase a new one.
// Also allows for purchase of the tool

// TODO
// Show appropriate data
// Add click to purchase
// Visually indicate when Tool is purchaseable

// Build Helper function to find costs, production, etc by name

const ToolBuild = ({ name, total }) => {
  return (
    <div>
      {name} | {total} | {total}/sec | Cost | Purchasable?
    </div>
  )
}

export default ToolBuild;
