import React from 'react';
import {Paper, Button} from '@mui/material'
import Article from "./Article";
import Laptop from "../assets/images/Laptop.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1260 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1260, min: 840 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 840, min: 0 },
        items: 1
    }
};

const CarouselContainer = (props: any) => {
    const items = [
        {
            name: "Advice To Job Seekers",
            date: "18.04.2021",
            img: Laptop
        },
        {
            name: "Advice To Job Seekers",
            date: "18.05.2021",
            img: Laptop
        },
        {
            name: "Advice To Job Seekers",
            date: "18.06.2021",
            img: Laptop
        },
        {
            name: "Advice To Job Seekers",
            date: "18.07.2021",
            img: Laptop
        },
    ]

    return (
    <Carousel showDots dotListClass="custom-dot-list-style" responsive={responsive}>
        {
            items.map((item, i) => <Article
                    key={i}
                    id={i+"id"}
                    title={item.name}
                    date={item.date}
                    imageUrl={item.img}
                />
            )
        }

    </Carousel>
    )
}


export default CarouselContainer
