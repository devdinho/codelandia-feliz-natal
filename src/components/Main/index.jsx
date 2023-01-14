import "./style.css";

const Main = () => {
  return (
    <main>
      <section>
        <div className="heading">
          <h2>Acessórios</h2>
          <p>
            Nessas festas de fim de ano mande um presente para
            a pessoa amada e compartilhe a alegria do Natal.
          </p>
        </div>
        <div className="gifts-container">
          <div className="gifts-wrapper">
            <img src="/giving1.png" alt="" />
            <h4>Presentes</h4>
            <p>
              Eles são os melhores presentes que existem.
            </p>
          </div>
          <div className="gifts-wrapper">
            <img src="/giving2.png" alt="" />
            <h4>Enfeites</h4>
            <p>
              Eles são os melhores presentes que existem.
            </p>
          </div>
          <div className="gifts-wrapper">
            <img src="/giving3.png" alt="" />
            <h4>Doces</h4>
            <p>
              Aproveite os doces natalinos.
            </p>
          </div>
          <div className="gifts-wrapper">
            <img src="/giving4.png" alt="" />
            <h4>Muito amor</h4>
            <p>
              Aproveite os sentimentos que duram para sempre.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
};

export default Main;