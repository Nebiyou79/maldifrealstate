import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const RentPage = () => {
  const [selectedImage, setSelectedImage] = useState<{ [key: number]: string }>({});

  const properties = [
    {
      title: 'Modern Apartment',
      video: '/assets/mald1.mp4',
      images: ['/assets/house1.jpg', '/assets/house2.jpg', '/assets/house7.jpg'],
      description: 'Spacious modern apartment with stunning views.',
      area: '110 sqm',
      bedrooms: 3,
      bathrooms: 2,
      pricePerArea: '90,000 Birr/sqm',
      location: 'Addis Ababa, Ethiopia',
      mapLink: 'https://maps.app.goo.gl/944EC9ucTVy3r4n87'
    },
    {
      title: 'Luxury Apartment',
      video: '/assets/mald4.mp4',
      images: ['/assets/house1.jpg', '/assets/house2.jpg', '/assets/house7.jpg'],
      description: 'Experience luxury living at its finest.',
      area: '100.5 sqm',
      bedrooms: 2,
      bathrooms: 2,
      pricePerArea: '90,000 Birr/sqm',
      location: 'Bole, Addis Ababa, Ethiopia',
      mapLink: 'https://maps.app.goo.gl/944EC9ucTVy3r4n87'
    },
  ];

  return (
    <div className="bg-background text-text">
      <Navbar />
      <div className="container mx-auto py-16 px-4">
        <div className="flex items-center gap-5 space-x-2 pb-4">
          <Image 
            src="/assets/logo.png" 
            alt="Maldif Real Estate Logo" 
            width={148}
            height={148} 
            className="rounded-full"
          />
         <span className="text-5xl font-bold text-black">Maldif Real Estate</span>
        </div>
        <div className='bg-gray-800'>
        <h1 className="text-5xl text-white text-center font-bold mb-6">Our Properties</h1>
        <h2 className="text-4xl text-white text-center font-semibold mb-6">Houses For Rent</h2>    
        </div>    
        <div className="space-y-12">
          {properties.map((property, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
              <div className="w-full md:w-1/2">
                <video className="w-full h-auto max-h-[250px] rounded-lg object-cover" controls>
                  <source src={property.video} type="video/mp4" />
                </video>
                <div className="mt-3">
                  <Image src={selectedImage[idx] || property.images[0]} alt="Interior" width={400} height={300} className="rounded-lg mb-2" />
                  <div className="flex overflow-x-scroll space-x-2 scrollbar-hide">
                    {property.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt="Interior"
                        width={80}
                        height={60}
                        className="rounded-lg cursor-pointer"
                        onClick={() => setSelectedImage((prev) => ({ ...prev, [idx]: image }))}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
                <h3 className="text-3xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.description}</p>
                <ul className="text-xl">
                  <li><strong>Area:</strong> {property.area}</li>
                  <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
                  <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
                  <li><strong>Price per Area:</strong> {property.pricePerArea}</li>
                </ul>
                <div className="mt-4">
                  <p className="text-sm font-bold">Location:</p>
                  <a href={property.mapLink} target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/map-thumbnail.jpg" alt="Map location" width={200} height={150} className="rounded-lg shadow-md cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RentPage;
