import React from 'react';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import WeComponent from './components/WeComponent';
import OurStoryComponent from './components/OurStoryComponent';
import GalleryComponent from './components/GalleryComponent';
import RingCeremonyComponent from './components/RingCeremonyComponent';
import PartyComponent from './components/PartyComponent';
import BlogComponent from './components/BlogComponent';
import FooterComponent from './components/FooterComponent';
import ScrollUpButton from './components/ScrollUpButtonComponrnt';
import './assets/css/style.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollUpButton />
      <HeaderComponent />
      <HomeComponent />
      <WeComponent />
      <OurStoryComponent />
      <GalleryComponent />
      <RingCeremonyComponent />
      <PartyComponent />
      <BlogComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
