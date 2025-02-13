import React from 'react';
import Image from 'next/image'; // Changed from <img> to Next.js <Image> for better optimization
import Slider from 'react-slick'; // Importing slider library, ensure to install 'react-slick' and 'slick-carousel'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AboutUsPage = () => {
  const coreValues = [
    { title: 'Exceptional Quality:', description: ' We prioritize excellence in every detail of our properties.' },
    { title: 'Innovative Designs:', description: ' Our projects blend modern architecture with timeless elegance.' },
    { title: 'Customer-Centric Approach:', description: ' Your satisfaction is at the core of everything we do.' },
    { title: 'Local Expertise:', description: ' With a profound knowledge of the Ethiopian market, we provide reliable guidance and solutions.' },
  ];

  const customerReplies = [
    { name: 'Binyam Sime', comment: 'Maldif Real Estate helped me find my dream home seamlessly!' },
    { name: 'Nebiyou Girma', comment: 'Exceptional service and professional staff. Highly recommend!' },
    { name: 'Selamawit Worku', comment: 'They provide the best housing solutions in Addis Ababa!' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-background text-text">
      <Navbar />
      {/* Slider Section */}
      <section className="py-8">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    <div className="w-full md:w-1/2">
      <Slider {...sliderSettings} className="max-w-full">
        <div className="p-2">
          <Image
            src="/assets/house (11).jpg"
            alt="Slider 1"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="p-2">
          <Image
            src="/assets/house (10).jpg"
            alt="Slider 2"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="p-2">
          <Image
            src="/assets/house (11).jpg"
            alt="Slider 3"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
      </Slider>
    </div>
    <div className="w-full md:w-1/2 md:ml-8 mt-8 md:mt-0 text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
      <p className="text-sm md:text-base leading-relaxed">
        Welcome to Maldif Real Estate, where your dream home meets exceptional
        service. Based in the heart of Ethiopia, we are committed to redefining
        the real estate experience by providing innovative, reliable, and
        customer-focused solutions.
      </p>
    </div>
  </div>
</section>


      {/* Core Values Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="p-6 bg-secondary rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Replies Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
          <Slider {...sliderSettings}>
            {customerReplies.map((reply, index) => (
              <div key={index} className="p-6">
                <p className="italic text-lg">{reply.comment}</p>
                <h3 className="mt-4 font-bold">- {reply.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be the leading real estate company in Ethiopia, recognized for our quality developments, ethical practices, and unparalleled customer satisfaction.
          </p>
        </div>
      </section>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To transform lives by creating spaces that inspire and elevate living standards in Ethiopia.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="rounded-full w-32 mx-auto overflow-hidden">
                <Image src="/assets/team1.jpg" alt="Team Member 1" width={128} height={128} className="rounded-full" />
              </div>
              <h3 className="mt-4 font-bold">Ephrem Sime</h3>
              <p>CEO</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="rounded-full w-32 mx-auto overflow-hidden">
                <Image src="/assets/team2.jpg" alt="Team Member 2" width={128} height={128} className="rounded-full" />
              </div>
              <h3 className="mt-4 font-bold">Solomon Sime</h3>
              <p>Marketing Manager</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="rounded-full w-32 mx-auto overflow-hidden">
                <Image src="/assets/team3.jpg" alt="Team Member 3" width={128} height={128} className="rounded-full" />
              </div>
              <h3 className="mt-4 font-bold">Yosef Sime</h3>
              <p>Operations Manager</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
