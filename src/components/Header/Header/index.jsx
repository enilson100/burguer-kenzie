import logo from "../../../assets/logo.svg";
import Pesquisa from "../Pesquisa";
import { HeaderStyle } from "./styles";

const Header = ({ handleSearch }) => {
  return (
    <HeaderStyle>
      <div className="header-wrap">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <Pesquisa handleSearch={handleSearch}></Pesquisa>
      </div>
    </HeaderStyle>
  );
};
export default Header;
