/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const ChannelCard = ({channelId}) => {
    console.log(channelId);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <CardMedia
          // eslint-disable-next-line react/prop-types
          image={channelId?.snippet?.thumbnails?.high?.url}
          // eslint-disable-next-line react/prop-types
          alt={channelId?.snippet?.title}
          sx={{
            borderRadius: "100px",
            width: "180px",
            height: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant={"h6"}>
          {channelId?.snippet?.title}
          <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
        </Typography>
      </CardContent>
    </Box>
  )
}

export default ChannelCard