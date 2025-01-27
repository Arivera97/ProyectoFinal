import Styles from './Nav.module.css';
import logo from '../../images/logo.png';
import { BsSearch } from 'react-icons/bs';

export default function Nav() {
  return (
    <div className={Styles.wrapper}>
      <div className={`${Styles.col_5}`}>
        <div className={`${Styles.div_logo} ${Styles.col_3}`}>
          <img src={logo} alt="logo" className={`${Styles.logo}`} />
        </div>
        <div className={`d-none d-lg-flex align-items-center justify-content-center ${Styles.col_1}`}>
          <h6 className={Styles.font}>Inicio</h6>
        </div>
        <div className={`d-none d-lg-flex align-items-center justify-content-center ${Styles.col_3}`}>
          <div className={Styles.dropdown}>
            <button className={`${Styles.background} ${Styles.dropdownToggle}`}>
              Categorías
            </button>
            <div className={`${Styles.dropdownMenu}`}>
              <div className={Styles.dropdownHeader}>Discos Duros</div>
              <a href="#" className={Styles.dropdownItem}>SSD</a>
              <a href="#" className={Styles.dropdownItem}>Rígido</a>
            </div>
          </div>
        </div>
        <div className={`d-none d-lg-flex align-items-center justify-content-center ${Styles.col_1}`}>
          <h6 className={Styles.font}>Ayuda</h6>
        </div>
        <div className={`d-none d-lg-flex align-items-center justify-content-center ${Styles.col_4}`}>
          <h6 className={Styles.font}>Sobre Nosotros</h6>
        </div>
      </div>
      <div className={`col-4 d-none d-lg-flex align-items-center justify-content-center ${Styles.col_4}`}>
        <form className={`${Styles.col_search} col-4 d-flex align-items-center`}>
          <input type="text" placeholder="Buscar" className={`${Styles.searchInput}`} />
          <button type="submit" className={`${Styles.searchButton}`}>
            <BsSearch />
          </button>
        </form>
      </div>
      <div className={`col-3 d-flex align-items-center justify-content-center ${Styles.col_3}`}>
        <div className={`col-4 d-flex align-items-center justify-content-center ${Styles.containerLogin}`}>
          <button className={`${Styles.actionButton2} ${Styles.login}`}>
            Iniciar sesión
          </button>
        </div>
        <div className={`col-4 d-flex align-items-center justify-content-start ${Styles.containerCreate}`}>
          <button className={`${Styles.actionButton} ${Styles.create}`}>
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
