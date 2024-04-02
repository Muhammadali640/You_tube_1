/* eslint-disable react/prop-types */
import { Stack , Box } from '@mui/material'
import { VideoCard ,ChannelCard, Loader } from "../index"


const Video = ({videos}) => {
  if(!videos) return <Loader/>
  // console.log(videos);
  return (
    <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} gap={'15px'} justifyContent={'center'}>
        {
          videos && videos.length > 0 && videos.map(item => (
            <Box key={item.id.videoId}>
                {item.id.videoId && <VideoCard videos={item}/>}
                {item.id.channelId && <ChannelCard channelId={item}/>}
            </Box>
          ))
        }
    </Stack>
  )
}

export default Video
