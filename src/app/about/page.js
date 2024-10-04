import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-pink-400 py-10 animate-gradientShift bg-[length:200%_200%]">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold text-white mb-4 animate-fadeInDown">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-200 max-w-xl mx-auto animate-fadeInUp">
          We are passionate about helping animals find loving homes. Here's a little about us!
        </p>
      </section>

      {/* Team Section */}
      <section className="flex flex-wrap justify-center gap-8 px-6">
        {/* Team Member 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 group">
          <div className="w-full h-60 relative overflow-hidden rounded-lg mb-4">
            <Image
              src="https://media.licdn.com/dms/image/v2/D5603AQGiqXmMZd7jZg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711097095218?e=1733356800&v=beta&t=u8H9cpxErjuLKE_L7ZOTxEoiedaTA5kAu8r5-e40YY8" // Replace with actual team photo URL
              alt="Team Member 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">
            Deepti Vaja
          </h2>
          <p className="text-gray-600 mt-2">
            Description of Team Member 1. Their role, experience, and passions about the mission.
          </p>
        </div>

        {/* Add more team members as needed */}
      </section>
    </div>
  );
};

export default AboutUs;
