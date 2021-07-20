import React from 'react';
import Styles from './Homepage.module.scss';
import background from '../../assets/img/background.png';
import Navbar from '../../components/Navbar/Navbar';

const Homepage = () => {
   return (
      <>
         <Navbar />
         <div>
            <div
               className="container-md w-auto text-white text-align-center"
               style={{
                  marginTop: '10%',
                  height: 'auto',
                  fontFamily: 'Roboto, sans-serif',
               }}
            >
               <section style={{ fontSize: '80px', textAlign: 'center' }}>
                  DevFest 2.0
               </section>
               <main style={{ textAlign: 'center', fontWeight: '400' }}>
                  DevFest is the week-long completely online technical fest
                  organized by DevSoc, Developers&apos; Society, BITS Pilani,
                  Goa campus. talks by eminent tech leaders, workshops and
                  hackathons.
               </main>
            </div>
            <div className={Styles.Register}>
               <div className={Styles.buttons}>
                  <button className={Styles.dashboard}>Go to Dashboard</button>
                  <button className={Styles.register}>
                     Register for Talks/Workshops
                  </button>
               </div>
            </div>
            <br />
            {/* <div className={Styles.background}></div> */}
            <img
               src={background}
               className={Styles.background}
               alt="background"
            />
         </div>
      </>
   );
};

export default Homepage;
