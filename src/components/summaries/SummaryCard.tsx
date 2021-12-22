import React from "react";
import {styled} from "@mui/system";
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import {Desiredposition, WorkCity, Workexperience} from "../../dal/api";
import CardMenu from "../CardMenu";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton";

const StyledCard = styled(Card, {
    name: "StyledCard",
    slot: "Wrapper"
})({
    color: "#6B8068",
    background: '#FFFFFF',
    border: '1px solid #EAEAEA',
    boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
    margin: 0,
    marginBottom: 45,
    borderRadius: 5,
    width: "100%",
    position: 'relative',
    display: "flex",
    justifyContent: "space-between"
});

const StyledCardActions = styled(CardActions, {
    name: "StyledCardActions",
    slot: "Link"
})({
    margin: 0,
    textDecoration: 'none',
    color: "#363636",
});

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  max-width: 442px;
  width: 100%;
  align-content: flex-start;

  .candidateMain {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    width: 100%;
  }

  .candidateCity {
    color: #000046;
    font-weight: 400;
    font-size: 14px;
    text-align: right;
    margin: 0;

  }

  .candidateName {
    color: #000046;
    font-weight: 400;
    font-size: 16px;
    text-align: left;
    margin: 0;
  }

  .candidateProfession {
    color: #000046;
    font-weight: 500;
    font-size: 24px;
    text-align: left;
    margin: 0;
  }
.previousWork {
  color: #555556;
  font-size: 14px;
  font-weight: 400;
}
  .updated {
    color: #ADADAD;
    font-weight: 400;
    font-size: 12px;
    margin: 0;
  }
  .candidateStatus {
    display: flex;
    justify-content: space-between;
    align-items: center;    
  }
  
  .online {
    color: #4CAF50;
    font-size: 12px;
  }
  .offline {
    color: red;
    font-size: 12px;
  }
  
  
  

`


type SummaryCardType = {
    id: string
    vacancy: string
    firstName: string
    workCity: Array<WorkCity>
    birthday: Date | null
    previousWork: Array<Workexperience>
    updated: Date
    online: boolean
}

const StyledHeartButton = styled(IconButton)({
    color: '#851FFF',
});

const SummaryCard = (props: SummaryCardType) => {
    const getAge = (dateString: Date) => {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return ", " + age;
    }


    const differenceInMime = (date1: any, date2: any) => {
        const _MS_PER_DAY = Math.ceil(1000 * 60 * 60 * 24 * 30);
        const date1Converted = new Date(date1)
        const date2Converted = new Date(date2)
        const utc1 = Date.UTC(date1Converted.getFullYear(), date1Converted.getMonth(), date1Converted.getDate());
        const utc2 = Date.UTC(date2Converted.getFullYear(), date2Converted.getMonth(), date2Converted.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }

    return (
        <StyledCard key={props.id}>
            <StyledCardContent>
                <Typography className={"candidateProfession"}>
                    {props.vacancy}
                </Typography>
                <Typography className={"candidateMain"} component="div">
                    <div
                        className={"candidateName"}>{props.firstName}{props.birthday && getAge(props.birthday) + " лет"}</div>
                    <div className={"candidateCity"}>{props.workCity[0].display_name}</div>
                </Typography>


                {props.previousWork.map(work => {
                    return <Typography className={"previousWork"}
                                       key={work.id}>{work.position} {work.company_name} - {differenceInMime(work.date_from, work.date_to)} мес</Typography>
                })}
                <Typography component="div" className={"candidateStatus"}>
                    <div className={"updated"}>Обновлено {props.updated}</div>
                    <div>{props.online && props.online ? <div className={"online"}>Онлайн</div> : <div className={"offline"}>Офлайн</div>}</div>
                </Typography>
            </StyledCardContent>
            <StyledCardActions>
                <StyledHeartButton aria-label="favorite"><FavoriteBorderIcon/></StyledHeartButton>
                <CardMenu/>
            </StyledCardActions>
        </StyledCard>
    )

}

export default SummaryCard
