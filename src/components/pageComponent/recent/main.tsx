import {
  Box,
  Typography,
  Card,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Main = () => {


  const aujourdhui = [
    { src: "/video/video.mp4", poster: "/img/cover/1.png", title: "Spider-Man: Accroposent la partie 1", link: "/watch", type: "Film" },
    { src: "/video/video.mp4", poster: "/img/cover/2.png", title: "Thor: Amour et tonnerre", link: "/watch", type: "Film" },
    { src: "/video/video.mp4", poster: "/img/cover/3.png", title: "Top Gun: Maverick", link: "/watch", type: "Film" },
    { src: "/video/video.mp4", poster: "/img/cover/4.png", title: "Phantan noir: Wakanda pour toujours", link: "/watch", type: "Film" },
  ];

    const hier = [
    { src: "/video/video.mp4", poster: "/img/cover/5.png", title: "Spider-Man: Accroposent la partie 1", link: "/watch", type: "Film" },
    { src: "/video/video.mp4", poster: "/img/cover/6.png", title: "Thor: Amour et tonnerre", link: "/watch", type: "Film" },
    { src: "/video/video.mp4", poster: "/img/cover/7.png", title: "Top Gun: Maverick", link: "/watch", type: "Film" },
    { src: "/video/video.mp4", poster: "/img/cover/8.png", title: "Phantan noir: Wakanda pour toujours", link: "/watch", type: "Film" },
  ];

  const avanthier = [
    { src: "/video/video.mp4", poster: "/img/cover/1.png", title: "Spider-Man: Accroposent la partie 1", link: "/watch", type: "Film" },
    { src: "/video/video.mp4", poster: "/img/cover/9.png", title: "Thor: Amour et tonnerre", link: "/watch", type: "Film" },
    { src: "/video/video.mp4", poster: "/img/cover/10.png", title: "Top Gun: Maverick", link: "/watch", type: "Film" },
    { src: "/video/video.mp4", poster: "/img/cover/11.png", title: "Phantan noir: Wakanda pour toujours", link: "/watch", type: "Film" },
  ];

  return (
    <Box 
      component="main" 
      className="flex-1 p-4 sm:p-6 lg:p-8 max-w-full overflow-x-hidden"
    >

      {/* Studio Logos - Responsive Grid */}

      {/* Continue Watching */}
      <Box className="mb-8" sx={{ maxWidth: '100%' }}>
        <Typography
          className="font-bold text-black text-start"
          sx={{ marginBottom: 2, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}
        >
          Aujourd'hui
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
          {aujourdhui.map((video, index) => (
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
            <Typography
            className="font-bold text-black text-start"
            sx={{ marginBottom: 2, fontWeight: 'bold', }}
            >
            {video.title}
            </Typography>
            </Link>
          ))}
        </Box>
      </Box>
            <Box className="mb-8" sx={{ maxWidth: '100%' }}>
        <Typography
          className="font-bold text-black text-start"
          sx={{ marginBottom: 2, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}
        >
          Hier
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
          {hier.map((video, index) => (
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
            <Typography
            className="font-bold text-black text-start"
            sx={{ marginBottom: 2, fontWeight: 'bold', }}
            >
            {video.title}
            </Typography>
            </Link>
          ))}
        </Box>
      </Box>
            <Box className="mb-8" sx={{ maxWidth: '100%' }}>
        <Typography
          className="font-bold text-black text-start"
          sx={{ marginBottom: 2, fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}
        >
          Avant-hier
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
          {avanthier.map((video, index) => (
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
            <Typography
            className="font-bold text-black text-start"
            sx={{ marginBottom: 2, fontWeight: 'bold', }}
            >
            {video.title}
            </Typography>
            </Link>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default Main;