import {
  Box,
  Typography,
  CardContent,
  Grid,
  Rating,
  Avatar,
} from '@mui/material';
import TheatersIcon from '@mui/icons-material/Theaters';

const Header = () => {
  // Données des top cartoons
  const topCartoons = [
    {
      id: 1,
      rank: 1,
      title: "Houphouët",
      genre: "Drame",
      rating: 9.2,
      pg: "PG-13",
      image: "/img/dia.png",
      bgColor: "bg-orange-100",
      nombre: "1"
    },
    {
      id: 2,
      rank: 2,
      title: "Pokou",
      genre: "Drame",
      rating: 9.2,
      pg: "PG-13",
      image: "/img/pokou.png",
      bgColor: "bg-blue-100",
      nombre: "2"
    },
    {
      id: 3,
      rank: 3,
      title: "Unchosen",
      genre: "Action",
      rating: 9.0,
      pg: "PG-13",
      image: "/img/dia.png",
      bgColor: "bg-gray-100",
      nombre: "3"
    },
    {
      id: 4,
      rank: 4,
      title: "Autre Titre",
      genre: "Aventure",
      rating: 8.8,
      pg: "PG-13",
      image: "/img/dia.png",
      bgColor: "bg-green-100",
      nombre: "4"
    }
  ];

  return (
    <Box className="w-full p-4 md:p-6 bg-white">
      {/* Section Top cartoons */}
      <Box className="mb-12">
        <Typography 
          variant="h4" 
          className="font-bold text-gray-900 mb-6 text-start"
          sx={{ 
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 'bold'
          }}
        >
          Top cartoons
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
        <Box 
          className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4"
          sx={{
            maxWidth: '100%',
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f5f9',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#cbd5e1',
              borderRadius: '4px',
              '&:hover': {
                background: '#94a3b8',
              },
            },
          }}
        >
          {topCartoons.map((cartoon) => (
            <Grid size={{ xs: 12, sm: 6, lg:3 }}  key={cartoon.id}>
            <Box key={cartoon.id} className="flex items-center space-x-4 bg-transparent shadow-none">
              <Typography 
                variant="h1" 
                className="font-bold text-gray-900 mb-6"
                sx={{ 
                  fontSize: '4rem',
                  fontWeight: 'bold'
                }}
              >
                {cartoon.nombre}
              </Typography>
              <Avatar
                src={cartoon.image}
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
                    {cartoon.genre}
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
                    {cartoon.rating}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
            </Grid>
          ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;