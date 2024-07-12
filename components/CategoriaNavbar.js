import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CategNavbar = () => (


  <aside className="items-center">
    <div className="back-button ">
      <Link href="/"><div className='arrow-left '><FontAwesomeIcon icon={faArrowLeft} /></div></Link>
      <h3>titulo categoria</h3>
    </div>
  </aside>
);

export default CategNavbar;