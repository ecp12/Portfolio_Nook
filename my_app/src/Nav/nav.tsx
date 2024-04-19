import "./nav.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/LOGO1.png";
import Cv from "../assets/CV_ERICK.pdf";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="contNav">
        <a href="">
          <Image src={Logo} className="logo" />
        </a>
        <div className="contLink">
          <a href="">About</a>
          <a href="">Proyectos</a>
          <Link href={Cv} target="_blank" download="CV_ERICK.pdf">
            Descargar cv
          </Link>
        </div>
      </div>
    </div>
  );
};
