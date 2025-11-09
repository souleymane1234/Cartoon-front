import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Divider
} from '@mui/material';
import {
  Explore,
  History,
  Download,
  DarkMode,
  Settings,
  LiveTv,
  EmojiEvents
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const AsideBarLeft = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = React.useState(false);

  const menuItems = [
    {
      id: 1,
      title: 'Accueil',
      icon: <Explore />,
      link: '/',
      active: false
    },
    {
      id: 2,
      title: 'Top cartoons',
      icon: <LiveTv />,
      link: '/top-cartoons',
      active: false
    },
    {
      id: 3,
      title: 'À venir',
      icon: <EmojiEvents />,
      link: '/coming-soon',
      active: false
    }
  ];

  const libraryItems = [
    {
      id: 6,
      title: 'Joués récemment',
      icon: <History />,
      link: '/recent',
      active: false
    },
    {
      id: 7,
      title: 'Téléchargements',
      icon: <Download />,
      link: '#',
      active: false
    },
    {
      id: 9,
      title: 'Paramètres',
      icon: <Settings />,
      link: '#',
      active: false
    }
  ];

  // Fonction pour vérifier si un lien est actif
  const isLinkActive = (link: string): boolean => {
    if (link === '/' && location.pathname === '/') {
      return true;
    }
    return link !== '/' && location.pathname.startsWith(link);
  };

  const handleNavigation = (link: string) => {
    navigate(link);
  };

  const handleDarkModeToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
    // Ici vous pouvez ajouter la logique pour activer/désactiver le mode sombre
    // Par exemple, ajouter/supprimer une classe sur le body ou utiliser un context
    if (event.target.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
    console.log('Mode sombre:', event.target.checked);
  };

  // Charger la préférence du mode sombre au démarrage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Box className="w-64 bg-gray-50 min-h-screen p-6 dark:bg-gray-900">
      <Box className="space-y-8">
        {/* Section Menu */}
        <Box>
          <Typography className="text-sm font-medium text-gray-500 mb-4 dark:text-gray-400 text-start">
            Menu
          </Typography>
          <List className="space-y-2" sx={{ padding: 0 }}>
            {menuItems.map((item) => {
              const isActive = isLinkActive(item.link);
              return (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    onClick={() => handleNavigation(item.link)}
                    className={`rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                    sx={{
                      borderRadius: '0.5rem',
                      marginBottom: '0.5rem',
                      backgroundColor: isActive 
                        ? (darkMode ? 'rgba(59, 130, 246, 0.1)' : '#eff6ff')
                        : 'transparent',
                      color: isActive 
                        ? (darkMode ? '#60a5fa' : '#2563eb')
                        : (darkMode ? '#d1d5db' : '#4b5563'),
                      '&:hover': {
                        backgroundColor: isActive 
                          ? (darkMode ? 'rgba(59, 130, 246, 0.15)' : '#eff6ff')
                          : (darkMode ? '#374151' : '#f3f4f6'),
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: '32px',
                        color: isActive 
                          ? (darkMode ? '#60a5fa' : '#2563eb')
                          : (darkMode ? '#9ca3af' : '#9ca3af'),
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: isActive ? 500 : 400,
                          fontSize: '0.875rem',
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* Divider */}
        <Divider className="dark:border-gray-700" />

        {/* Section Bibliothèque */}
        <Box>
          <Typography className="text-sm font-medium text-gray-500 mb-4 dark:text-gray-400 text-start">
            Bibliothèque
          </Typography>
          <List className="space-y-2" sx={{ padding: 0 }}>
            {libraryItems.map((item) => {
              const isActive = isLinkActive(item.link);
              return (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    onClick={() => handleNavigation(item.link)}
                    className={`rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                    sx={{
                      borderRadius: '0.5rem',
                      marginBottom: '0.5rem',
                      backgroundColor: isActive 
                        ? (darkMode ? 'rgba(59, 130, 246, 0.1)' : '#eff6ff')
                        : 'transparent',
                      color: isActive 
                        ? (darkMode ? '#60a5fa' : '#2563eb')
                        : (darkMode ? '#d1d5db' : '#4b5563'),
                      '&:hover': {
                        backgroundColor: isActive 
                          ? (darkMode ? 'rgba(59, 130, 246, 0.15)' : '#eff6ff')
                          : (darkMode ? '#374151' : '#f3f4f6'),
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: '32px',
                        color: isActive 
                          ? (darkMode ? '#60a5fa' : '#2563eb')
                          : (darkMode ? '#9ca3af' : '#9ca3af'),
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontSize: '0.875rem',
                          fontWeight: isActive ? 500 : 400,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}

            {/* Mode sombre avec switch */}
            <ListItem disablePadding>
              <ListItemButton
                className="text-gray-600 rounded-lg dark:text-gray-300"
                sx={{
                  borderRadius: '0.5rem',
                  color: darkMode ? '#d1d5db' : '#4b5563',
                  cursor: 'default',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: '32px',
                    color: darkMode ? '#9ca3af' : '#9ca3af',
                  }}
                >
                  <DarkMode />
                </ListItemIcon>
                <ListItemText
                  primary="Mode sombre"
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.875rem',
                    },
                  }}
                />
                <Switch
                  checked={darkMode}
                  onChange={handleDarkModeToggle}
                  size="small"
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#2563eb',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#2563eb',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default AsideBarLeft;