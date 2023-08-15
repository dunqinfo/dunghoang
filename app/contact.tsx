import './contact.scss';
import { data, information } from './data';

type Props = {
  info: information;
};

export default function Contact({ info }: Props) {
  return (
    <div className='contact'>
      <a href={info.link_to} target='_blank'>
        <div className='info-container'>
          <div className='icon'>
            {info.icon}
          </div>
          <p className='text'>{info.text}</p>
        </div>
      </a>
    </div>
  );
}