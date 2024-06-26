import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ApiService } from "../../service/api.service";
import { Box, Container, Typography } from "@mui/material";
import Video from "../Video/Video";
import { colors } from "../../contants/colors";


const Search = () => {

  const {id} = useParams();
  const [videos , setVideos] = useState([])
  

  useEffect( () => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  } , [id])

  return (
    <Box p={2} >
    <Container maxWidth={'90%'}>
        <Typography variant={'h3'} fontWeight={'bold'} mb={2}>
          Search results for <span style={{color: colors.secondary}}>{id}</span> videos
        </Typography>
        <Video videos={videos} />
    </Container>
</Box>
  )
}

export default Search
