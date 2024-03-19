import * as React from "react"

import {
  Avatar,
  Box, Icon, IconButton, Tooltip, Typography
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuthStore, useLayoutStore } from "gstore/store";
// import { Business, List, Person } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

interface IGCRMHeaderProps { }

const GCRMHeader: React.FunctionComponent<IGCRMHeaderProps> = () => {

  return (
    <>
    
    <Box>
      <Box>
        <HomeIcon />

      </Box>

      <Box>
        <IconButton>
          <HomeIcon></HomeIcon>
        </IconButton>
      </Box>

      <Box>
        <Avatar>
          <PersonIcon />
        </Avatar>
        <Typography>Sinan Taylan</Typography>
      </Box>


      {/* <Tooltip title="Account settings">
        <IconButton
          // onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
        >
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip> */}
    </Box>
    </>
  )
}

export default GCRMHeader