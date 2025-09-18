import {
  Box,
  Typography,
  Avatar,
  Stack,
} from '@mui/material';

const Personnages = () => {

  const characters = [
    { name: "Lorem ipsum", avatar: "/img/pokou.png" },
    { name: "Lorem ipsum", avatar: "/img/pokou.png" },
    { name: "Lorem", avatar: "/img/pokou.png" },
    { name: "Lorem", avatar: "/img/pokou.png" }
  ];

  return (
          <Box sx={{ mb: 4 }}>
            <Box>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  mb: 3, 
                  textAlign: 'left',
                  fontWeight: 600
                }}
              >
                Personnages
              </Typography>
              
              <Stack direction="row" spacing={4}>
                {characters.map((character, index) => (
                  <Stack key={index} direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src={character.avatar}
                      alt={character.name}
                      sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {character.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
  );
};

export default Personnages;