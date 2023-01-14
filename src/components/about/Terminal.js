import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text, screenshot} = props;

   const boxPyStyle = screenshot ? {} : {xs: '1rem', md: '2rem'};
   const boxPxStyle = screenshot ? {} : {xs: '2rem', md: '3rem'};
   const boxWidth = screenshot ? {xs: '80%', md: '80%'} : {xs: '80%', md: '50%'}

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
           width={boxWidth} borderRadius={'0.5rem'} mb={'4rem'}>
         <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
         </Box>
         <Box py={boxPyStyle} px={boxPxStyle} borderRadius={'0 0 0.5rem 0.5rem'}
              sx={{backgroundColor: '#27242f'}} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;