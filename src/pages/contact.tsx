import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const ContactUsPage = () => {
  const contactInfo = [
    { type: 'Phone', value: '1. 0977809831 \n2. 0911249802 \n3. +1(713) 855-5892' },
    { type: 'Email', value: 'maldifrealstate@gmail.com', link: 'mailto:maldifrealstate@gmail.com' },
    { 
      type: 'Location', 
      value: 'Bole Road, Addis Ababa, Ethiopia', 
      link: 'https://maps.app.goo.gl/944EC9ucTVy3r4n87' 
    },
    { 
      type: 'WhatsApp', 
      value: '+1(713) 855-5892', 
      icon: <FaWhatsapp className="inline text-green-500" />, 
      link: 'https://wa.me/17138555892' 
    },
    { 
      type: 'Other Locations', 
      value: '1. Bole Ruanda, Addis Abeba\n2. Bole Bulbula, Addis Abeba\n3. CMC, Addis Abeba\n4. Lafto, Addis Abeba' 
    },
  ];

    const socialMediaLinks = [
      { icon: <FaFacebook />, href: 'https://www.facebook.com/profile.php?id=61568774526965&mibextid=ZbWKwL', color: 'text-blue-600' },
      { icon: <FaInstagram />, href: 'https://www.instagram.com/maldifrealstate/', color: 'text-pink-500' },
      { icon: <FaTiktok />, href: 'https://https://www.tiktok.com/@maldifrealstate?_r=1&_d=e93jfcfhkjhgmk&sec_uid=MS4wLjABAAAAFvsDnFtAlpHAReww08gkXCV75BFoMZoqItyJqJ4QwTQ8LGlX6o_y0y2buHDlOiPI&share_author_id=7334596929067992069&sharer_language=en&source=h5_m&u_code=ecfji8kmfkh18m&timestamp=1734958600&user_id=7334596929067992069&sec_user_id=MS4wLjABAAAAFvsDnFtAlpHAReww08gkXCV75BFoMZoqItyJqJ4QwTQ8LGlX6o_y0y2buHDlOiPI&utm_source=telegram&utm_campaign=client_share&utm_medium=android&share_iid=7451042732200134405&share_link_id=5fa77166-5175-42f5-99dc-f4bc53c8bd93&share_app_id=1233&ugbiz_name=ACCOUNT&social_share_type=5&enable_checksum=1', color: 'text-black' },
      { icon: <FaYoutube />, href: 'https://www.youtube.com/@maldifrealstate', color: 'text-red-600' },
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
                      {info.icon} {info.value}
                    </a>
                  ) : (
                    <p className="text-lg whitespace-pre-wrap">{info.value}</p>
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
