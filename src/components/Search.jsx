import './css/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div id="search">
        <span>
          <button className="search-btn">
          <FontAwesomeIcon className="fa-magnifying-glass" icon={faMagnifyingGlass} />
          </button>
        </span> 
        <input type="text" placeholder='Search' className="search-text" />
    </div>
  );
};

export default Search;
