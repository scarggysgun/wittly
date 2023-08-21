import { Link } from 'react-router-dom';

const AccCreation = () =>{
    return(
        <>
        <h5 className='text-[#ACB6BE] text-sm not-italic font-medium leading-[22px]'>Vous n'avez pas de compte ? 
            <Link to="/" className='text-black text-[15px] not-italic font-bold leading-[22px]'>S'inscrire</Link>
        </h5>
        </>
    )
}
export default AccCreation ;