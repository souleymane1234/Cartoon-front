import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack
} from '@mui/material';
import {
  Download,
  Share,
  Favorite,
  FavoriteBorder,
  Star,
  Movie
} from '@mui/icons-material';

const Main = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
        <Box 
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            overflowY: 'auto' 
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
              src="/video/video.mp4"
              poster="/img/pokou.png"
              controls
            />
          </Paper>

          {/* Informations du film */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
              <Box>
                <Box sx={{ mb: 2 }}>
                  <Typography sx={{ color: 'grey.600', borderRadius: '1rem', borderWidth: '1px', borderStyle: 'solid', borderColor: 'grey.300' }} className='w-18'>PG-13</Typography>
                </Box>
                
                <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Dia Houphouët
                </Typography>
                
                <Stack sx={{ color: 'grey.600' }}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Movie sx={{ fontSize: '1rem' }} />
                    <Box sx={{ width: 4, height: 4, bgcolor: 'grey.400', borderRadius: '50%' }} />
                    <Typography variant="body2">Action</Typography>
                  </Stack>
                  
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Star sx={{ color: 'warning.main', fontSize: '1rem' }} />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      9.0
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
              
              <Stack direction="row" spacing={1}>
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
                Histoire
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
                  Lorem ipsum dolor sit amet consectetur. Ullamcorper morbi magna amet adipiscing blandit enim mollis 
                  turpis feugiat. Arcu enim metus neque orci dignissim eu ac aliquam. Lacinia felis mollis integer enim 
                  eget. Arcu libero neque massa imperdiet cras suspendisse.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
  );
};

export default Main;