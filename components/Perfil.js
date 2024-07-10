import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Infos from '../components/Infos';

import Link from 'next/link';
const Perfil = () => (


  <aside className="perfil aside ">
    <div className="back-button">
      <Link href="/"><div className='arrow-left '><FontAwesomeIcon icon={faArrowLeft} /></div></Link>
      <h3>Sobre o Estabelecimento</h3>
    </div>
    <div className="items-center aside-logo ">
      <img src="/images/logo.jpg" alt="Logo Pizzaria" />
      <h2 className="text-xl font-bold mt-4">PIZZARIA</h2>
    </div>
    <div className='infos-perfil'>
      <Infos />

    </div>
    <div className="address mt-6 ">
      <h3 className="text-lg font-semibold">Endereço</h3>
      <p className="text-muted-foreground mt-2 padding-itens">Rua example, 2 - Campo Grande, Rio de Janeiro - RJ, 23.000-000, Brasil</p>
    </div>
    <div className="payment-methods mt-6">
      <h3 className="text-lg font-semibold">Formas de pagamento</h3>
      <div className="payment-method padding-itens ">
        <img src="/images/payment-card.png" alt="Cartão" />
        <span>Cartão</span>
      </div>
      <div className="payment-method padding-itens ">
        <img src="/images/payment-cash.png" alt="Dinheiro" />
        <span>Dinheiro</span>
      </div>
      <div className="payment-method padding-itens ">
        <img src="/images/payment-pix.png" alt="PIX" />
        <span>Pix</span>
      </div>
    </div>
    <div className="opening-hours mt-6 ">
      <h3 className="text-lg font-semibold">Horário de atendimento</h3>
      <ul className="text-muted-foreground mt-2 padding-itens">
        <li>Domingo: 18h às 23h59m</li>
        <li>Segunda-feira: 18h às 23h59m</li>
        <li>Terça-feira: 18h às 23h59m</li>
        <li>Quarta-feira: 17h às 23h59m</li>
        <li>Quinta-feira: 18h às 23h59m</li>
        <li>Sexta-feira: 18h às 23h59m</li>
        <li>Sábado: 18h às 23h59m</li>
      </ul>
    </div>
  </aside>
);

export default Perfil;
