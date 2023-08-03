import './App.css';
import useContentful from './Components/useContentful';
import { useState } from 'react';
import { useEffect } from 'react';
import AuthorCard from './Components/AuthorCard';

function App() {
  let { getAuthors } = useContentful();
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((res) => setAuthors(res))
  }, []);

  return (
    <div className="App">
      <h1>Contentful API</h1>
      <hr />
      <div className='grid'>
      {authors && authors.map((author, index) => <AuthorCard key={index} author={author} />)}
      </div>
    </div>
  );
}

export default App;
