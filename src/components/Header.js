import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="" />
      <h1 className="title">ZapRecall</h1>
    </header>
  );
};

export { Header };
