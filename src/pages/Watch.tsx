import {
  Box,
} from '@mui/material';
import Main from '../components/pageComponent/watch/main';
import Personnages from '../components/pageComponent/watch/personnage';
import Aside from '../components/pageComponent/watch/aside';

const Watch = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'white' }}>
        <Box 
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            overflowY: 'auto' 
          }}
        >
          <Main />
          <Personnages/>       

        </Box>
        <Aside />
      </Box>
    </Box>
  );
};

export default Watch;