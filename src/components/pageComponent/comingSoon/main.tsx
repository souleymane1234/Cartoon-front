import { useQuery } from '@tanstack/react-query';
import {
  Box,
  Typography,
  Chip,
  Card,
  CircularProgress,
  Alert
} from '@mui/material';
import CustomButton from "../../ui/CustomButton";
import CustomButtonWithoutBackground from "../../ui/CustomButtonWithoutBackground";
import { Play, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

// Types pour les données de l'API
interface CategoryCartoon {
  name: string;
  description: string;
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
  data: Cartoon[];
}

interface FeaturedMovie {
  id: string;
  title: string;
  category: string;
  year: string;
  studio: string;
  type: string;
  background: string;
  link: string;
  description: string;
  rating: string;
}

interface Movie {
  id: string;
  src: string;
  poster: string;
  title: string;
  link: string;
  type: string;
  rating: string;
  category?: string;
  createdAt?: string;
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

const Main: React.FC = () => {
  // Utilisation de React Query pour récupérer les données
  const { data, isLoading, error } = useQuery<ApiResponse, Error>({
    queryKey: ['cartoons'],
    queryFn: fetchCartoons,
    staleTime: 30 * 60 * 1000, // 30 minutes
  });

  // Utiliser les données de l'API pour les films à venir (premiers 3 films)
  const featuredMovies: FeaturedMovie[] = data?.data?.slice(0, 3).map((cartoon: Cartoon) => ({
    id: cartoon.id,
    title: cartoon.title,
    category: cartoon.categoryCartoon?.name || "Animation",
    year: new Date(cartoon.createdAt).getFullYear().toString(),
    studio: "Afrikartoon",
    type: `${cartoon.categoryCartoon?.description || "Animation"} • Culture`,
    background: cartoon.imageBackgroundUrl,
    link: `/watch/${cartoon.id}`,
    description: cartoon.description,
    rating: cartoon.ratings
  })) || [
    {
      id: "default-1",
      title: "Pokou, princesse ashanti",
      category: "Comédie",
      year: "2013",
      studio: "Afrikartoon",
      type: "Long métrage • Culture",
      background: "/img/pokou.png",
      link: "/watch/pokou",
      description: "",
      rating: "0"
    }
  ];

  // Utiliser les données de l'API pour "En 2022" (films avec ratings élevés)
  const movies2022: Movie[] = data?.data
    ?.filter((cartoon: Cartoon) => parseFloat(cartoon.ratings) >= 4.0)
    .slice(0, 4)
    .map((cartoon: Cartoon) => ({
      id: cartoon.id,
      src: cartoon.videoUrl,
      poster: cartoon.imageBackgroundUrl,
      title: cartoon.title,
      link: `/watch/${cartoon.id}`,
      type: "Film",
      rating: cartoon.ratings,
      category: cartoon.categoryCartoon?.name
    })) || [
    { 
      id: "default-spider",
      src: "/video/video.mp4", 
      poster: "/img/cover/spider.png", 
      title: "Spider-Man: Accroposent la partie 1", 
      link: "/watch", 
      type: "Film",
      rating: "0"
    },
    { 
      id: "default-thor",
      src: "/video/video.mp4", 
      poster: "/img/cover/tor.png", 
      title: "Thor: Amour et tonnerre", 
      link: "/watch", 
      type: "Film",
      rating: "0"
    }
  ];

  // Utiliser les données de l'API pour "En 2023" (films récents)
  const movies2023: Movie[] = data?.data
    ?.filter((cartoon: Cartoon) => {
      const createdYear = new Date(cartoon.createdAt).getFullYear();
      return createdYear >= 2023;
    })
    .slice(0, 4)
    .map((cartoon: Cartoon) => ({
      id: cartoon.id,
      src: cartoon.videoUrl,
      poster: cartoon.imageBackgroundUrl,
      title: cartoon.title,
      link: `/watch/${cartoon.id}`,
      type: "Film",
      rating: cartoon.ratings,
      category: cartoon.categoryCartoon?.name,
      createdAt: cartoon.createdAt
    })) || [
    { 
      id: "default-gun",
      src: "/video/video.mp4", 
      poster: "/img/cover/gun.png", 
      title: "Top Gun: Maverick", 
      link: "/watch", 
      type: "Film",
      rating: "0"
    },
    { 
      id: "default-panther",
      src: "/video/video.mp4", 
      poster: "/img/cover/panther.png", 
      title: "Phantan noir: Wakanda pour toujours", 
      link: "/watch", 
      type: "Film",
      rating: "0"
    }
  ];

  // Afficher un loading pendant le chargement
  if (isLoading) {
    return (
      <Box 
        component="main" 
        className="flex-1 p-4 sm:p-6 lg:p-8 max-w-full overflow-x-hidden flex items-center justify-center"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Afficher une erreur si la requête échoue
  if (error) {
    return (
      <Box 
        component="main" 
        className="flex-1 p-4 sm:p-6 lg:p-8 max-w-full overflow-x-hidden"
      >
        <Alert severity="error">
          Erreur lors du chargement des films: {error.message}
        </Alert>
      </Box>
    );
  }

  return (
    <Box 
      component="main" 
      className="flex-1 p-4 sm:p-6 lg:p-8 max-w-full overflow-x-hidden"
    >
      {/* Hero Section - À venir */}
      <Typography
        className="font-bold text-black text-start"
        sx={{ marginBottom: 2, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}
      >
        À venir
      </Typography>
      
      <Box
        className="flex space-x-6 overflow-x-auto pb-6"
        sx={{
          maxWidth: "100%",
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { height: "8px" },
          "&::-webkit-scrollbar-track": { background: "#f1f5f9", borderRadius: "4px" },
          "&::-webkit-scrollbar-thumb": {
            background: "#cbd5e1",
            borderRadius: "4px",
            "&:hover": { background: "#94a3b8" },
          },
        }}
      >
        {featuredMovies.map((movie: FeaturedMovie, index: number) => (
          <Link key={movie.id || index} to={movie.link} className="scroll-snap-align-start">
            <Card
              className="flex-shrink-0 rounded-2xl overflow-hidden relative shadow-lg"
              sx={{
                width: { xs: "80vw", sm: "70vw", md: "60vw", lg: "50vw" },
                height: { xs: 200, sm: 300, md: 400 },
                backgroundImage: `url(${movie.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              {/* Dégradé sombre à gauche */}
              <Box className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

              {/* Contenu texte */}
              <Box className="relative h-full flex flex-col justify-center p-6 sm:p-10">
                <Chip
                  label={movie.category}
                  className="bg-blue-600 text-white text-xs mb-4"
                  size="small"
                />

                <Typography
                  variant="h2"
                  component="h1"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
                  sx={{ wordBreak: "break-word", maxWidth: "100%" }}
                >
                  {movie.title}
                </Typography>

                <Typography
                  variant="body1"
                  className="text-gray-200 mb-6 text-sm sm:text-base"
                >
                  {movie.type} • {movie.studio} • {movie.year}
                </Typography>

                <Box className="flex flex-row items-center space-x-4">
                  <CustomButton
                    title="Regarder le film"
                    icon={<Play className="h-5 w-5" />}
                  />
                  <CustomButtonWithoutBackground
                    title="Ajouter à la liste"
                    icon={<Plus className="h-5 w-5" />}
                  />
                </Box>
              </Box>
            </Card>
          </Link>
        ))}
      </Box>

      {/* Section En 2022 - Films populaires */}
      <Box className="mb-8" sx={{ maxWidth: '100%' }}>
        <Typography
          className="font-bold text-black text-start"
          sx={{ marginBottom: 2, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}
        >
          En 2022 - Les mieux notés
        </Typography>

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
          {movies2022.map((video: Movie, index: number) => (
            <Box key={video.id || index} className="flex-shrink-0 w-64 sm:w-80">
              <Link to={video.link}>
                <Card className="rounded-xl overflow-hidden shadow-none mb-2">
                  <Box
                    component="video"
                    src={video.src}
                    poster={video.poster}
                    controls
                    className="w-full h-36 sm:h-48 object-cover"
                  />
                </Card>
              </Link>
              <Typography
                className="font-bold text-black text-start text-sm sm:text-base"
                sx={{ marginBottom: 0.5, fontWeight: 'bold' }}
              >
                {video.title}
              </Typography>
              {video.rating && (
                <Typography
                  variant="body2"
                  className="text-gray-600"
                  sx={{ fontSize: '0.875rem' }}
                >
                  ⭐ {video.rating} • {video.category}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Section En 2023 - Films récents */}
      <Box className="mb-8" sx={{ maxWidth: '100%' }}>
        <Typography
          className="font-bold text-black text-start"
          sx={{ marginBottom: 2, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}
        >
          En 2023 - Récent
        </Typography>

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
          {movies2023.map((video: Movie, index: number) => (
            <Box key={video.id || index} className="flex-shrink-0 w-64 sm:w-80">
              <Link to={video.link}>
                <Card className="rounded-xl overflow-hidden shadow-none mb-2">
                  <Box
                    component="video"
                    src={video.src}
                    poster={video.poster}
                    controls
                    className="w-full h-36 sm:h-48 object-cover"
                  />
                </Card>
              </Link>
              <Typography
                className="font-bold text-black text-start text-sm sm:text-base"
                sx={{ marginBottom: 0.5, fontWeight: 'bold' }}
              >
                {video.title}
              </Typography>
              {video.rating && (
                <Typography
                  variant="body2"
                  className="text-gray-600"
                  sx={{ fontSize: '0.875rem' }}
                >
                  ⭐ {video.rating} • {video.category}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;