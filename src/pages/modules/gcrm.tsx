import * as React from "react"

import {
  Box, Button, Card, CardActions, CardContent, Grid, Typography
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import {useAuthStore} from "gstore/store";

interface IGCRMProps { }

const GCRM: React.FunctionComponent<IGCRMProps> = () => {
  const navigate = useNavigate();
  const { currentUser, authToken } = useAuthStore();


  return (
    <Box>
      GCrm Module Microfrontend has been loaded...
      <h2>Login Details:</h2>
      <p>Name: {currentUser?.name}</p>
      <p>Role: {currentUser?.role}</p>
      <p>Email: {currentUser?.email}</p>
      <p>Company: {currentUser?.company}</p>
      <p>Token: {authToken}</p>
      {/* Auth TOken: {authTOken} */}
      {/* <button onClick={increment}>Add Count</button> */}
    </Box>
  )
}

export default GCRM
