import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import NotFound from './NotFound';
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import {Helmet} from 'react-helmet';

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(true);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Helmet>
            <meta name='theme-color' content={darkMode ? '#1f1f1f' : '#f8f8f8'}/>
         </Helmet>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                  <Route path='*' element={<NotFound/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>made with &hearts; using React</p>
                  <p>inspired by <a href={'https://paytonpierce.dev'}>Payton Pierce</a></p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}
