import React from 'react';
import {
  Box,
  Typography,
  CardContent,
  Grid,
  IconButton,
} from '@mui/material';
import { ChevronRight, Star } from 'lucide-react';

const Main = () => {
  // Données des meilleures actions
  const actionCartoons = [
    {
      id: 1,
      title: "La Djagai",
      rating: 4.6,
      type: "Série",
      image: "/img/dia.png",
      bgColor: "bg-cyan-200",
      special: "djagai"
    },
    {
      id: 2,
      title: "Soundiata Keita",
      rating: 4.6,
      type: "Série",
      image: "/img/cover/soundiata.png",
      bgColor: "bg-orange-200",
      special: "soundiata"
    },
    {
      id: 3,
      title: "Ekoua",
      rating: 4.6,
      type: "Série",
      image: "/img/cover/ekoua.png",
      bgColor: "bg-purple-900",
      special: "ekoua"
    },
    {
      id: 4,
      title: "La petite Pokou",
      rating: 4.6,
      type: "Série",
      image: "/img/pokou.png",
      bgColor: "bg-green-200",
      special: "petite-pokou"
    },
    {
      id: 5,
      title: "Pokou",
      rating: 4.6,
      type: "Série",
      image: "/img/pokou.png",
      bgColor: "bg-orange-100",
      special: "pokou"
    },
    {
      id: 6,
      title: "Conte nous",
      rating: 4.6,
      type: "Série",
      image: "/img/dia.png",
      bgColor: "bg-green-400",
      special: "conte-nous"
    },
    {
      id: 7,
      title: "Unchosen",
      rating: 4.6,
      type: "Série",
      image: "/img/cover/soundiata.png",
      bgColor: "bg-gray-600",
      special: "unchosen"
    },
    {
      id: 8,
      title: "Les contes de Raya",
      rating: 4.6,
      type: "Série",
      image: "/img/cover/ekoua.png",
      bgColor: "bg-orange-300",
      special: "raya"
    }
  ];

  return (
    <Box className="w-full p-4 md:p-6 bg-white">
      <Box>
        <Box className="flex items-center justify-between mb-6">
          <Typography 
            variant="h4" 
            className="font-bold text-gray-900"
            sx={{ 
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              fontWeight: 'bold'
            }}
          >
            Meilleure action
          </Typography>
          <IconButton 
            className="text-gray-500 hover:text-gray-700"
            sx={{
              color: '#6b7280',
              '&:hover': {
                color: '#374151',
                backgroundColor: '#f3f4f6'
              }
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </IconButton>
        </Box>

        {/* Grille responsive pour les cartes */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {actionCartoons.map((cartoon, index) => (
            <Grid size={{ xs: 6, sm: 4, lg:3 }} key={cartoon.id}>
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
                      src={cartoon.image}
                      alt={cartoon.title}
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
                    {cartoon.title}
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
                      {cartoon.rating}
                    </Typography>
                    <Typography 
                      className="text-gray-500"
                      sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                    >
                      • {cartoon.type}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;