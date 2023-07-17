import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();

    navigate(`/search/${searchTerm}`)
  }
  
  return(
  <form autoComplete="off" className="p-2 mt-2 text-gray-400 focus-within:text-gray-600" onSubmit={handleSubmit}>
    <label htmlFor="search-field" className="sr-only">Search all songs</label>
    <div className="flex flex-row justify-start items-center gap-2">
      <FiSearch className='w-5 h-5 ml-4'/>
      <input type="search" 
      name='search-field'
      autoComplete='off'
      id="search-field"
      placeholder='Search'
      value={searchTerm}
      onChange={(e)=>{setSearchTerm(e.target.value)}}
      className='flex-1 bg-transparent border-none outline-none placeholder-gray-600 text-base text-white'
      />
    </div>
  </form>
)}

export default Searchbar;
