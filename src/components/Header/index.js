import Logo from "./../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} draggable="false" alt="" />
      <h1 className="title">ZapRecall</h1>
    </header>
  );
};

export { Header };
