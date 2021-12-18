import React from "react";
import {styled} from "@mui/system";
import {Link as RouterLink} from 'react-router-dom';
import {Button, Card, CardActions, CardContent, CardMedia, Link, Typography} from "@mui/material";
import {Article} from "@mui/icons-material";


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
    height: 530,
    position: 'relative',
});

const StyledCardActions = styled(CardActions, {
    name: "StyledCardActions",
    slot: "Link"
})({
    position: 'absolute',
    bottom: 8,
    left: 8,
    textDecoration: 'none',
    color: "#363636",
    fontSize: 16,
    marginTop: 8
});


type VacancieCardType = {
    id: number,
    title: string,
}



const VacanciesCard = (props: VacancieCardType) => {

    return (
        <StyledCard key={props.id}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    title
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            <StyledCardActions>
                <Link component={RouterLink} to={"/article/"+props.id} color="black" underline="none">
                    {'Read more→ '}
                </Link>
            </StyledCardActions>
        </StyledCard>

    )

}

export default VacanciesCard
