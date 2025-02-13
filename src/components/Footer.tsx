import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Company Name */}
        <div className="flex flex-col items-start">
          <Image
             src="/assets/logo.png" 
             alt="Maldif Real Estate Logo" 
             width={202} 
             height={202} 
             className="px-4"
            />
          <span className="text-xl text-center px-3 font-bold">Maldif Real Estate</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="/houses" className="hover:text-primary">Houses</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center pr-5">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href='https://www.facebook.com/profile.php?id=61568774526965&mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600 hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/maldifrealstate/" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-500 hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href='https://https://www.tiktok.com/@maldifrealstate?_r=1&_d=e93jfcfhkjhgmk&sec_uid=MS4wLjABAAAAFvsDnFtAlpHAReww08gkXCV75BFoMZoqItyJqJ4QwTQ8LGlX6o_y0y2buHDlOiPI&share_author_id=7334596929067992069&sharer_language=en&source=h5_m&u_code=ecfji8kmfkh18m&timestamp=1734958600&user_id=7334596929067992069&sec_user_id=MS4wLjABAAAAFvsDnFtAlpHAReww08gkXCV75BFoMZoqItyJqJ4QwTQ8LGlX6o_y0y2buHDlOiPI&utm_source=telegram&utm_campaign=client_share&utm_medium=android&share_iid=7451042732200134405&share_link_id=5fa77166-5175-42f5-99dc-f4bc53c8bd93&share_app_id=1233&ugbiz_name=ACCOUNT&social_share_type=5&enable_checksum=1' target="_blank" rel="noopener noreferrer" className="text-2xl text-black hover:scale-110 transition">
              <FaTiktok />
            </a>
            <a href="https://www.youtube.com/@maldifrealstate" target="_blank" rel="noopener noreferrer" className="text-2xl text-red-600 hover:scale-110 transition">
              <FaYoutube />
            </a>
          </div>
           {/* QR Code */}
           <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-2">Whasapp QR Code</h4>
            <Image
              src="/qr-code.png"  // Place the QR code image in /public/assets/
              alt="Whats App for Maldif Real Estate"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Maldif Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;