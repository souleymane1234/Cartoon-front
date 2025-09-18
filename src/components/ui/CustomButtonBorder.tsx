import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CustomButtonBorderProps extends React.ComponentProps<typeof Button> {
  title: string;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CustomButtonBorder: React.FC<CustomButtonBorderProps> = ({ title, link, onClick, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
      variant="outlined"
      sx={{
        borderColor: '#7B61FF',
        color: '#7B61FF',
        backgroundColor: '#fff',
        borderRadius: '9999px',
        width: '12rem',
        padding: '0.5rem 2.5rem',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#7B61FF',
          color: '#fff',
          borderColor: '#7B61FF',
        },
      }}
      onClick={handleClick}
      {...props}
    >
      {title}
    </Button>
  );
};

export default CustomButtonBorder;

// Exemples d'utilisation :

// 1. Navigation interne
// <CustomButton title="Voir tout" link="/cartoons" />

// 2. Lien externe
// <CustomButton title="En savoir plus" link="https://example.com" />

// 3. Action personnalisée
// <CustomButton 
//   title="Action custom" 
//   onClick={() => console.log('Action personnalisée')}
// />

// 4. Navigation + action personnalisée
// <CustomButton 
//   title="Sauvegarder et continuer" 
//   link="/next-page"
//   onClick={() => saveData()}
// />

// 5. Avec props MUI additionnelles
// <CustomButton 
//   title="Bouton désactivé" 
//   link="/somewhere"
//   disabled
//   size="small"
// />