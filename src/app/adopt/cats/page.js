import Image from "next/image";

// Frontend Component with Mock Data
const Cats = () => {
  // Mock data to be replaced with an API call later
  const cats = [
    {
      id: 1,
      name: "Whiskers",
      description: "A curious kitten looking for a loving family.",
      imageUrl:
        "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Mittens",
      description: "A calm and playful adult cat.",
      imageUrl:
        "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Shadow",
      description: "A mysterious and independent cat.",
      imageUrl:
        "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    // Add more mock cats if needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Adopt a Cat</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cats.map((cat) => (
          <div
            key={cat.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={cat.imageUrl}
                alt={cat.name}
                width={500}
                height={300}
                className="w-full h-auto transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-4 text-white transition-opacity duration-300 hover:bg-opacity-70">
              <h3 className="text-lg font-bold transition-transform duration-500 ease-in-out hover:translate-y-1">
                {cat.name}
              </h3>
              <p className="text-sm mb-4 opacity-90 transition-opacity duration-300 hover:opacity-100">
                {cat.description}
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

export default Cats;
