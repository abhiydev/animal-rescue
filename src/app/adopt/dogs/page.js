import Image from "next/image";

// Frontend Component with Mock Data
const Dogs = () => {
  // Mock data to be replaced with an API call later
  const dogs = [
    {
      id: 1,
      name: "Buddy",
      description: "A friendly dog looking for a loving family.",
      imageUrl:
        "https://images.pexels.com/photos/4587999/pexels-photo-4587999.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Charlie",
      description: "A loyal companion ready for adoption.",
      imageUrl:
        "https://images.pexels.com/photos/4588000/pexels-photo-4588000.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Max",
      description: "An energetic pup that loves to play.",
      imageUrl:
        "https://images.pexels.com/photos/4588001/pexels-photo-4588001.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    // Add more mock dogs if needed
  ];

  // const res = await fetch("/api/dogs"); // Replace with actual API endpoint
// const dogs = await res.json();


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Adopt a Dog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dogs.map((dog) => (
          <div
            key={dog.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={dog.imageUrl}
                alt={dog.name}
                width={500}
                height={300}
                className="w-full h-auto transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4 text-white transition-opacity duration-300 hover:bg-opacity-70">
              <h3 className="text-lg font-bold transition-transform duration-500 ease-in-out hover:translate-y-1">
                {dog.name}
              </h3>
              <p className="text-sm mb-4 opacity-90 transition-opacity duration-300 hover:opacity-100">
                {dog.description}
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

export default Dogs;
