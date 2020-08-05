import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string,
  ) {
    const updatedScheduleItems = scheduleItems.map((schedule, index) => {
      if (index === position) {
        return { ...schedule, [field]: value };
      }

      return schedule;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function addNewSchedule() {
    setScheduleItems([...scheduleItems, { week_day: 1, from: '', to: '' }]);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post('classes', {
        name,
        avatar,
        bio,
        subject,
        whatsapp,
        cost: Number(cost),
        schedule: scheduleItems,
      });

      alert('Cadastro realizado com sucesso!');

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro');
      console.log(`error.message >>> ${error.message} <<<`);
    }
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher o formulário de inscrição"
      />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={event => {
                setName(event.target.value);
              }}
            />

            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={event => {
                setAvatar(event.target.value);
              }}
            />

            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={event => {
                setWhatsapp(event.target.value);
              }}
            />

            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={event => {
                setBio(event.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={event => {
                setSubject(event.target.value);
              }}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Ed. Física', label: 'Ed. Física' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Química', label: 'Química' },
                { value: 'Inglês', label: 'Inglês' },
              ]}
            />

            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={event => {
                setCost(event.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewSchedule}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((schedule, index) => {
              return (
                <div key={schedule.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={schedule.week_day}
                    onChange={event => {
                      setScheduleItemValue(
                        index,
                        'week_day',
                        event.target.value,
                      );
                    }}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />

                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={schedule.from}
                    onChange={event => {
                      setScheduleItemValue(index, 'from', event.target.value);
                    }}
                  />

                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={schedule.to}
                    onChange={event => {
                      setScheduleItemValue(index, 'to', event.target.value);
                    }}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante
              <br />
              Preencha todos os dados
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
