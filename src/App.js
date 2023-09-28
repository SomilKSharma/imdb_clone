import './App.css';
// components being imported
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import WatchList from './components/WatchList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {/* route for home page */}
          <Route path='/' element={
            <>
              <Banner />
              <Movies />
            </>
          } />
          {/* Route for watchlist page */}
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
