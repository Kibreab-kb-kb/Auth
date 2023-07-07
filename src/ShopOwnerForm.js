import React, { useState } from 'react';

const ShopOwnerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to create the ShopOwner account
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#007C7C]">
      <form onSubmit={handleSubmit} className="  shadow-lg shadow-black/70 rounded px-12 pt-8 pb-8 mb-12 ">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          
          <input
            className="bg-[#00008B] shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-[#00008B] shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-[#00008B] shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className=" bg-[#071330] border-2 border-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-tl-3xl rounded-br-3xl focus:outline-none focus:shadow-outline
            bg-gradient-to-r from-darkblue to-teal text-white hover:from-darkblue-dark hover:to-teal-dark"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShopOwnerForm;
