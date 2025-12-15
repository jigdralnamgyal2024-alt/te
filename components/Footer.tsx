import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <div className="flex justify-center space-x-6 mb-8">
            {/* Social Placeholders */}
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bhutan-red transition-colors">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bhutan-red transition-colors">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-bhutan-red transition-colors">
                <i className="fab fa-instagram"></i>
            </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Jigdral Namgyal. All rights reserved. <br/>
          Made with ❤️ in Trashi Yangtse.
        </p>
      </div>
    </footer>
  );
};

export default Footer;