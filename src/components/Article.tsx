import React from "react";
import {styled} from "@mui/system";
import {Link as RouterLink} from 'react-router-dom';
import {Card, CardActions, CardContent, CardMedia, Link, Typography} from "@mui/material";


const StyledCard = styled(Card, {
    name: "StyledCard",
    slot: "Wrapper"
})({
    color: "#6B8068",
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
    marginBottom: 45,
    borderRadius: 5,
    maxWidth: 400,
    width: "100%",
    height: 304,
    position: 'relative',
});


type ArticleType = {
    id: number,
    title: string,
    imageUrl: string,
    date: string
}



const Article = (props: ArticleType) => {

    return (
        <StyledCard key={props.id}>
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
                <Typography variant="body2" color="text.secondary">
                    {props.date}
                </Typography>
            </CardContent>
        </StyledCard>

    )

}

export default Article
