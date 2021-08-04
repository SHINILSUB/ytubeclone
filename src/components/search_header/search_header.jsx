import styles from "./search_header.module.css";
import React, { useRef } from "react";

const SearchHeader = ({onSearch}) => {
  const inputRef = useRef();
  const handlesearch = () => {
    const value = inputRef.current.value;
    onSearch(value)
  };
  const onClick = () => {
    handlesearch()
  };
  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      handlesearch()
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="lg" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="search.."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
