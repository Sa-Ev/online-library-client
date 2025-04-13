import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{ width: "200px", backgroundColor: "#f0f0f0", padding: "10px" }}>
      <h2><Link to="/">📚 Лого</Link></h2>
      <nav>
        <p><Link to="/register">Регистрация / Вход</Link></p>
        <p><Link to="/catalog">Каталог литературы</Link></p>
      </nav>
    </div>
  );
}