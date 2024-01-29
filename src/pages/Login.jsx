import React, { useState } from 'react';
import logo from '../images/logo.png';
import '../css/login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { link } from '../BackConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState('');
  const [mdp, setmdp] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${link}api/v1/auth/authenticate`, {
        email,
        mdp,
      });

      localStorage.setItem('email', email);

      const userResponse = await axios.get(
        `${link}api/v1/auth/findUserByEmail/${localStorage.getItem('email')}`,
        {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        }
      );

      const user = {
        Id_User: userResponse.data.Id_User,
        nom: userResponse.data.nom,
        prenom: userResponse.data.prenom,
        email: userResponse.data.email,
        mdp: userResponse.data.mdp,
        telephone: userResponse.data.telephone,
        role: userResponse.data.role,
      };

      if (user.role === 'ADMIN') {
        sessionStorage.setItem('token', response.data.token);
        navigate('/home');
      }
      if ( user.role === 'USER') {
        sessionStorage.setItem('token', response.data.token);
        navigate('/carburant/Carburant');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <div className="loginBody">
      <div className="wrapper">
        <form action="" method="get">
          <center>
            <img src={logo} alt="" srcset="" />
          </center>
          <h1>Se connecter</h1>
          <div className="input-box">
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={mdp}
              onChange={(e) => setmdp(e.target.value)}
              placeholder="Mots de passe"
              required
            />
            <FaLock className="icon" />
          </div>
          <button type="button" onClick={handleLogin}>
            Connexion
          </button>
          <div className="notice">
            <p>
              <label htmlFor="">S'inscrire avec l'application mobile</label>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
