/* eslint-disable react/prop-types */
import { Stack , Box } from '@mui/material'
import { VideoCard } from "../index"


const Video = ({videos}) => {
  // console.log(videos);
  return (
    <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} gap={'15px'} justifyContent={'center'}>
        {
          videos && videos.length > 0 && videos.map(item => (
            <Box key={item.id.videoId}>
                {item.id.videoId && <VideoCard videos={item}/>}
            </Box>
          ))
        }
    </Stack>
  )
}

export default Video
