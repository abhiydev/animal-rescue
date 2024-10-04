"use client";

import { useState } from "react";

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
    },
    {
      id: 2,
      petImage: "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Friendly dog, loves playing and cuddles.",
      contact: "+9876543210",
    },
  ]);

  const [newPost, setNewPost] = useState({
    petImage: null,
    description: "",
    contact: "",
  });

  // Handle image and input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        image: file,
      }));

      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handlePostImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPost((prevPost) => ({
        ...prevPost,
        petImage: file,
      }));
    }
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
    };
    setPosts((prevPosts) => [...prevPosts, post]);
    setNewPost({ petImage: null, description: "", contact: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Profile Header */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-8">
        <div className="flex items-center space-x-6">
          <div className="relative">
            {imagePreview ? (
              <img
                src={imagePreview}
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
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mb-8">
        <h2 className="text-xl font-semibold mb-4">Add a New Post</h2>
        <form onSubmit={handleAddPost} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-gray-600 mb-1">Pet Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handlePostImageChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-600 mb-1">Description:</label>
            <textarea
              name="description"
              value={newPost.description}
              onChange={handlePostChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-gray-600 mb-1">Contact:</label>
            <input
              type="tel"
              name="contact"
              value={newPost.contact}
              onChange={handlePostChange}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-400 w-full"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>

      {/* Posts Grid */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4">Your Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.petImage}
                alt="Pet for adoption"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700 mb-2">{post.description}</p>
                <p className="text-gray-500">Contact: {post.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
