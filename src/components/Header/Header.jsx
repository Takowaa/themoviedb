import styles from './Header.module.css'
import {Row} from "antd";
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <Row className={styles.row} justify={"space-between"} align={"middle"} >
            <h1 className={styles.logo}>The Movie</h1>
            <a className={styles.link} href="">Home</a>
          </Row>
        </div>
      </header>
    </div>
  );
};

export default Header;