import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

const PageHeader: React.FC = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar para página inicial" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>Estes são os proffys disponíveis.</strong>
      </div>
    </header>
  );
};

export default PageHeader;
