import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { 
  FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp, FaViber, FaTelegram 
} from 'react-icons/fa';
import { MdMessage } from 'react-icons/md'; // Botim placeholder icon

const ContactUsPage = () => {
  const contactInfo = [
    { 
      type: 'Phone', 
      value: '1. 0977809831 \n2. 0911249802 \n3. +1(713) 855-5892' 
    },
    { 
      type: 'Email', 
      value: 'maldifrealstate@gmail.com', 
      icon: <MdMessage className="inline text-gray-400" />, 
      link: 'mailto:maldifrealstate@gmail.com' 
    },
    { 
      type: 'Location', 
      value: 'Bole Road, Addis Ababa, Ethiopia', 
      link: 'https://maps.app.goo.gl/AQFzW1fSmXxbKExy8' 
    },
    { 
      type: 'WhatsApp', 
      value: '+1(713) 855-5892', 
      icon: <FaWhatsapp className="inline text-green-500" />, 
      link: 'https://wa.me/17138555892' 
    },
    { 
      type: 'Viber', 
      value: '+251977809831', 
      icon: <FaViber className="inline text-purple-500" />, 
      link: 'viber://chat?number=%2B251977809831' 
    },
    { 
      type: 'Botim', 
      value: '+251911249802', 
      icon: <MdMessage className="inline text-blue-400" />, 
      link: 'https://botim.me/' 
    },
    { 
      type: 'Telegram', 
      value: 't.me/maldifrealestate', 
      icon: <FaTelegram className="inline text-sky-500" />, 
      link: 'https://t.me/maldifrealestate' 
    },
    { 
      type: 'Other Locations', 
      value: '1. Bole Ruanda, Addis Abeba\n2. Bole Bulbula, Addis Abeba\n3. CMC, Addis Abeba\n4. Lafto, Addis Abeba' 
    },
  ];

  const socialMediaLinks = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com/profile.php?id=61568774526965&mibextid=ZbWKwL', color: 'text-blue-600' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/maldifrealstate/', color: 'text-pink-500' },
    { icon: <FaTiktok />, href: 'https://www.tiktok.com/@maldifrealstate', color: 'text-black' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/@maldifrealstate', color: 'text-red-600' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/17138555892', color: 'text-green-500' },
    { icon: <FaViber />, href: 'viber://chat?number=%2B251977809831', color: 'text-purple-500' },
    { icon: <MdMessage />, href: 'https://botim.me/', color: 'text-blue-400' },
    { icon: <FaTelegram />, href: 'https://t.me/maldifrealestate', color: 'text-sky-500' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="shadow-md">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto py-16">
          
          {/* Contact Information Section */}
          <section className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-r from-indigo-800 to-blue-400 text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl"
                >
                  <h3 className="text-2xl font-bold mb-2">{info.type}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg underline hover:text-yellow-300 transition"
                    >
                      {info.icon && <span className="mr-2">{info.icon}</span>}
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg whitespace-pre-wrap">
                      {info.icon && <span className="mr-2">{info.icon}</span>}
                      {info.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Social Media Section */}
          <section className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Follow Us</h2>
            <div className="flex justify-center space-x-8">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-4xl hover:scale-125 transition ${link.color}`}
                  title={link.href}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default ContactUsPage;
