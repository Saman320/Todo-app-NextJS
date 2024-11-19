import React from 'react';
import Link from 'next/link'; // Import Next.js Link

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#164e63] via-[#082f49] to-gray-600 text-white hover:text-gray-400 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Todo App. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/privacy-policy"
            className="text-white hover:text-gray-400 transition duration-300">
              Privacy Policy
            
          </Link>
          <Link href="/terms-of-service"
             className="text-white hover:text-gray-400 transition duration-300">
              Terms of Service
        
          </Link>
          <Link href="/contact"
            className="text-white hover:text-gray-400 transition duration-300">
              Feedback
            
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
