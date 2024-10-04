import Image from "next/image";

// Frontend Component with Mock Data for Other Animals
const OtherAnimals = () => {
  // Mock data to be replaced with an API call later
  const animals = [
    {
      id: 1,
      name: "Parrot",
      description: "A colorful and talkative parrot looking for a new home.",
      imageUrl:
        "https://images.pexels.com/photos/4587979/pexels-photo-4587979.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Turtle",
      description: "A quiet and friendly turtle ready for adoption.",
      imageUrl:
        "https://images.pexels.com/photos/730896/pexels-photo-730896.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Rabbit",
      description: "A fluffy rabbit who loves to hop around and play.",
      imageUrl:
        "https://images.pexels.com/photos/333566/pexels-photo-333566.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    // Add more mock animals if needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Adopt Other Animals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={animal.imageUrl}
                alt={animal.name}
                width={500}
                height={300}
                className="w-full h-auto transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4 text-white transition-opacity duration-300 hover:bg-opacity-70">
              <h3 className="text-lg font-bold transition-transform duration-500 ease-in-out hover:translate-y-1">
                {animal.name}
              </h3>
              <p className="text-sm mb-4 opacity-90 transition-opacity duration-300 hover:opacity-100">
                {animal.description}
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-4 rounded-lg transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                Contact Me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherAnimals;