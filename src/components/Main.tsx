import {
  Box,
  Typography,
  Chip,
  Card,
  CardMedia
} from '@mui/material';
import CustomButton from "./ui/CustomButton";
import CustomButtonWithoutBackground from "./ui/CustomButtonWithoutBackground";
import { Play, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Main = () => {

  const studioLogos = [
    { src: "/img/studio/afrikaToon.png", alt: "AfrikaToon" },
    { src: "/img/studio/studiok.png", alt: "Studio K" },
    { src: "/img/studio/sinanimation.png", alt: "Sin Animation" },
    { src: "/img/studio/brain.png", alt: "Brain Studio" },
  ];

  const continueWatchingVideos = [
    { src: "/video/video.mp4", poster: "/img/cover/dia.png", title: "Dia", link: "/watch" },
    { src: "/video/video.mp4", poster: "/img/cover/kinafo.png", title: "Kinafo", link: "/watch" },
    { src: "/video/video.mp4", poster: "/img/cover/kinafo.png", title: "Kinafo 2", link: "/watch" },
  ];

  return (
    <Box 
      component="main" 
      className="flex-1 p-4 sm:p-6 lg:p-8 max-w-full overflow-x-hidden"
    >
      {/* Hero Section */}
      <Box 
        className="relative rounded-2xl overflow-hidden mb-8 h-[300px] sm:h-[400px] bg-cover bg-center"
        sx={{
          backgroundImage: "url('/img/pokou.png')",
          maxWidth: '100%',
        }}
      >
        <Box className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <Box className="relative h-full flex flex-col justify-center p-4 sm:p-6 lg:p-8">
          <Box className="mb-4 max-w-full">
            <Chip
              label="Comédie"
              className="bg-blue-600 text-white text-xs mb-4"
              size="small"
            />
            <Typography
              variant="h2"
              component="h1"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
              sx={{ 
                wordBreak: 'break-word',
                maxWidth: '100%'
              }}
            >
              Pokou, princesse ashanti
            </Typography>
            <Typography
              variant="body1"
              className="text-gray-200 mb-6 text-sm sm:text-base"
              sx={{ 
                wordBreak: 'break-word',
                maxWidth: '100%'
              }}
            >
              Long métrage • Culture • Afrikartoon • 2013
            </Typography>
          </Box>

          <Box className="flex flex-row sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <CustomButton
              title="Regarder thriller"
              icon={<Play className="h-4 w-4 sm:h-5 sm:w-5" />}
              // link="/watch"
            />
            <CustomButtonWithoutBackground
              title="Ajouter la liste"
              icon={<Plus className="h-4 w-4 sm:h-5 sm:w-5" />}
              // onClick={() => addToWatchlist()}
            />
          </Box>
        </Box>
      </Box>

      {/* Studio Logos - Responsive Grid */}
      <Box className="mb-8 sm:mb-12">
        <Box 
          className="grid grid-cols-4 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          sx={{ maxWidth: '100%' }}
        >
          {studioLogos.map((studio, index) => (
            <Card 
              key={index}
              className="aspect-[2/1] flex items-center justify-center border border-gray-200 rounded-lg sm:rounded-2xl shadow-none bg-white"
              sx={{ maxWidth: '100%' }}
            >
              <CardMedia
                component="img"
                image={studio.src}
                alt={studio.alt}
                sx={{
                  width: '60%',
                  height: '60%',
                }}
              />
            </Card>
          ))}
        </Box>
      </Box>

      {/* Continue Watching */}
      <Box className="mb-8" sx={{ maxWidth: '100%' }}>
        <Typography
          className="font-bold text-black text-start"
          sx={{ marginBottom: 2, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}
        >
          Continuer à regarder
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
          {/* Videos */}
          {continueWatchingVideos.map((video, index) => (
            <Link key={index} to={video.link}>
              <Card
                key={index}
                className="w-64 sm:w-80 h-36 sm:h-48 rounded-xl overflow-hidden shadow-none flex-shrink-0"
              >
                <Box
                component="video"
                src={video.src}
                poster={video.poster}
                controls
                className="w-full h-full object-cover"
              />
            </Card>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;