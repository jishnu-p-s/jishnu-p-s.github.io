import { useDispatch, useSelector } from "react-redux";
import {
  changeTheme,
  searchItem,
  focusInput,
  fetchProducts,
} from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { mode, theme } = useSelector((state) => state.theme);
  const { focus, searchText } = useSelector((state) => state.allProducts);
  const onChange = (e) => dispatch(searchItem(e.target.value));
  useEffect(() => {
    if (focus) {
      document.getElementById("search").focus();
      dispatch(focusInput(false));
    }
  }, [focus, dispatch]);

  const image = "starlink.png";

  return (
    <div style={theme} className="ui fixed menu">
      <div className="ui  container center">
        <Link to="/">
          <img style={{ width: "100px" }} src={image} alt="starlink"></img>
        </Link>
        <button
          style={{
            height: "30px",
            margin: "0px 8px",
            padding: 5,
            backgroundColor: "yellow",
            border: 0,
            borderRadius: 10,
            boxShadow: "1px 2px #888888",
            cursor: "pointer",
          }}
          className="ui link cards"
          onClick={() => {
            dispatch(changeTheme(mode === "dark" ? "light" : "dark"));
          }}
        >
          {mode === "dark" ? "LIGHT " : "DARK"}
        </button>
        <input
          onChange={onChange}
          placeholder="search"
          id="search"
          value={searchText}
          style={{
            height: "30px",
            borderRadius: 10,
            ...theme,
            outline: "none",
            padding: 10,
          }}
        ></input>
        <button
          style={{
            height: "30px",
            backgroundColor: "blueviolet",
            color: "white",
            padding: 5,
            cursor: "pointer",
            marginLeft: 10,
          }}
          onClick={() => dispatch(fetchProducts({ query: searchText || "a" }))}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
