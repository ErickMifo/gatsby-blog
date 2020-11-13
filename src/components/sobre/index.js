import React, {useEffect} from "react"
import './styles.css'
import { useAnimation, motion } from 'framer-motion';
import  { useInView } from 'react-intersection-observer'

const texto = "Blog feito para aprender Gatsby e escrever um pouco sobre a minha experiência pessoal em aprender programação durante a pandemia do Covid, tentando, por meio da escrita, concretizar alguns dos meus pensamentos e questionar se o que faço está fazendo sentido. "

function Sobre() {
  const animation = useAnimation()

  const [aboutRef, aboutView] = useInView({

    triggerOnce: true,


  })


  useEffect(() => {
    if(aboutView){
      animation.start('aboutVisible')
    }
  }, [animation, aboutView])


  return (
  <div 
  className="sobre">
  <motion.div 
   ref={aboutRef}
   animate={animation}
   initial='hidden'
   variants={{
     aboutVisible:{
       opacity: 1,
       x: 0,
       transition: {duration: 1}
     },
     hidden: {
       opacity: 0,
       x: 100
     }
   }} 
  className="sobretext">
    <h1>Sobre: </h1>
    <p> {texto} </p>
  </motion.div>
  </div>)
}


export default Sobre