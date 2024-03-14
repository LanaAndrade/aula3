import {} from 'react'
import Imagem from '../assets/Img1.jpg'
import '../css/style.css'

function Home(){

    return(
        <>
        <h1>Esta é a página Home</h1>
        <img src={Imagem} alt='Imagem' className='img'/>
        </>
    )
}
export default Home