const Welcome = ({ changeScreen }) => {
  return (
    <section className="welcome-page">
      <header>
        <img src="assets/images/logo.png" alt="ZapRecall" />
        <h1 className="title">ZapRecall</h1>
        <button
          className="btn"
          onClick={() => {
            changeScreen("home");
          }}
        >
          Iniciar Recall!
        </button>
      </header>
    </section>
  );
};

export { Welcome };
