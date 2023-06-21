import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import LogoIcon from './icons/logo'; // Assuming you have a custom LogoIcon component
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-blue-100 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between">
                <div className="w-full sm:w-auto mb-4 sm:mb-0 flex-grow">
                  <div className="flex items-center mb-4">
                    <Link href="/"><LogoIcon /></Link>
                  </div>
                  <div className="flex">
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                      <FaFacebook className="text-gray-500 hover:text-gray-700" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                      <FaTwitter className="text-gray-500 hover:text-gray-700" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                      <FaInstagram className="text-gray-500 hover:text-gray-700" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-gray-500 hover:text-gray-700" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Duplicate columns except for Company 5 */}
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-4">Why Scissor ?</h2>
                <ul>
                  <li>Scissors 101</li>
                  <li>Integrations and Api</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-4">Solutions</h2>
                <ul>
                  <li>Social Media Marketing</li>
                  <li>Digital Markerting</li>
                  <li>Customer Service</li>
                  <li>For Developers</li>
                </ul>
              </div>
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-4">Products</h2>
                <ul>
                  <li>Link Management</li>
                  <li>QR Code </li>
                  <li>Link in-bio</li>
                </ul>
              </div>
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-4">Company </h2>
                <ul>
                  <li>About Scissors</li>
                  <li>Careers</li>
                  <li>Partners</li>
                  <li>Press</li>
                  <li>Contact</li>
                  <li>Reviews</li>
                </ul>
              </div>
              
              {/* Duplicate columns except for Company 5 */}
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-4">Resources</h2>
                <ul>
                <li>Blog</li>
                  <li>Resource Library</li>
                  <li>Developers</li>
                  <li>App Connectors</li>
                  <li>Support</li>
                  <li>Trust Center</li>
                  <li>Browser Extension</li>
                  <li>Mobile App</li>
                </ul>
              </div>
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-4">Features</h2>
                <ul>
                  <li>Branded Link</li>
                  <li>Mobile Link</li>
                  <li>Campaign</li>
                  <li>Management and Analytics</li>
                  <li>QR Code Generation</li>
                </ul>
              </div>
              <div className="col-span-1">
                <h2 className="text-lg font-semibold mb-4">Legal</h2>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Terms of Services</li>
                  <li>Acceptable use of Policy</li>
                  <li>Code of Conduct</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-end">
          <p className="text-sm">
            Term of Service | Security | 2023 Scissor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
