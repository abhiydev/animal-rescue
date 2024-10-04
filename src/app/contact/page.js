const Contact = () => {
    return (
      <div className="container mx-auto p-6 md:p-12 max-w-4xl bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          We’d love to hear from you! If you have any questions, feedback, or concerns, feel free to reach out.
        </p>
  
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Email</h2>
          <p className="text-gray-700 mb-4">
            For general inquiries: <a href="mailto:info@adopt-me.com" className="text-blue-500 hover:underline">info@adopt-me.com</a>
          </p>
          <p className="text-gray-700 mb-4">
            For support: <a href="mailto:support@adopt-me.com" className="text-blue-500 hover:underline">support@adopt-me.com</a>
          </p>
          <p className="text-gray-700 mb-4">
            For partnerships: <a href="mailto:partners@adopt-me.com" className="text-blue-500 hover:underline">partners@adopt-me.com</a>
          </p>
        </div>
  
        <div className="bg-gray-100 p-6 mt-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">Address</h2>
          <p className="text-gray-700 mb-4">
            Adopt-Me Headquarters<br />
            1234 Rescue Street, Pet City, PC 56789
          </p>
        </div>
      </div>
    );
  };
  
  export default Contact;
  