import React, { useState } from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


export default function WaterChart() {
//    const [value, setValue] = useState(0) 
    
//  const numCup = () => {
//     let cup = 0;
//  }
    

    return (
<CircularProgress value={75} color='rgb(100, 153, 233)'>
  <CircularProgressLabel className="donut-chart">
    </CircularProgressLabel>
</CircularProgress>
    )
};