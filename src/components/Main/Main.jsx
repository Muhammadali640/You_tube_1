import { Typography ,Stack, Box, Container } from "@mui/material";
import { Category , Video } from "../index";
import { colors } from "../../contants/colors";
import { useEffect, useState } from "react";
import { ApiService } from "../../service/api.service"

const Main = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos , setVideos] = useState();

useEffect(() => {
  try {
    const getApi = async () => {
      const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data.items);
    }
    getApi()
  } catch (error) {
    console.log(error);
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
} , [selectedCategory]);




  return (
    <Stack>
    <Category
      setSelectedCategory={setSelectedCategory}
      selectedCategory={selectedCategory}
    />

    <Box>
      <Container maxWidth={"90%"}>
        <Typography variant="h4" fontWeight={"bold"}>
          {selectedCategory} <span style={{ color: colors.secondary }}>Videos</span>
        </Typography>
        <Video  videos={videos}/>
      </Container>
    </Box>
  </Stack>
  )
}

export default Main
