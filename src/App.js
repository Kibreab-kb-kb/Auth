import React from 'react';
import ShopOwnerForm from './ShopOwnerForm';

function App() {
  return (
    <div className="App bg-teal absolute top-0 left-0 w-full h-full flex flex-col items-center">
      <h1 className="text-center text-white text-3xl font-bold mt-8  " >ShopOwner Account Creation</h1>
      <ShopOwnerForm />
    </div>
  );
}

export default App;
