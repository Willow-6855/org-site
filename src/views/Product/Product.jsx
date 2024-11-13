import React, {useState} from 'react'

import {Typography, Tag, Radio} from 'antd'

import {motion} from 'framer-motion'

import useMedia from '../shared/useMedia'


import ethan from '../../assets/people/ethan.png'
import { LinkOutlined} from '@ant-design/icons';

import ProductCard from './ProductCard'

const {Title, Text} = Typography




const bigContainerVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
        transition: {
            staggerChildren: "0.15"
        }
    }
}





const Product = () => {


    React.useEffect(() => {
        document.title = "HSE Apps | Products"
    })

    const [view, setView] = useState("role")

    const smallerLayout = useMedia(['(min-width: 1300px)', '(max-width: 1300px)'], [false, true])

    const mobile = useMedia(['(min-width: 500px)', '(max-width: 500px)'], [false, true])

    const smallMobile = useMedia(['(min-width: 350px)', '(max-width: 350px)'], [false, true])


    return(
        <div style={{marginTop: "100px", marginBottom: '50px', width: "100%", background: "#fefefe", position: 'static', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7}} style={{position: 'static', textAlign: 'center', marginBottom: '10px', zIndex:6}}>
                <Title level={1} style={{color: "#333", marginBottom: "10px"}}>Products</Title>
                <Text>Click on a product to see more</Text>
            </motion.div>
            <motion.div  
                style={{marginTop: "10px", width: "100%", display: 'flex', background: "#fafdff", display: "flex", alignItems: "center", flexDirection: "column", position: "static" }}
            >
                <svg style={{marginTop: "20px",filter: "drop-shadow(0px -5px 5px rgb(0,118,220,0.20)", transform: "scaleY(0.5)", position: "absolute", zIndex: "1", top: smallerLayout ? (mobile ?  smallMobile ? 'calc(100% * .50)' : 'calc(100% * .35)' : 'calc(100% * .20)') : "calc(100% * .18)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fafdff" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,170.7C384,139,480,85,576,96C672,107,768,181,864,186.7C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <motion.div 
                    key={2}
                    variants={bigContainerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{width: smallerLayout ?  "90%" : '80%', zIndex: "3", marginTop: smallerLayout ?  mobile ?'calc(100% * .3)': 'calc(100% * .19)' : 'calc(100% * .14)', maxWidth: '1400px'}}
                >   
                
                    <div style={{display: 'flex', flexWrap: "wrap", justifyContent: smallerLayout ? 'center ':'space-between'}}>
                        {/* Release Products */}
                        <ProductCard status="Released" title="Clubs" description="Manage, browse, and join clubs in one central place."/>
                        <ProductCard status="Released" title="Schedule" description="View the live bell schedule updated for any occassion."/>
                        <ProductCard status="Released" title="Courses" description="View course options and plan out your academic career. "/>
                        {/* Demo Projects */}
                        <ProductCard status="Demoing"title="Tutoring" description="Give and receive real time tutoring anytime, anywhere."/>
                        {/* W.I.P Projects */}
                        <ProductCard status="Building" last={true} title="Pass" description="Receive hall passages and messages from the office."/>
                        <ProductCard status="Building" last={true} title="Maps" description="Find your way around the building by entering your current room number and destination room number "/>
                        {/* Planning */}
                        <ProductCard status="Planning" last={true} title="Sports" description="Get real time scores and notifications for HSE Sports."/>
                        <ProductCard status="Planning" last={true} title="Busing" description="Track and communicate with your bus driver on their route."/>

                    </div>
                    
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Product
