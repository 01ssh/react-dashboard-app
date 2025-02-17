import {Box, IconButton, Toolbar, UseTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutLineIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    const theme = useTheme()
    const colors = token(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    
    return (
    <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box 
        display="flex" backgroundColor={colors.primary[400]}
        borderRadius="3px"
        >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search…"/>
            <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
            </IconButton>
        </Box>

        {/* ICONS */}
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                <LightModeOutLineIcon/>
                )}
                </IconButton>
            <IconButton>
                <NotificationsutlinedIcon/>
                </IconButton>
                <IconButton>
                <SettingsOutlinedIcon/>
                </IconButton>
                 <IconButton >
                <PersonOutlinedIcon/>
                </IconButton>
        </Box>
    </Box>
    );
};

export default Topbar;

