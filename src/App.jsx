import React from 'react'
import {motion} from 'motion/react'

const App =() =>{
  return (
   <div>
    <motion.div className='box'
    animate={{
      x:[0,1000,1000,0,0],
      y:[0,0,600,600,0]
    }}
    transition={{
      duration:4,
      delay:2
    }}>

    </motion.div>
   </div>
    

  )
}
export default App