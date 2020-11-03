import React from 'react'

import {Button, Typography} from 'antd'

import squiggle from '../../assets/fancy-squiggle.svg'

import heroImage from '../../assets/site-bg.png'

import {Link} from 'react-router-dom'

import {motion} from 'framer-motion'

import useMedia from '../shared/useMedia'

const {Title, Text} = Typography

const Landing = () => {

    const mobile = useMedia(['(min-width: 800px)', '(max-width: 800px)'], [false, true])


    return(
        <div style={{height: "calc(100vh - 60px)", marginBottom: '60px', width: "100%", background: "#fefefe", position: 'static', display: 'flex', alignItems: 'center' }}>
                       
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
                <div style={{width: mobile ? '100% ':"45%", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                        <Title level={2} style={{fontSize: '28px', marginBottom: '5px'}}>Student Built.</Title>
                        <Text>Building custom software solutions to connect HSE.</Text>
                        <br/>
                        <Link to="/products"><Button type="primary" style={{marginTop: '20px'}}>View Products</Button></Link>
                    </div>

                </div>

                <div style={{width: mobile ? '100%' :"45%",  height: '100%', display: 'flex',marginTop: mobile ? '50px' : '',justifyContent: mobile ? 'flex-end' : ''}}>
                    <motion.img initial={{x: '30%'}} animate={{x: 0, transition: {duration: .8, type: 'spring', delay: 0.05}}} src={heroImage} style={{filter: 'hue-rotate(-10deg)',maxWidth: '900px', width: mobile ? '100%':'160%', position: 'relative', left: mobile ? '10%': '-20%'}}></motion.img>

                </div>
            </div>
           
        </div>
    )
}

export default Landing