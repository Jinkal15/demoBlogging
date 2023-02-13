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
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./card.css"

import product2 from "../../../src/assets/product2.jpg";
import { Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

export default function Card2() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const navigate = useNavigate()

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe">W</Avatar>}
        title="Wrist Watches"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        // height="194"
        height="200"
        image={product2}
        alt="Wrist Watches"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Time is Important so Wear the Wrist Watches
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
          <Typography paragraph>Consept:</Typography>
          <Typography paragraph>
            The concept of the wristwatch goes back to the production of the
            very earliest watches in the 16th century. In 1571 Elizabeth I of
            England received a wristwatch, described as an "armed watch," from
            Robert Dudley. The oldest surviving wristwatch (then described as a
            "bracelet watch") is one made in 1806 and given to Joséphine de
            Beauharnais.[26] From the beginning, wristwatches were almost
            exclusively worn by women - men used pocket watches up until the
            early-20th century.[27] In 1810, the watch-maker Abraham-Louis
            Breguet made a wristwatch for the Queen of Naples.[28] The first
            Swiss wristwatch was made by the Swiss watch-maker Patek Philippe,
            in the year 1868 for Countess Koscowicz of Hungary
          </Typography>
          <Typography paragraph>
            Wristwatches were first worn by military men towards the end of the
            19th century, having increasingly recognized the importance of
            synchronizing maneuvers during war without potentially revealing
            plans to the enemy through signaling. The Garstin Company of London
            patented a "Watch Wristlet" design in 1893, but probably produced
            similar designs from the 1880s. Officers in the British Army began
            using wristwatches during colonial military campaigns in the 1880s,
            such as during the Anglo-Burma War of 1885. During the First
            Boer War of 1880–1881 the importance of coordinating troop movements
            and synchronizing attacks against highly mobile Boer insurgents
            became paramount, and the use of wristwatches subsequently became
            widespread among the officer class. The company Mappin & Webb began
            production of their successful "campaign watch" for soldiers during
            the campaign in the Sudan in 1898 and accelerated production for the
            Second Boer War of 1899–1902 a few years later. In continental
            Europe, Girard-Perregaux and other Swiss watchmakers began supplying
            German naval officers with wristwatches in about 1880. Early
            models were essentially standard pocket-watches fitted to a leather
            strap, but by the early 20th century, manufacturers began producing
            purpose-built wristwatches. The Swiss company Dimier Frères & Cie
            patented a wristwatch design with the now standard wire lugs in
            1903.
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
