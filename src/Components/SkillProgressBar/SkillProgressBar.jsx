import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  width:'67%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#08203a',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#e6027d',
  },
}));
export default function SkillProgressBar({value}) {
  const[values,setValues] = React.useState(0)
  React.useEffect(()=>{
    const clear = setTimeout(()=>{
        setValues(value);
    },100)
    return ()=>{
      clearTimeout(clear);
    }
  },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={values} />
    </Box>
  );
}