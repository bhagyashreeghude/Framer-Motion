import React from 'react'
import {motion} from 'motion/react'

const App =() =>{
  return (
    <div>
      <motion.div 
      animate ={{
        x:750,
        y:200,
        rotate:270
      }}
      transition={{
        duration:4,
        delay:2
      }}
      className="circle">

      </motion.div>
      <motion.div 
      className="box"
      animate={{
        x:500,
        rotate:360

      }}
      transition={{
        duration:4,
        delay:2
      }}
      >

      </motion.div>
    </div>
    

  )
}
export default App