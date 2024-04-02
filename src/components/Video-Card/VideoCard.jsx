import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../../contants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const videosCard = ({ videos }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '300px', md: '360px' } }}>
      <Link to={`/videodetail/${videos.id.videoId}`}>
        <CardMedia
          image={videos?.snippet?.thumbnails?.high?.url}
          alt={videos?.snippet?.title}
          sx={{ width: "100%", height: "180px" }}
        />
      </Link>


      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(videos?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {videos?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".6" }}>
            {videos?.snippet?.description.slice(0, 70)}
          </Typography>
        </>
        <>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={videos?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={"gray"}>
              {videos?.snippet?.channelTitle}
            </Typography>
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Stack>
        </>
      </CardContent>
    </Card>
  );
};

export default videosCard;