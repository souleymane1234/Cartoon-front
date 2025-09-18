import {
  Box,
  Typography,
  Button,
  CardContent,
  Stack
} from '@mui/material';
import {
  Star
} from '@mui/icons-material';

const Aside = () => {

  const recommendations = [
    {
      id: 1,
      title: "Pokou",
      image: "/img/pokou.png",
      rating: 4.8,
      type: "Série"
    },
    {
      id: 2,
      title: "Soundiata Keïta",
      image: "/img/cover/soundiata.png",
      rating: 4.6,
      type: "Série"
    },
    {
      id: 3,
      title: "Ekoua",
      image: "/img/cover/ekoua.png",
      rating: 4.9,
      type: "Série"
    }
  ];
  return (
        <Box 
          sx={{ 
            width: 500, 
            p: 3, 
            overflowY: 'auto',
            elevation: 1,
            backgroundColor: 'white',
            border: 'none'
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ mb: 3, fontWeight: 600, textAlign: 'left' }}
            >
              Recommander
            </Typography>
            
            <Stack spacing={3}>
              {recommendations.map((item) => (
                              <Box 
                className="overflow-hidden cursor-pointer"
                sx={{ borderRadius: '0.75rem',
                  '&:hover': {
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', borderRadius: '0.75rem'
                  }
                }}
              >
                <Box 
                  className={`relative w-full flex items-center justify-center`}
                  sx={{ height: { xs: 128, md: 144 } }}
                >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-6"
                    />
                </Box>

                <CardContent sx={{ padding: { xs: '12px', md: '16px' } }}>
                  <Typography 
                    variant="subtitle1" 
                    className="font-semibold text-gray-900 mb-2 text-start"
                    sx={{ 
                      fontSize: { xs: '0.875rem', md: '1rem' },
                      fontWeight: 600,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.title}
                  </Typography>
                  
                  <Box className="flex items-center">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current mr-1" />
                    <Typography 
                      className="font-medium text-gray-900 mr-2"
                      sx={{ 
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                        fontWeight: 500
                      }}
                    >
                      {item.rating}
                    </Typography>
                    <Typography 
                      className="text-gray-500"
                      sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                    >
                      • {item.type}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
              ))}
            </Stack>
            
            <Button
              fullWidth
              sx={{ 
                mt: 3,
                color: '#4d2cf3',
                '&:hover': { bgcolor: 'primary.50' }
              }}
            >
              Voir tout
            </Button>
          </Box>
        </Box>
  );
};

export default Aside;