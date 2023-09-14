import React, { useState } from 'react';
import Typewriter from 'react-ts-typewriter';
import logo from "../assets/google-developers-seeklogo.com.svg";

function HeroPage() {

  const [shown, setShown] = useState(false);

  return (
    <section className='page-one'>
      <div className="content">
        <div className="big-title">
          <Typewriter
            text={
              "Welcome to GDSC Sidi Bel Abbes."
            }

            loop={false}

            speed={50}

            cursor={
              false
            }

            onFinished={
              () => {
                setShown(true);
              }
            }
          ></Typewriter>

          {
            !shown ? null : <div className="description">
              <Typewriter
                text={
                  "GDSC SBA is a scientific club located in Sidi Bel Abbes, where you can find the most ambitious, talented and creative individuals. What are you waiting for to join us?"
                }

              >
              </Typewriter>
            </div>
          }
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="button">
        <button>JOIN US</button>
      </div>
    </section>
  )
}

export default HeroPage;
