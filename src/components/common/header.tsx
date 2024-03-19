import * as React from "react"

import {
  Avatar,
  Box, IconButton, Tooltip, Typography
} from "@mui/material"
import { useNavigate } from "react-router-dom"

interface IHeaderProps { }

const Header: React.FunctionComponent<IHeaderProps> = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/gcloud/olcer/login');
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Typography sx={{ minWidth: 100 }}>Contact</Typography>
      <Typography sx={{ minWidth: 100 }}>Profile</Typography>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default Header