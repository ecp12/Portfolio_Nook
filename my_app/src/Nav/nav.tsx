import './nav.css'
import Image from 'next/image';
import Logo from '../assets/LOGO1.png'


export default function Nav() {
 return(<div className='Nav'>
    <div className='contNav'>
     <a href=""><Image src={Logo} className='logo'/></a>
     <div className='contLink'>
        <a href="">About</a>
        <a href="">Proyectos</a>
        <a href="">Descargar cv</a>
     </div>
 </div></div>
   
 
 );
}