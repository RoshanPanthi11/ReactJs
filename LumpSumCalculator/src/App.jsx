import Lumpsum from "./components/Lumpsum";
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className='app'>
      <div className="header">
        <p>Think Big, Invest Smart: Calculate Your Future with Lump Sum Magic!</p>
      </div>
      <div className="para">
        <p>A lumpsum calculator is an online tool that helps you estimate the future value of a one-time investment in a mutual fund or other investment </p>
      </div>
      <Lumpsum />
    </div>
  );
}

export default App;