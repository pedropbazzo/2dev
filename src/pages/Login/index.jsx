import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/logo.png';
import './styles.css';

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/api/devs', {
      username,
    });

    const { _id } = res.data;

    history.push(`/dev/${_id}`);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Logo 2dev" />
        <input
          type="text"
          placeholder="Digite seu usuário no Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
