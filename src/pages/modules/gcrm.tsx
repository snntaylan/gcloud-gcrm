import * as React from "react"

import {
  Avatar,
  Box, IconButton, Typography
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useAuthStore, useLayoutStore } from "gstore/store";
// import { Business, List, Person } from '@mui/icons-material';
import BusinessIcon from '@mui/icons-material/Business';
import ListIcon from '@mui/icons-material/List';
// import Header from "components/common/header";
import Header from "components/header";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

interface IGCRMProps { }

const GCRM: React.FunctionComponent<IGCRMProps> = () => {
  const { currentUser, authToken } = useAuthStore();
  const { setNavItems } = useLayoutStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    setNavItems([
      {
        id: 'parentcustomer',
        title: 'Şirket Yönetimi',
        translate: 'PLATFORM_COMPANY',
        type: 'collapse', // 'collapse', 'group', 'item'
        icon: <BusinessIcon />,
        children: [
          {
            id: 'parentcustomer.company',
            title: 'Şirketler',
            type: 'item',
            icon: <ListIcon />,
            url: '/gcloud/olcer/gcrm'
          },
          {
            id: 'parentcustomer.license',
            title: 'Şubeler',
            type: 'item',
            icon: <ListIcon />,
            url: '/gcloud/olcer/gcrm'
          },
          {
            id: 'parentcustomer.license',
            title: 'Departmanlar',
            type: 'item',
            icon: <ListIcon />,
            url: '/gcloud/olcer/gcrm'
          },
          {
            id: 'parentcustomer.license',
            title: 'Depolar',
            type: 'item',
            icon: <ListIcon />,
            url: '/gcloud/olcer/gcrm'
          },
        ]
      },
      {
        id: 'parentcustomer',
        title: 'Kullanıcı Yönetimi',
        translate: 'PLATFORM_COMPANY',
        type: 'collapse', // 'collapse', 'group', 'item'
        icon: <BusinessIcon />,
        children: [
          {
            id: 'parentcustomer.company',
            title: 'Kullanıcılar',
            type: 'item',
            icon: <ListIcon />,
            url: '/gcloud/olcer/gcrm'
          },
          {
            id: 'parentcustomer.license',
            title: 'Kullanıcı Rolleri',
            type: 'item',
            icon: <ListIcon />,
            url: '/gcloud/olcer/gcrm'
          },
        ]
      },
    ])
  }, [])

  const handleClick = () => {
    navigate("/gcloud/olcer/home");
  }

  return (
    <>
      <Box>
        GCrm Module Microfrontend has been loaded...
        <h2>Login Details:</h2>
        <p>Name: {currentUser?.name}</p>
        <p>Role: {currentUser?.role}</p>
        <p>Email: {currentUser?.email}</p>
        <p>Company: {currentUser?.company}</p>
        <p>Token: {authToken}</p>
      </Box>
    </>
  )
}

export default GCRM