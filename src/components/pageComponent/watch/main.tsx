import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  CircularProgress,
  Alert,
  Chip
} from '@mui/material';
import {
  Download,
  Share,
  Favorite,
  FavoriteBorder,
  Star,
  Movie
} from '@mui/icons-material';

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
  likesCount: number;
  categoryCartoon?: CategoryCartoon;
}

interface ApiResponse {
  data: Cartoon;
}

// Fonction pour récupérer les détails d'un cartoon
const fetchCartoonDetail = async (id: string): Promise<ApiResponse> => {
  const response = await fetch(`https://cartoon-68vc.onrender.com/api/cartoon/${id}`, {
    method: "GET",
    redirect: "follow"
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des détails du film');
  }
  
  const result: ApiResponse = await response.json();
  return result;
};

const Main: React.FC = () => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const { id } = useParams<{ id: string }>(); // Récupère l'ID depuis l'URL

  // Utilisation de React Query pour récupérer les détails
  const { data, isLoading, error } = useQuery<ApiResponse, Error>({
    queryKey: ['cartoon', id],
    queryFn: () => {
      if (!id) throw new Error('ID manquant');
      return fetchCartoonDetail(id);
    },
    enabled: !!id, // Ne s'exécute que si l'ID est disponible
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const cartoon = data?.data;

  // Afficher un loading pendant le chargement
  if (isLoading) {
    return (
      <Box 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          overflowY: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Afficher une erreur si la requête échoue
  if (error) {
    return (
      <Box 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          overflowY: 'auto'
        }}
      >
        <Alert severity="error" sx={{ mb: 2 }}>
          Erreur lors du chargement du film: {error.message}
        </Alert>
        <Button 
          variant="contained" 
          onClick={() => window.history.back()}
        >
          Retour
        </Button>
      </Box>
    );
  }

  // Si aucun film n'est trouvé
  if (!cartoon) {
    return (
      <Box 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          overflowY: 'auto'
        }}
      >
        <Alert severity="warning">
          Film non trouvé
        </Alert>
        <Button 
          variant="contained" 
          onClick={() => window.history.back()}
          sx={{ mt: 2 }}
        >
          Retour
        </Button>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        p: 3, 
        overflowY: 'auto',
        width: '100%'
      }}
    >
      {/* Lecteur vidéo */}
      <Paper elevation={2} sx={{ mb: 3, borderRadius: 2, overflow: 'hidden' }}>
        <Box
          component="video"
          sx={{
            width: '100%',
            height: 400,
            objectFit: 'cover'
          }}
          src={cartoon.videoUrl}
          poster={cartoon.imageBackgroundUrl}
          controls
        />
      </Paper>

      {/* Informations du film */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3, flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Box sx={{ flex: 1, minWidth: 0 }}> {/* Ajout de minWidth: 0 pour le truncate */}
            <Box sx={{ mb: 2 }}>
              <Chip 
                label={cartoon.categoryCartoon?.name || "Animation"} 
                sx={{ 
                  borderRadius: '1rem', 
                  borderWidth: '1px', 
                  borderStyle: 'solid', 
                  borderColor: 'grey.300',
                  backgroundColor: cartoon.categoryCartoon?.color ? `${cartoon.categoryCartoon.color}20` : 'transparent',
                  color: cartoon.categoryCartoon?.color || 'grey.600'
                }} 
              />
            </Box>

            {/* Titre sur une seule ligne avec ellipse */}
            <Typography 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2, 
                fontSize: '1.5rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
                lineHeight: 1.2,
              }}
            >
              {cartoon.title}
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ color: 'grey.600' }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Movie sx={{ fontSize: '1rem' }} />
                <Box sx={{ width: 4, height: 4, bgcolor: 'grey.400', borderRadius: '50%' }} />
                <Typography variant="body2">{cartoon.categoryCartoon?.name || "Animation"}</Typography>
              </Stack>
              
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Star sx={{ color: 'warning.main', fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {cartoon.ratings || "N/A"}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Favorite sx={{ color: '#EB3F5E', fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {cartoon.likesCount || 0} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ width: { xs: '100%', md: 'auto' } }}>
            <Button
              variant="outlined"
              startIcon={<Download />}
              sx={{ 
                bgcolor: 'grey.100',
                border: 'none',
                color: 'text.primary',
                '&:hover': { bgcolor: 'grey.200', border: 'none' }
              }}
            >
              Téléchargements
            </Button>
            
            <Button
              variant="outlined"
              startIcon={<Share />}
              sx={{ 
                bgcolor: 'grey.100',
                border: 'none',
                color: 'text.primary',
                '&:hover': { bgcolor: 'grey.200', border: 'none' }
              }}
            >
              Partager
            </Button>
            
            <Button
              variant="contained"
              onClick={() => setIsLiked(!isLiked)}
              startIcon={isLiked ? <Favorite /> : <FavoriteBorder />}
              sx={{ 
                bgcolor: '#EB3F5E',
                '&:hover': { bgcolor: '#d63653' }
              }}
            >
              J'aime
            </Button>
          </Stack>
        </Box>

        {/* Histoire */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{
              color: 'text.primary', 
              mb: 2, 
              textAlign: 'left',
              fontWeight: 600
            }}
          >
            Synopsis
          </Typography>
          
          <Paper 
            sx={{ 
              p: 3, 
              bgcolor: 'background.paper',
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'grey.600', 
                lineHeight: 1.7,
                textAlign: 'left'
              }}
            >
              {cartoon.description || "Aucune description disponible pour ce film."}
            </Typography>
          </Paper>
        </Box>

        {/* Informations supplémentaires */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{
              color: 'text.primary', 
              mb: 2, 
              textAlign: 'left',
              fontWeight: 600
            }}
          >
            Informations
          </Typography>
          
          <Paper 
            sx={{ 
              p: 3, 
              bgcolor: 'background.paper',
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: 'grey.600', fontWeight: 500 }}>
                  Catégorie:
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                  {cartoon.categoryCartoon?.name || "Non spécifié"}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: 'grey.600', fontWeight: 500 }}>
                  Note:
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                  ⭐ {cartoon.ratings || "N/A"}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: 'grey.600', fontWeight: 500 }}>
                  Likes:
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                  {cartoon.likesCount || 0}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: 'grey.600', fontWeight: 500 }}>
                  Date de création:
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                  {new Date(cartoon.createdAt).toLocaleDateString('fr-FR')}
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;