import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useQuery } from '../hooks/useQuery';

export function Search() {
  const query = useQuery(); 
  const search = query.get('search');

  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            history.push('/?search=' + value);
          }}
          placeholder="Search Movies"
          aria-label="Search Movies"
        />
        <>
          <FaSearch color='black' size={20}className={styles.searchButton} />
        </>
      </div>
    </form>
  );
}
