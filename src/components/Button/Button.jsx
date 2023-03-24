import css from "components/Button/Button.module.css";

export const Button = ({ onLoadMore }) => {
  return (
      <button className={css.button} type="button" onClick={onLoadMore}>
        Load more
      </button>
  );
};
