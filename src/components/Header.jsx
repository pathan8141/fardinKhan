import React from "react"
import { Box,AppBar,Toolbar,IconButton,Typography} from "@mui/material"
import  MenuIcon  from "@mui/icons-material/Menu"

export const Header=()=>{
    return(
      <div>
              <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            PickupBiz
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

      </div>
    )
}