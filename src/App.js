import { Provider } from 'react-redux';//importing redux
import store from './store';
import ShopOwnerForm from './ShopOwnerForm';
import gameBackground from './game.jpg';

function App() {
  return (
    <Provider store={store}>
      <div
        className="App h-screen "
        style={{
          backgroundImage: `url(${gameBackground})`,
          
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-center mt-12 bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-200 to-red-300 text-2xl ">ShopOwner Account Creation </h1>
          <ShopOwnerForm />
        </div>
      </div>
    </Provider>
  );
}

export default App;

