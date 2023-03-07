import {Box} from "@mui/material";

export default function NotFound() {
    return (
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
                <h1>404 - Not Found</h1><br/>
        </Box>
    )
}