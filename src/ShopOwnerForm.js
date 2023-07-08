import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from './actions';

const ShopOwnerForm = ({ isLoading, error, loginRequest }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    loginRequest();
    console.log("Login Request Dispatched");

   
  };

  return (
    <div className="flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="p-8  bg-darkblue border  
         rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 ">

        {/* Form fields */}
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight 
            focus:outline-none focus:shadow-outline bg-gradient-to-r from-teal to-darkblue placeholder-white"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-white-700 leading-tight 
            focus:outline-none focus:shadow-outline bg-gradient-to-r from-teal to-darkblue placeholder-white "
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
            bg-gradient-to-r from-teal to-darkblue placeholder-white"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        

        {/* Submit button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-[#071330] border-2 border-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-tl-3xl rounded-br-3xl focus:outline-none focus:shadow-outline bg-gradient-to-r from-darkblue to-teal text-white hover:from-darkblue-dark hover:to-teal-dark"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopOwnerForm);
