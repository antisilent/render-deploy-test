import React, { useEffect, useState } from 'react';

interface Model {
  id: string;
  object: string;
  created: number;
  owned_by: string;
}

interface Config {
  apiKey: string;
  baseURL: string;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [models, setModels] = useState<Model[]>([]);
  const [config, setConfig] = useState<Config | null>(null);

  useEffect(() => {
    fetch('/api/health')
      .then(res => {
        if (res.status === 204) {
          setMessage('It works!');
        }
      })
      .catch(err => console.error('Error checking health:', err));
  }, []);

  useEffect(() => {
    fetch('/api/models')
      .then(res => res.json())
      .then(data => setModels(data.sort((a: Model, b: Model) => a.id.localeCompare(b.id))))
      .catch(err => console.error('Error fetching models:', err));
  }, []);

  useEffect(() => {
    fetch('/api/config')
      .then(res => res.json())
      .then(data => setConfig(data))
      .catch(err => console.error('Error fetching config:', err));
  }, []);

  return (
  <>
    <h1>{message || 'Loading...'}</h1>
    <h3>DMG Configuration:</h3>
    <ul>{config ? (
        <>
          <li><b>Base URL:</b> {config.baseURL}</li>
          <li><b>API Key:</b> {config.apiKey}</li>
        </>
      ) : (
        <li><b>Configuration not loaded...</b></li>
      )}
      </ul>

      <h3>Available Models:</h3>
      <ul>
        {models.map((model, index) => (
          <li key={index}>
            <b>{model.id}</b>
          </li>
        ))}
      </ul>
  </>);
};

export default App;
