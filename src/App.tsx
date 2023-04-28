import './styles.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const HomePage = lazy(() => import('./scenes/HomePage/HomePage'));
const VideoGame = lazy(() => import('./scenes/VideoGame/VideoGame')) ;

export default function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
    <Routes >

        <Route path='/' element={<HomePage />} />
  
      <Route path='/game' element={<VideoGame />} />
     
    </Routes>
    </Suspense>
  );
}
