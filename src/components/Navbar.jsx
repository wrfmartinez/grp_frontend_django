import { redirect } from 'react-router-dom';


function Navbar() {
    // const navigate = useNavigate();
    return (
        <>
            <div className='navbar'>
                <ul>
                    <li onClick={() => redirect('/')}></li>    
                    <li onClick={() => redirect('/wood')}></li>
                    <li onClick={() => redirect('/lighting')}></li>
                    <li onClick={() => redirect('/appliances')}></li>
                    <li onClick={() => redirect('/landscaping')}></li>
                    <li onClick={() => redirect('/paint')}></li>
                </ul>

            </div>
        </>
    )
}

export default Navbar