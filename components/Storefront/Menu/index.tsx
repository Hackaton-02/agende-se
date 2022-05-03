import { Col, Row } from 'react-bootstrap';

import styles from './styles.module.css';
import Link from 'next/link';

interface MenuProps {
  tab?: string;
}

const Menu: React.FC<MenuProps> = ({ tab }) => {
  return (
    <Row className={`mt-4 mb-4 text-center ${styles.container}`}>
      <Col sm={3} xs={6}>
        <Link href="/Profile">
          <a className={(tab === 'personal_data' ? styles.active : undefined)}>
            Meus Dados
          </a>
        </Link>
      </Col>

      <Col sm={3} xs={6}>
      <Link href="/List">
          <a className={(tab === 'orders' ? styles.active : undefined)}>
            Minhas reservas
          </a>
        </Link>
      </Col>

      <Col sm={3} xs={6}>
        <Link href="/Consult">
          <a className={(tab === 'my_consults' ? styles.active : undefined)}>
            Minhas consultas
          </a>
        </Link>
      </Col>

      <Col sm={3} xs={6}>
        <Link href="/Address">
          <a className={(tab === 'my_address' ? styles.active : undefined)}>
            Meu endereço
          </a>
        </Link>
      </Col>
    </Row>
  );
}

export default Menu;
