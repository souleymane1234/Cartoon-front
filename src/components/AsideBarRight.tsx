import {
  Box,
  Typography,
  Avatar,
  CardContent,
  Grid,
  Button,
  Rating,
} from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';
import CustomButtonBorder from './ui/CustomButtonBorder';

const cartoonData = [
  {
    id: 1,
    pg: 'PG-13',
    title: 'Dia Houphouët',
    category: 'Drame',
    rate: '9.2',
    urlImg: '/img/dia.png',
  },
  {
    id: 2,
    pg: 'PG-13',
    title: 'Pokou',
    category: 'Culture • Drame',
    rate: '9.2',
    urlImg: '/img/pokou.png',
  },
  {
    id: 3,
    pg: 'PG-13',
    title: 'Unchosen',
    category: 'Action',
    rate: '9.2',
    urlImg: '/img/Unchosen.png',
  },
];

const AsideBarRight = () => {
  const genres = [
    'Action', 'Fantaisie', 'Comédie', 'Culture', 
    'Drame', 'Romance', 'Mystère', 'Horreur'
  ];

  return (
    <Box className="w-80 bg-gray-50 min-h-screen p-6">
      {/* Section des films les mieux notés */}
      <Box className="mb-8">
        <Typography 
          variant="h6" 
          className="text-lg font-bold text-gray-900 mb-6"
        >
          Les mieux notés
        </Typography>
        
        <Box className="space-y-4">
          {cartoonData.map((cartoon) => (
            <Box key={cartoon.id} className="flex items-center space-x-4 bg-transparent shadow-none">
              <Avatar
                src={cartoon.urlImg}
                alt={cartoon.title}
                className="w-16 h-16 rounded-lg"
                sx={{ width: 100, height: 100, borderRadius: '1rem' }}
              />
              
              <CardContent className="flex-1 p-0">
                <Box className="items-start mb-1">
                  <Typography className="text-xs text-gray-500 text-left">
                    {cartoon.pg}
                  </Typography>
                  <Typography 
                    variant="subtitle2" 
                    className="font-semibold text-gray-900 text-left"
                  >
                    {cartoon.title}
                  </Typography>
                </Box>
                <Box className="flex items-center">
                  <TheatersIcon className="text-gray-400 mr-1" sx={{ fontSize: '1rem' }} />
                  <Typography className="text-sm text-gray-600 mb-1 text-left" sx={{ fontSize: '0.875rem' }}>
                    {cartoon.category}
                  </Typography>
                </Box>

                <Box className="flex items-center">
                  <Rating
                    value={1}
                    max={1}
                    readOnly
                    className="text-yellow-500 mr-1"
                    sx={{
                      '& .MuiRating-iconFilled': {
                        color: '#eab308',
                      },
                      fontSize: '1rem'
                    }}
                  />
                  <Typography className="text-sm font-medium text-gray-900 ml-1">
                    {cartoon.rate}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Section des genres */}
      <CustomButtonBorder title="Voir tout" link="/cartoons" />
          {/* <button className="px-10 py-2 p-4 w-48 text-[#7B61FF] rounded-full bg-[#fff] hover:bg-[#7B61FF] hover:text-[#fff] border border-[#7B61FF]">
            Voir tout
          </button> */}
      <Box>
        <Typography 
          variant="h6" 
          className="text-start text-lg font-bold"
          sx={{ color: '#171725', marginBottom: '1rem', marginTop: '1rem' }}
        >
          Genres
        </Typography>
        
        <Grid container spacing={2}>
          {genres.map((genre) => (
            <Grid size={{ xs: 4 }} key={genre}>
              <Button
                fullWidth
                variant="text"
                className="py-2 px-3 text-[#171725] bg-black text-sm normal-case"
                sx={{ 
                  textTransform: 'none',
                  justifyContent: 'flex-center',
                  borderRadius: '0.80rem',
                  color: '#171725',
                  backgroundColor: '#eeededff',
                  '&:hover': {
                    backgroundColor: '#ceccccff',
                  },
                }}
              >
                {genre}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AsideBarRight;