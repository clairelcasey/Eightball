import { useState } from "react";

/** ColorCounter
 * 
 * Props:
 *  currCountsForColors: array of objects with color keys and count (int) as values like 
 *    [{ color: "green", count: 0 }...]
 * 
 * State:
 *  None
 * 
 * App -> EightBall -> ColorCounter
 */

 function ColorCounter({ currCountsForColors }) {
   return (
     <div>
       { currCountsForColors.map( obj => <p>{obj.color}: {obj.count} </p> )}
     </div>
   )
 }

 export default ColorCounter;