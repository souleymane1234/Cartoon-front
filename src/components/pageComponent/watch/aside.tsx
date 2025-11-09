import {
  Box,
  Typography,
  Button,
  CardContent,
  Stack,
  Card
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
        width: '100%', // Prend toute la largeur disponible (33.33%)
        p: 2, // Padding réduit
        overflowY: 'auto',
        backgroundColor: 'white',
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ 
            mb: 2, 
            fontWeight: 600, 
            textAlign: 'left',
            fontSize: { xs: '1rem', md: '1.125rem' }
          }}
        >
          Recommandations
        </Typography>
        
        <Stack spacing={2}>
          {recommendations.map((item) => (
            <Card 
              key={item.id}
              className="overflow-hidden cursor-pointer"
              sx={{ 
                borderRadius: '0.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '&:hover': {
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }
              }}
            >
              {/* Image centrée et redimensionnée */}
              <Box 
                sx={{ 
                  width: '100%',
                  height: { xs: 120, sm: 140 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </Box>

              <CardContent 
                sx={{ 
                  padding: { xs: '12px', sm: '16px' },
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                {/* Titre centré avec gestion du texte trop long */}
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontSize: { xs: '0.875rem', sm: '0.9rem' },
                    fontWeight: 600,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    mb: 1
                  }}
                >
                  {item.title}
                </Typography>
                
                {/* Rating et type centrés */}
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <Star 
                    sx={{ 
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      color: 'warning.main'
                    }} 
                  />
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.75rem', sm: '0.8rem' },
                      fontWeight: 500
                    }}
                  >
                    {item.rating}
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.75rem', sm: '0.8rem' },
                      color: 'text.secondary'
                    }}
                  >
                    • {item.type}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
        
        {/* Bouton centré */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="text"
            sx={{ 
              color: '#4d2cf3',
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              '&:hover': { 
                backgroundColor: 'rgba(77, 44, 243, 0.04)' 
              }
            }}
          >
            Voir tout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Aside;