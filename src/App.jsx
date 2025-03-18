import React from 'react'
import {motion} from 'motion/react'

const App =() =>{
  return (
   <div>
    <motion.div className='box'
    animate={{
      x:[0,1000,1000,0,0],
      y:[0,0,600,600,0],
      rotate:[0,360,0,-360,0 ]
    }}
    transition={{
      duration:4,
      delay:2
    }}>

    </motion.div>
    <motion.img className='img'
    animate={{
      x:1000,
      y:200,
      rotate:360
    }}
    transition={{
      duration:2,
      delay:1
    }}
    alt='img'
    src='https://wallpapers.com/images/featured/tom-and-jerry-png-0ujipwkzhzws7c4j.png'>

    </motion.img>
   </div>
    

  )
}
export default App