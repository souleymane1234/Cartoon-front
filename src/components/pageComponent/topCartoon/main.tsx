import {
  Box,
  Typography,
  CardContent,
  Grid,
  IconButton,
  CircularProgress,
  Alert,
  Card
} from '@mui/material';
import { ChevronRight, Star } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

// Types pour les données de l'API
interface CategoryCartoon {
  name: string;
  description?: string;
  color?: string;
}

interface Cartoon {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  imageBackgroundUrl: string;
  ratings: string;
  createdAt: string;
  likesCount?: number;
  categoryCartoon?: CategoryCartoon;
}

interface ApiResponse {
  data: Cartoon[];
}

// Fonction pour récupérer les films depuis l'API
const fetchCartoons = async (): Promise<ApiResponse> => {
  const response = await fetch("https://cartoon-68vc.onrender.com/api/cartoon", {
    method: "GET",
    redirect: "follow"
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des films');
  }
  
  const result: ApiResponse = await response.json();
  return result;
};

// Couleurs de fond prédéfinies pour les cartes
const backgroundColors = [
  "bg-cyan-200",
  "bg-orange-200",
  "bg-purple-200",
  "bg-green-200",
  "bg-orange-100",
  "bg-green-400",
  "bg-gray-200",
  "bg-orange-300",
  "bg-blue-200",
  "bg-pink-200",
  "bg-indigo-200",
  "bg-teal-200"
];

const Main = () => {
  // Utilisation de React Query pour récupérer les données
  const { data, isLoading, error } = useQuery<ApiResponse, Error>({
    queryKey: ['cartoons-action'],
    queryFn: fetchCartoons,
    staleTime: 30 * 60 * 1000, // 30 minutes
  });

  // Transformer les données de l'API pour l'affichage
  const actionCartoons = data?.data?.map((cartoon: Cartoon, index: number) => ({
    id: cartoon.id,
    title: cartoon.title,
    rating: parseFloat(cartoon.ratings) || 4.6,
    type: cartoon.categoryCartoon?.name || "Série",
    image: cartoon.imageBackgroundUrl,
    bgColor: backgroundColors[index % backgroundColors.length], // Cycle through colors
    special: cartoon.id // Utiliser l'ID comme identifiant unique
  })) || [];

  // Afficher un loading pendant le chargement
  if (isLoading) {
    return (
      <Box className="w-full p-4 md:p-6 bg-white flex justify-center items-center min-h-64">
        <CircularProgress />
      </Box>
    );
  }

  // Afficher une erreur si la requête échoue
  if (error) {
    return (
      <Box className="w-full p-4 md:p-6 bg-white">
        <Alert severity="error" sx={{ mb: 2 }}>
          Erreur lors du chargement des films: {error.message}
        </Alert>
      </Box>
    );
  }

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
            Meilleure action ({actionCartoons.length})
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

        {/* Message si aucun film n'est disponible */}
        {actionCartoons.length === 0 && (
          <Box className="text-center py-8">
            <Typography variant="body1" className="text-gray-500">
              Aucun film disponible
            </Typography>
          </Box>
        )}

        {/* Grille responsive pour les cartes */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {actionCartoons.map((cartoon) => (
            <Grid size={{ xs: 6, sm: 4, lg: 3 }} key={cartoon.id}>
              <Link to={`/watch/${cartoon.id}`} style={{ textDecoration: 'none' }}>
                <Card
                  className="overflow-hidden cursor-pointer"
                  sx={{ 
                    borderRadius: '0.75rem',
                    '&:hover': {
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.2s ease-in-out'
                    }
                  }}
                >
                  <Box 
                    className={`relative w-full flex items-center justify-center ${cartoon.bgColor}`}
                    sx={{ height: { xs: 128, md: 144 } }}
                  >
                    <img
                      src={cartoon.image}
                      alt={cartoon.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
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
                      <Star 
                        style={{ 
                          fontSize: '0.88rem', 
                          color: '#FFC107' // Replace 'warning.main' with the equivalent color code
                        }} 
                      />
                      <Typography 
                        className="font-medium text-gray-900 mr-2"
                        sx={{ 
                          fontSize: { xs: '0.75rem', md: '0.875rem' },
                          fontWeight: 500
                        }}
                      >
                        {cartoon.rating.toFixed(1)}
                      </Typography>
                      <Typography 
                        className="text-gray-500"
                        sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                      >
                        • {cartoon.type}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;