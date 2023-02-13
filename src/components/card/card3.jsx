import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../header/header";
import product3 from "../../../src/assets/product3.jpg";
import { Toolbar } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import "./card.css"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Card3() {
  const [expanded, setExpanded] = React.useState(false);
const navigate = useNavigate()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Header />
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="recipe">W</Avatar>}
         
          title="WaterBottle"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="200"
          image={product3}
          alt="Paella dish"
        />
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Drinking water stay healthy
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          
          <Toolbar className="back_btn" onClick={()=>{
          navigate("/")
        }}>Back</Toolbar>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Application:</Typography>
            <Typography paragraph>
              Headphones may be used with stationary CD and DVD players, home
              theater, personal computers, or portable devices (e.g., digital
              audio player/MP3 player, mobile phone), as long as these devices
              are equipped with a headphone jack. Cordless headphones are not
              connected to their source by a cable. Instead, they receive a
              radio or infrared signal encoded using a radio or infrared
              transmission link, such as FM, Bluetooth or Wi-Fi. These are
              battery-powered receiver systems, of which the headphone is only a
              component. Cordless headphones are used with events such as a
              Silent disco or Silent Gig. Sennheiser HD 555 headphones, used in
              audio production environments (2007)
            </Typography>
            <Typography paragraph>
              In the professional audio sector, headphones are used in live
              situations by disc jockeys with a DJ mixer, and sound engineers
              for monitoring signal sources. In radio studios, DJs use a pair of
              headphones when talking to the microphone while the speakers are
              turned off to eliminate acoustic feedback while monitoring their
              own voice. In studio recordings, musicians and singers use
              headphones to play or sing along to a backing track or band. In
              military applications, audio signals of many varieties are
              monitored using headphones. Wired headphones are attached to an
              audio source by a cable. The most common connectors are 6.35 mm
              (1⁄4 inch) and 3.5 mm phone connectors. The larger 6.35 mm
              connector is more common on fixed location home or professional
              equipment. The 3.5 mm connector remains the most widely used
              connector for portable application today. Adapters are available
              for converting between 6.35 mm and 3.5 mm devices. Headphone cord
              with integrated potentiometer for volume control As active
              component, wireless headphones tend to be costlier due to the
              necessity for internal hardware such as a battery, a charging
              controller, a speaker driver, and a wireless transceiver, whereas
              wired headphones are a passive component, outsourcing speaker
              driving to the audio source. Some headphone cords are equipped
              with a serial potentiometer for volume control. Wired headphones
              may be equipped with a non-detachable cable or a detachable
              auxiliary male-to-male plug, as well as some with two ports to
              allow connecting another wired headphone in a parallel circuit,
              which splits the audio signal to share with another participant,
              but can also be used to hear audio from two inputs simultaneously.
              An external audio splitter can retrofit this ability.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
