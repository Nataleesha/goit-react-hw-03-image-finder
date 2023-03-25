import { Component } from "react";
import css from "components/Searchbar/Searchbar.module.css";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  queryHandle = (e) => {
    this.setState({ query: e.target.value.toLowerCase() });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    if (this.state.query.trim() === "") {
      alert("Enter search query");
      return;
    }

    this.props.onSubmit(this.state.query);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.onFormSubmit}>
          <button type="submit" className={css["search-button"]}>
            <span className={css["button-label"]}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            onChange={this.queryHandle}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
