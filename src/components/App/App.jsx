import { Stack } from "@mui/material"
import Navbar from "../Navbar/Navbar"
import { Routes , Route } from "react-router-dom"
import { Main , Channel , VideoDetail , Search } from "../index"

const App = () => {
  return (
    <Stack>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel" element={<Channel/>} />
        <Route path="/videodetail/:id" element={<VideoDetail/> }/>
        <Route path="/search/:id" element={<Search />}/>
      </Routes>
    </Stack>
  )
}

export default App
