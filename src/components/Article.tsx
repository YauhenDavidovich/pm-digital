import React from "react";
import styled from "styled-components";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";


type ArticleType = {
    id: string,
    title: string,
    imageUrl: string,
    date: string
    children?: React.ReactNode
}

const StyledCard = styled(Card)<ArticleType>`
  color: #222222;
  background: #FFFFFF;
  border: 1px solid #EAEAEA;
  margin-bottom: 45px;
  padding: 5px;
  border-radius: 5px;
  max-width: 397px;
  width: 100%;
  height: 304px;
  position: relative;  
  @media (max-width:600px) {
    max-width: 334px;
    height: 304px;
  }
`

const Article = (props: ArticleType) => {

    return (
        <StyledCard key={props.id} {...props}>
            <CardMedia
                component="img"
                height="201"
                image={props.imageUrl}
                alt="article image"
            />
            <CardContent
            >
                <Typography gutterBottom variant="subtitle1" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.date}
                </Typography>
            </CardContent>
        </StyledCard>

    )

}

export default Article
