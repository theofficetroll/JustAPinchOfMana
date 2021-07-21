import React from 'react';
import ToolBuild from './toolBuild.jsx';

// Build shows current tool data and allows player to purchase tools.

// TODO
// Generate List of Tools available to purchase
// Visually indicate when Tool is purchaseable
// Create ToolBuild component

const Build = () => {

  // Test Values, will need to generate actual list
  let toolName = "spinner"; // produces 1 mana per second
  let toolTotal = 1;

  return (
    <div>
      <ToolBuild name = {toolName} total = {toolTotal} />
    </div>
  )
}

export default Build;
