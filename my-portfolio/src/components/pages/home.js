import './home.css';
import Pic from './assets/ProfPic.jpeg'

const Home = () => {

    return(
        <>
        <div className='mainHome'>
            <h1>
                Victor Villalpando
            </h1>
            <h2>Who am I?</h2>
            <div className='homeTxt'>
                <p>
                    I am a Computer Science Engineering student at CETYS Universidad, eager to advance my skills in Full Stack Development, Cloud Engineering, Cybersecurity, and Software Testing. 
                    I'm passionate about leveraging cutting-edge technologies to solve complex problems and continually improve my technical abilities.
                </p>
                <img src={Pic} />
            </div>
        </div>
        </>
    )

}

export default Home