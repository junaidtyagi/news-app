
import { useState } from 'react';
import './App.css';
import { Navbar } from './Navbar';
import NewsBoard from './NewsBoard';
import { NewsItem } from './NewsItem';

function App() {
  const [category,setCategory]=useState("general");
  return (
   <>
   <Navbar setCategory={setCategory}/>
   <NewsBoard category={category} />
   </>
  );
}

export default App;
