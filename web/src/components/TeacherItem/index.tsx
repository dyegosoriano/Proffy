import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/4140145?s=460&u=d2c245d62a73752fa034546e277d637cca37dc59&v=4"
          alt="Dyego Soriano"
        />

        <div>
          <strong>Dyego Soriano</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis in,
        inventore deleniti totam accusantium aperiam, ex itaque a aliquam quos
        nostrum illo soluta! Ipsam reiciendis rem doloribus modi nostrum dicta?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>

        <button>
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
