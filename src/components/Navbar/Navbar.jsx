import { Box, Stack } from "@mui/material"
import { Link } from "react-router-dom"
import {youtube_icon} from "../../contants/index"
import { colors } from "../../contants/colors"
import {SearchBar} from "../index"

const Navbar = () => {
  return (
    <Stack direction={"row"} sx={{background: colors.primary}} alignItems={"center"} justifyContent={"space-between"} p={2}>
      <Link to={'/'}>
        <img src={youtube_icon} alt="Logo" width={"150px"} />
      </Link>
      <SearchBar />
      <Box/>
    </Stack>
  )
}

export default Navbar
