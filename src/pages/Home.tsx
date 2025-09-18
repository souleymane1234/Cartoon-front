import React from 'react';
import AsideBarRight from '../components/AsideBarRight';
import Main from '../components/Main';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="flex h-screen max-w-full">
        
        <div className="flex-1 h-full overflow-y-auto overflow-x-hidden min-w-0">
          <Main />
        </div>
        
        <div className="flex-shrink-0 w-80 h-full overflow-y-auto overflow-x-hidden bg-gray-50">
          <AsideBarRight />
        </div>
        
      </div>
    </div>
  );
};

export default Home;