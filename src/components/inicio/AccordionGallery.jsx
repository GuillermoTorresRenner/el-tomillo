import React from 'react'
import Image from 'next/image'
import classes from './accordionGallery.module.css'

const AccordionGallery = ({image1, image2, image3, title1, title2, title3}) => {
    return(
        <div className={classes.accordion}>

            <div className={classes.tab}>
                <Image src={image1} alt="" fill className={classes.image}/>
                <p className='font-merryweather px-8'>
                    <span className={classes.cardTitle}>{title1}</span>
                </p>
            </div>

            <div className={classes.tab}>
                <Image src={image2} alt="" fill className={classes.image}/>
                <p className='font-merryweather px-8'>
                    <span className={classes.cardTitle}>{title2}</span>
                </p>
            </div>

            <div className={classes.tab}>
                <Image src={image3} alt="" fill className={classes.image}/>
                <p className='font-merryweather px-8'>
                    <span className={classes.cardTitle}>{title3}</span>
                </p>
            </div>

        </div>    
    )
}

export default AccordionGallery