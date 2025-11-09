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
            overflowY: 'auto' ,
            flex: 3
          }}
        >
          <Main />
          <Personnages/>       

        </Box>
        <Box 
          sx={{ 
            flex: 1, // Prend 1 part sur 3 (1/3 de l'espace)
            overflowY: 'auto',
            borderLeft: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          <Aside />
        </Box>
      </Box>
    </Box>
  );
};

export default Watch;