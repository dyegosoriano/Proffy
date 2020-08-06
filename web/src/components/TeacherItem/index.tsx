import React from 'react';

import api from '../../services/api';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface Teacher {
  id: number;
  user_id: number;
  cost: number;
  avatar: string;
  bio: string;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function createNewConnection() {
    try {
      await api.post('connection', {
        user_id: teacher.id,
      });
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`);
    }
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
