import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('/api/health')
      .then(res => {
        if (res.status === 204) {
          setMessage('It works!');
        }
      })
      .catch(err => console.error('Error checking health:', err));
  }, []);

  return (<h1>{message || 'Loading...'}</h1>);
};

export default App;
