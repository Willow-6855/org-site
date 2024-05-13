import React from 'react'

import {motion} from 'framer-motion'

import {Typography, Tag} from 'antd'

import useMedia from '../shared/useMedia'

import {Link} from 'react-router-dom'

import logo from '../../assets/logo.png'

const {Title, Text} = Typography

const productVariants = {
    hidden:{
        opacity: 0
    },
    visible:{
        opacity: 1,
    }
}

const CustomTag = ({children, color}) => {

    return(
        <Tag style={{background: `${color}10`, border: `${color}66 solid 1px`, color: `${color}bb`, marginBottom: "5px"}}>{children}</Tag>
    )
}

const ProductCard = ({img, title, description, last, status, link}) => {

    const smallerLayout = useMedia(['(min-width: 1300px)', '(max-width: 1300px)'], [false, true])


    const statusColor = {
        "Released" : "#1890ff",
        "Demoing" : "#1b18ff",
        "Building" : "#9618ff",
        "Planning": "#eb2f96"
    }

    const links = {
        Key: "https://github.com/HSE-Apps/hse-key",
        Boiler: "https://github.com/HSE-Apps/Active-Directory-Boiler"
    }

    return(
    <a href={links[title]} target="_blank"  style={{margin: '0px', width: smallerLayout ? "95%": "45%",maxWidth: smallerLayout ? '700px' : ''}}>
     <motion.div whileHover={{x: 10}} variants={productVariants}  style={{boxShadow: " 2px 2px 15px rgb(0,118,220,0.18) ", width: '100%', height: "120px", borderRadius: "10px", cursor: 'pointer', display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0px", padding: "24px"}}>
            <div>
                <div style={{display: 'flex', alignItems:'center', width: "60%"}}>
                    <Title level={3} style={{color: "#333", marginBottom: "8px", marginRight: '10px'}}>{title}</Title> 
                    <CustomTag color={statusColor[status]}>{status}</CustomTag>
                </div>
               
                <Text style={{color: "#555", textAlign: 'justify'}}>{description}</Text>
            </div>
            <div>
                <img src={logo} style={{height: "30%", maxHeight: '75px', marginleft: '10px'}}/>
            </div>
        </motion.div>
    </a>
       
    )
}

export default ProductCard