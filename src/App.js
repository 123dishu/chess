import React from 'react'

const App = () => {
  return (
    <div>

{
function chessKnight(cell) {
  let possibleCoordinates = [];
  let xCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let cellX = xCoordinates.indexOf(cell[0]) + 1; 
  let cellY = parseInt(cell[1]);
   
  let cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })
   
  let cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })
    
    for (let i = 0; i < cellXpositions.length; i++) {
        for (let j = 0; j < cellYpositions.length; j++) {
            if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j]) === 3) {
                console.log('This is a valid coordinate: ', [cellXpositions[i], cellYpositions[j]]);
                if (!possibleCoordinates.includes([cellXpositions[i], cellYpositions[j]])) {
                    possibleCoordinates.push([cellXpositions[i], cellYpositions[j]]);
                } 
            }
        }
    }
    console.log('Possible Coordinates:', possibleCoordinates);
    console.log ('Possible Moves:', possibleCoordinates.length);
    return possibleCoordinates.length;
}




}


    </div>
  )
}

export default App