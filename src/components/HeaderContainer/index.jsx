import "./style.css";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="left">
        <h1>Feliz Natal e Feliz Ano Novo!</h1>
        <p>
          Nessas festas de fim de ano mande um presente
          para a pessoa amada e compartilhe a alegria do Natal.
        </p>
        <button>Fazer uma doação</button>
      </div>
      <div className="right"></div>
    </div>
  )
};

export default HeaderContainer;