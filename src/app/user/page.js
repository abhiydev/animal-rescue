"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa"; // Importing the plus icon

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    description: "Animal rights advocate, and pet lover. Helping animals find a forever home.",
    contact: "+1234567890",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      petImage: "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Cute little kitten looking for a loving home.",
      contact: "+1234567890",
      category: "Cats",
    },
    {
      id: 2,
      petImage: "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Friendly dog, loves playing and cuddles.",
      contact: "+9876543210",
      category: "Dogs",
    },
  ]);

  const [newPost, setNewPost] = useState({
    petImage: null,
    description: "",
    contact: "",
    category: "Dogs", // Default category
  });

  // Handle image changes
  const handlePostImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost((prevPost) => ({
        ...prevPost,
        petImage: file,
      }));

      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  // Handle input changes for user info
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Handle input changes for new post
  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // Save profile updates
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  // Handle adding a new post
  const handleAddPost = (e) => {
    e.preventDefault();
    const post = {
      id: posts.length + 1,
      petImage: URL.createObjectURL(newPost.petImage),
      description: newPost.description,
      contact: newPost.contact,
      category: newPost.category,
    };
    setPosts((prevPosts) => [...prevPosts, post]);
    setNewPost({ petImage: null, description: "", contact: "", category: "Dogs" });
    setImagePreview(null); // Reset image preview after adding the post
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Profile Header */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-8">
        <div className="flex items-center space-x-6">
          <div className="relative">
            {userInfo.image ? (
              <img
                src={URL.createObjectURL(userInfo.image)}
                alt="Profile"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-yellow-400 object-cover"
              />
            ) : (
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-yellow-400 bg-gray-300 flex items-center justify-center text-gray-500 text-2xl">
                {userInfo.name.charAt(0)}
              </div>
            )}
            {!isEditing && (
              <button
                className="absolute bottom-0 right-0 bg-yellow-500 text-white p-2 rounded-full"
                onClick={() => setIsEditing(true)}
              >
                ✏️
              </button>
            )}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{userInfo.name}</h1>
            <p className="text-gray-600">{userInfo.description}</p>
            <p className="text-gray-500 mt-1">{userInfo.contact}</p>
          </div>
        </div>
        {isEditing && (
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-600">Profile Picture:</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Name:</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Description:</label>
              <textarea
                name="description"
                value={userInfo.description}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Contact:</label>
              <input
                type="tel"
                name="contact"
                value={userInfo.contact}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400"
            >
              Save Changes
            </button>
          </form>
        )}
      </div>

      {/* Add New Post */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-8 transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-600 border-b border-gray-300 pb-2">Add a New Pet</h2>
        <form onSubmit={handleAddPost} className="grid grid-cols-1 gap-6">
          <div className="sm:col-span-2">
            <label className="block text-gray-600 mb-2 font-medium">Pet Image:</label>
            <div className="flex items-center justify-center mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handlePostImageChange}
                required
                className="hidden"
                id="petImageInput" // Hidden file input
              />
              <label htmlFor="petImageInput" className="relative cursor-pointer">
                <div className="w-52 h-52 rounded-full border-4 border-yellow-400 bg-gray-300 flex items-center justify-center overflow-hidden">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <FaPlus className="text-yellow-500 text-4xl" />
                  )}
                </div>
              </label>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-600 mb-2 font-medium">Description:</label>
            <textarea
              name="description"
              value={newPost.description}
              onChange={handlePostChange}
              className="border border-gray-300 rounded-md p-2 w-full h-24 transition duration-150 ease-in-out focus:ring focus:ring-yellow-300"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-600 mb-2 font-medium">Contact:</label>
            <input
              type="tel"
              name="contact"
              value={newPost.contact}
              onChange={handlePostChange}
              className="border border-gray-300 rounded-md p-2 w-full transition duration-150 ease-in-out focus:ring focus:ring-yellow-300"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-600 mb-2 font-medium">Category:</label>
            <select
              name="category"
              value={newPost.category}
              onChange={handlePostChange}
              className="border border-gray-300 rounded-md p-2 w-full transition duration-150 ease-in-out focus:ring focus:ring-yellow-300"
              required
            >
              <option value="Dogs">Dogs</option>
              <option value="Cats">Cats</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition duration-200 ease-in-out w-full flex items-center justify-center"
            >
              <span className="mr-2">🐾</span>
              Add Post
            </button>
          </div>
        </form>
      </div>

      {/* Display Posts */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-600 border-b border-gray-300 pb-2">Posts</h2>
        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="border border-gray-300 rounded-lg p-4">
              <img src={post.petImage} alt="Pet" className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-bold">{post.category}</h3>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-gray-500 mt-1">{post.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
