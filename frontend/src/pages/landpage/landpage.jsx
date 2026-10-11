import { Link } from 'react-router-dom';

import './landpage.css';



export default function LandPage() {
    // 1. Initialize the navigate function
    // const navigate = useNavigation();

    return (
        // 2. Specify the destination path with the "to" prop
        <section >

            {/* Header section */}



            {/* Main section */}
            <main>
                <h1>Landing Page</h1>
                <Link to='/login' className='loginBtn'>
                    Entrar
                </Link>
                <Link to='/cadastro' className='registerBtn'>
                    Cadastrar
                </Link>


            </main>

            {/* Footer section */}


        </ section>

    )

}