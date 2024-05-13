import React from 'react'

import {useParams} from 'react-router-dom'

import {Button, Typography} from 'antd'

import {motion} from 'framer-motion'

import { GithubFilled } from '@ant-design/icons';

import useMedia from '../shared/useMedia'
import club from "../../assets/clubs.png"
import scheduleImg from "../../assets/schedule.png"
import courseImg from "../../assets/courses.png"

const {Title, Text} = Typography

// mobile iphone x ratio
// desktop 16:9


const schedule = {
    photo : scheduleImg,
    isMobile: true,
    siteLink: "https://hseschedule.com",
    githubLink: "https://github.com/HSE-Apps/schedule-client",
    desc: 'View the live schedule updated for any occassion.'

}

const clubs = {
    photo: club,
    isMobile: false,
    siteLink: "https://hseclubs.com",
    githubLink: "https://github.com/HSE-Apps/club-client",
    desc: 'Manage, browse, and join clubs in one central place.'


}

const tutoring = {
    photo: "https://cdn.discordapp.com/attachments/626507510085320725/773435608541560832/Screen_Shot_2020-11-04_at_1.36.53_AM.png",
    isMobile: false,
    githubLink: "https://github.com/HSE-Apps/tutoring-client",
    desc: 'Give and receive real time tutoring anytime, anywhere.',
    siteLink: 'https://hsetutoring.com',
    isDemo: true
}

const courses = {
    photo: courseImg,
    isMobile: false,
    githubLink: "https://github.com/ArnavMeh/hsecourses-front",
    desc: 'View course options and plan out your academic career.',
    siteLink: 'https://hsecourses.netlify.app',
    isDemo: true
}



const data = {
    clubs,
    tutoring,
    schedule,
    courses
}



const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

const Display = () => {

    const params = useParams()

    const product = params.product
    const resource = params.resource

    let item = data[product || resource]

    const smallerLayout = useMedia(['(min-width: 1200px)', '(max-width: 1200px)'], [false, true])

    const breakPoint = useMedia(['(min-width: 900px)', '(max-width: 900px)'], [false, true])

    return(
        <div style={{width: '100%', display: 'flex', marginTop: "100px", flexWrap: 'wrap'}}>

            <div style={{width: breakPoint ? '100%':'50%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <div style={{textAlign:'center',display: 'flex', width: breakPoint ? '100%' : '', flexGrow: 0, marginRight: smallerLayout ? breakPoint ? '0px':'60px' : '100px', flexDirection: 'column',alignItems: breakPoint ? 'center' : 'flex-end'}}>
                    <Title level={smallerLayout ? 2 : 1} style={{marginBottom: '10px'}}>HSE {capitalize(product || resource)}</Title>
                    <Title level={4} style={{fontSize: smallerLayout ? '16px' : '20px',fontWeight: '300', margin: '0px', color: '#555'}}>{item.desc}</Title>
                    <div style={{marginTop: '25px'}}>
                    {item.siteLink &&
                    <a target="_blank" href={item.siteLink}><Button style={{ marginRight: '10px', boxShadow: " 0px 0px 20px rgb(0,118,220,0.30)"}}  type="primary">{item.isDemo ? "Demo" : "Live"} Site</Button></a>

                    }
                    <a target="_blank" href={item.githubLink}><Button shape="circle" type="ghost" style={{ boxShadow: " 0px 0px 10px rgb(0,118,220,0.30)"}} icon={<GithubFilled style={{color: '#1890ff'}}/>}></Button></a>
                    </div>
                </div>
            </div>

            <div style={{width: breakPoint ? '100%' :'50%', marginTop: breakPoint ? '50px' : ''}}>
                {item.isMobile ?
                  <motion.div style={{display: 'flex', justifyContent: breakPoint ? 'center' : 'flex-start', alignItems: 'flex-start'}} initial={{x: '50%'}} animate={{x: 0, transition: {duration: 0.9, type: 'spring', stiffness: '70'}}}  whileHover={{x: 10}}>
                  <img style={{width: breakPoint ? '' : '60%',maxWidth: breakPoint ? '':'450px', maxHeight: breakPoint ? '550px' : '' ,padding: '5px',borderRadius: '25px',border: "8px solid rgb(0,118,220,0.04)",  boxShadow: " 2px 2px 15px rgb(0,118,220,0.30)"}} src={item.photo} ></img>

              </motion.div>
                :
                <motion.div style={{display: 'flex', justifyContent: breakPoint ? 'center' : 'flex-start', alignItems: 'flex-start'}} initial={{x: '30%'}} animate={{x: 0, transition: {duration: 0.5, type: 'spring', stiffness: '90'}}}  whileHover={{x: -10}}>
                    <img style={{width: breakPoint ? '90%' :'150%',maxWidth: '1400px', padding: '5px',borderRadius: '25px',border: "8px solid rgb(0,118,220,0.04)",  boxShadow: " 2px 2px 15px rgb(0,118,220,0.30)"}} src={item.photo} ></img>

                </motion.div>
                }



            </div>
          

        </div>
       
    )


}

export default Display