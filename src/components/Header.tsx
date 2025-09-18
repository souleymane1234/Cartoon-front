import { Search, Bell} from 'lucide-react';

const Header = () => {



  return (
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <div className="text-2xl font-bold text-gray-900">Cartoon.com</div>
        
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher"
              className="w-full px-4 py-2 text-gray-600 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 text-white rounded-full bg-[#7B61FF] hover:bg-[#4d2cf3]">
            S'abonner
          </button>
          <div className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
          </div>
          <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
        </div>
      </nav>
  );
};

export default Header;
