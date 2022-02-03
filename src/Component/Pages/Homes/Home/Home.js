import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Choose from '../Choose/Choose';
import Expert from '../Expert/Expert';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HealthCare from '../HealthCare/HealthCare';
import Input from '../Input/Input';
import Mobile from '../Mobile/Mobile';
import Navigation from '../Navigation/Navigation';
// import Patient from '../Patient/Patient';
import Pharmacy from '../Pharmacy/Pharmacy';
import Qualified from '../Qualified/Qualified';
import Question from '../Question/Question';
import Video from '../Video/Video';
import './Home.css'

const Home = () => {
    return (
        <div className=''>
            <Navigation></Navigation>
            <Header></Header>
            <About></About>
            <Video></Video>
            <Choose></Choose>
            <Mobile></Mobile>
         
            <Pharmacy></Pharmacy>
            <HealthCare></HealthCare>
            <Expert></Expert>
            <Qualified></Qualified>
            <Question></Question>
            <Input></Input>
            {/* <Patient></Patient> */}
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;