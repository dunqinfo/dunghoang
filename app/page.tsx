import './page.module.css';
import { data } from './data';
import Contact from './contact';
import './dunq.scss';
import avt from './avt.jpg';
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image src={avt} alt="avatar"/>
      <h1 className="name">DUNG HOÀNG</h1>
      <h1 className="description"></h1>
      {data.map((info, index) => (
        <Contact info={info} key={index} />
      ))}
    </main>
  );
}
