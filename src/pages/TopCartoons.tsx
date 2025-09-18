import {
  Box
} from '@mui/material';
import Header from '../components/pageComponent/topCartoon/header';
import Main from '../components/pageComponent/topCartoon/main';

const TopCartoons = () => {

  return (
    <Box className="w-full p-4 md:p-6 bg-white">
      <Header />
      <Main />
    </Box>
  );
};

export default TopCartoons;