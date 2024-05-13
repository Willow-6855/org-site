import React, {useState} from 'react'

import {Typography, Tag, Radio} from 'antd'

import {motion} from 'framer-motion'

import useMedia from '../shared/useMedia'


import ethan from '../../assets/people/ethan.png'
import { LinkOutlined} from '@ant-design/icons';

import ResourceCard from './ResourceCard'

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





const Resource = () => {

    React.useEffect(() => {
        document.title = "HSE Apps | Resources"
    })


    const [view, setView] = useState("role")


    const smallerLayout = useMedia(['(min-width: 1300px)', '(max-width: 1300px)'], [false, true])

    const mobile = useMedia(['(min-width: 500px)', '(max-width: 500px)'], [false, true])

    const smallMobile = useMedia(['(min-width: 350px)', '(max-width: 350px)'], [false, true])


    return(
        <div style={{marginTop: "100px", marginBottom: '50px', width: "100%", background: "#fefefe", position: 'static', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.7}} style={{position: 'static', textAlign: 'center', marginBottom: '10px', zIndex:6}}>
                <Title level={1} style={{color: "#333", marginBottom: "10px"}}>Resources</Title>
                <Text>See the tools we use to facilitate creation</Text>
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
                       
                     
                        <ResourceCard link="https://github.com/HSE-Apps/hse-key" status="Released" title="Key" description="The auth and utility API powering our creations."/>
                        <ResourceCard  status="Released" title="Boiler" description="React boiler plate that integrates Microsoft Active Directory, allowing for rapid development."/>
                        <ResourceCard status="Building" title="Lib" description="A client library for Key."/>

                    </div>
                    
                </motion.div>
            </motion.div>
        </div>
    )

    
    
}

export default Resource