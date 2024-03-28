import { IconButton, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { colors } from "../../contants/colors" 
// import { useNavigation } from "react-router-dom"
import { useState } from "react";

const SearchBar = () => {

  // const navigate = useNavigation('');
  const [value , setvalue] = useState('')

  const hendleSubmit = e => {
    e.preventDefault();
    // navigate(`search/${value}`)
  }

  return (
    <Paper onSubmit={hendleSubmit} component={"form"} sx={{border: `1px solid ${colors.secondary}`}}>
        <input value={value} onChange={e => setvalue(e.target.value)} type="text" placeholder="Search..." className="search-bar" style={{paddingLeft: '15px'}}  />
        <IconButton type="submit">
          <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
