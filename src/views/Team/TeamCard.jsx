import React, {useState, useEffect} from 'react'

import {Typography, Tag} from 'antd'

import {motion} from 'framer-motion'



import { GithubFilled, LinkedinFilled} from '@ant-design/icons';
import styled from 'styled-components';
import useMedia from '../shared/useMedia'

const {Title, Text} = Typography


const roleColors = {
    "Director" : "#1890ff",
    "Fullstack" : "#1852ff",
    "Design" : "#1b18ff",
    "Outreach": "#1b18ff",
    "Mobile" : "#5918ff",
    "Frontend" : "#9618ff",
    "Backend" : "#d418ff",
    "Project Lead": "#eb2f96",
    "Retired": "#32CD32",
    "Leadership": "#1890ff",
}


const memberVariants = {
    hidden: {
        opacity: 0,
        x: "100px"
    },
    visible:{
        opacity: 1,
        x: "0px",
        transition: {
            type: "spring",
            stiffness: "90"
        }
    }
}



const TeamCard = ({info}) => {

    const smallerLayout = useMedia(['(min-width: 720px)', '(max-width: 720px)'], [false, true])

    return(
        <motion.div variants={memberVariants} style={{display: "flex", flexDirection: "column", alignItems: "center", width: smallerLayout ? '70%': '250px', margin: "25px"}}>

        <div style={{position: "relative"}}>
            <motion.img whileHover={{scale: 1.02, transition: {duration: 0.2}}} style={{width:  smallerLayout ? '100%': '250px', height:  smallerLayout ? '100%': '250px', borderRadius: "8px", boxShadow: " 2px 2px 10px rgb(0,118,220,0.18) "}} src={info.img}/>
        </div>

        <div style={{display: "flex", justifyContent: 'space-between', width: "100%", marginTop: "15px", fontSize: "16px"}}>
            <Text strong>{info.name}</Text>
            <Text strong style={{color: "#333"}}>
                {info.gh && 
                <a  href={info.gh} target="_blank"><GithubFilled className="icon" style={{marginLeft: "7px"}}/></a> 
                }
                {info.li && 
                <a  href={info.li} target="_blank"> <LinkedinFilled  className="icon" style={{marginLeft: "7px"}}/></a>
                }
            </Text>
        </div>
        
        <div style={{display: "flex", justifyContent: 'flex-start', width: "100%", marginTop: "10px", flexWrap: "wrap"}}>
            {info.roles.map(role => {
                return <Tag style={{background: `${roleColors[role]}10`, border: `${roleColors[role]}66 solid 1px`, color: `${roleColors[role]}bb`}}>{role}</Tag>
        })}

        </div>
       

    </motion.div>
    )
}

export default TeamCard