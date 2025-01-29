
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[rgb(240,240,240)] text-black py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">

        {/* Logo & Social Icons */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            Karishna Academy<span className="text-blue-500">.</span>
          </h1>
          <div className="flex space-x-3">
            <FaTwitter className="p-2 w-10 h-10 bg-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300" />
            <FaLinkedinIn className="p-2 w-10 h-10 bg-gray-300 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-300" />
            <FaFacebookF className="p-2 w-10 h-10 bg-gray-300 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300" />
          </div>
        </div>

        {/* Industries Section */}
        <div>
          <h3 className="font-bold">Industries</h3>
          <ul className="space-y-2">
            <li>Private Wireless Networks</li>
            <li>Education</li>
            <li>Healthcare</li>
            <li>Public Sector</li>
            <li>Communication Services</li>
            <li>Transportation</li>
            <li>EV Charging</li>
            <li>Industrial IoT</li>
          </ul>
        </div>

        {/* Resource Center Section */}
        <div>
          <h3 className="font-bold">Resource Center</h3>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Downloadable Content</li>
            <li>FAQs</li>
            <li>Webinars</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="space-y-2">
            <li>Leadership</li>
            <li>Our Partners</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Patents and IP</li>
            <li>Legal</li>
          </ul>
        </div>

        {/* Contact & Address Section */}
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <div className="space-y-2">
            <p><strong>Branch 1:</strong> Karishna Academy On, Kharadi - Hadapsar Bypass Rd, opposite NOVA IVF Center, Sambhajinagar, Kharadi, Pune, Maharashtra 411014</p>
            <p><strong>Branch 2:</strong> Raigad colony, Thite vasti, Pune, Maharashtra-411014</p>
            <p><strong>Mobile:</strong> 8983498396, 7385924979</p>
            <p><strong>Email:</strong> <a href="mailto:hrkarishnaacademy@gmail.com" className="text-blue-500">hrkarishnaacademy@gmail.com</a></p>
          </div>
        </div>
      </div>

      {/* Copyright & Privacy Policy Section */}
      <div className="text-center text-xs mt-10 border-t pt-4">
        <p>
          Copyright &copy; 2025 All rights reserved. Karishna Academy | 
          <span className="text-blue-500 cursor-pointer">
            <a href="/privacy-policy"> Privacy Policy </a>
          </span> | 
          <span className="text-blue-500"> Patents & IP Rights </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

