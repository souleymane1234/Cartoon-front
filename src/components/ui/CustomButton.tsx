import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type CustomButtonProps = {
  title: string;
  link?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: any;
};

const CustomButton = ({ title, link, icon, onClick, ...props }: CustomButtonProps) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    
    if (link) {
      // Si le lien commence par http, ouvre dans un nouvel onglet
      if (link.startsWith('http')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        // Navigation interne avec React Router
        navigate(link);
      }
    }
  };

  return (
    <Button
      onClick={handleClick}
      startIcon={icon}
      sx={{
        backgroundColor: '#7B61FF',
        color: '#fff',
        borderColor: '#7B61FF',
        borderRadius: '9999px',
        padding: '0.5rem 1.5rem',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#4d2cf3',
          borderColor: '#7B61FF',
        },
        // Styles pour l'icône
        '& .MuiButton-startIcon': {
          marginRight: '0.5rem',
          '& svg': {
            fontSize: '1.1rem',
          },
        },
      }}
      {...props}
    >
      {title}
    </Button>
  );
};

export default CustomButton;

// Exemples d'utilisation avec icônes :

// import { 
//   Visibility, 
//   Star, 
//   Download, 
//   PlayArrow, 
//   Add, 
//   ArrowForward,
//   Bookmark,
//   Share,
//   FavoriteBorder
// } from '@mui/icons-material';

// 1. Bouton avec icône "Voir"
// <CustomButton 
//   title="Voir tout" 
//   icon={<Visibility />}
//   link="/all-items" 
// />

// 2. Bouton avec icône "Étoile"
// <CustomButton 
//   title="Ajouter aux favoris" 
//   icon={<Star />}
//   onClick={() => addToFavorites()}
// />

// 3. Bouton avec icône "Téléchargement"
// <CustomButton 
//   title="Télécharger" 
//   icon={<Download />}
//   onClick={() => downloadFile()}
// />

// 4. Bouton avec icône "Play"
// <CustomButton 
//   title="Regarder maintenant" 
//   icon={<PlayArrow />}
//   link="/watch/123"
// />

// 5. Bouton avec icône "Ajouter"
// <CustomButton 
//   title="Ajouter à la liste" 
//   icon={<Add />}
//   onClick={() => addToList()}
// />

// 6. Bouton avec icône "Flèche"
// <CustomButton 
//   title="Continuer" 
//   icon={<ArrowForward />}
//   link="/next-step"
// />

// 7. Bouton avec icône "Bookmark"
// <CustomButton 
//   title="Marquer" 
//   icon={<Bookmark />}
//   onClick={() => bookmarkItem()}
// />

// 8. Bouton avec icône "Partager"
// <CustomButton 
//   title="Partager" 
//   icon={<Share />}
//   onClick={() => shareItem()}
// />

// 9. Sans icône (comportement original)
// <CustomButton 
//   title="Voir tout" 
//   link="/all" 
// />