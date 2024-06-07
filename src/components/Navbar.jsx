import { useNavigate } from 'react-router-dom';


function Navbar( {setPageDisplay }) {
    const navigate = useNavigate();
    return (
        <>
            <div className='navbar'>
                <ul>
                    <li onClick={() => setPageDisplay('home')}></li>    
                    <li onClick={() => setPageDisplay('wood')}></li>
                    <li onClick={() => setPageDisplay('lighting')}></li>
                    <li onClick={() => setPageDisplay('appliances')}></li>
                    <li onClick={() => setPageDisplay('landscaping')}></li>
                    <li onClick={() => setPageDisplay('paint')}></li>
                </ul>

            </div>
        </>
    )
}

export default Navbar