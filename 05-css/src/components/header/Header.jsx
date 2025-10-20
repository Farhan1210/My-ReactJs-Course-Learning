import styles from "./Header.module.css";

const Header = function () {
  return (
    <div className={styles.header}>
      <h3>A header</h3>
      <button className="btn">Login</button>
    </div>
  );
};

export default Header;
