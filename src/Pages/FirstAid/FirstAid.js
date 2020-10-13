import React, { Component } from "react";
import MainHeader from '../../Components/Partials/MainHeader/MainHeader'
import "./firstaid.css";
export default class FirstAid extends Component {
  render() {
    return (
      <div id="first-aid">
        <MainHeader/>
        <div className="banner"></div>

        <div className="inner-container">
          <section id="section1">
            <h4>WHAT IS FIRST AID</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              orci, rutrum pretium diam nunc amet. Mauris feugiat sit blandit
              gravida sed ante velit fringilla leo. Cum odio velit cursus risus.
              Vestibulum sed rutrum massa sed sit dui morbi.
            </p>
          </section>

          <section id="section2">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <h4>WHAT TO DO IN EMERGENCY SITUATIONS</h4>
                <p className="mr-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  tristique leo convalli convallis nunc eleifend eget et non.
                  Habitant magnis semper vel urna, elit. Faucibus massa
                  sollicitudin tellus eros, nibh. Ultricies eleifend congue
                  adipiscing diam scelerisque. Nisi sem mauris at blandit leo .
                  Semper arcu neque posuere felis, augue. Ut arcu purus, hac
                  rhoncus purus lectus. Amet, aliquam at id tortor. Condimentum
                  adipiscing tellus donec faucibus ullamcorper dui. Vitae quis
                  ipsum diam, metus integer sed blandit vestibulum. Fusce quis
                  leo, ultrices etiam fermentum. Nisl urna sed duis orci
                  maecenas accumsan.
                </p>
              </div>
              <div className="col-md-6">
                <div id="iframe-container">
                  <iframe
                    height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          <section id="section3">
            <div className="row">
              <div className="col-md-6 mb-4">
                <p>Anaphylaxis</p>
                <p>Animal bites: First aid</p>
                <p>Black eye</p>
              </div>
              <div className="col-md-6">
                <div>
                  <h4>Related Stories</h4>
                  <ul>
                    <li>What to Do If Bleach Spills on Your Skin</li>
                    <li>Tips for Avoiding Dangerous Allergic Reactions</li>
                    <li>3 steps for emergency situations</li>
                  </ul>
                </div>
                <div className="d-flex">
                  <div className="mr-2">
                    <svg
                      width="30"
                      height="40"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          d="M42.2879 49.9999H7.88713C5.18509 49.9995 2.67573 48.6006 1.25465 46.3018C-0.166057 44.0033 -0.295523 41.133 0.912322 38.7158L18.1112 4.31352C19.4313 1.67012 22.1326 0 25.0875 0C28.0424 0 30.7436 1.67012 32.0638 4.31352L49.2627 38.7158C50.4705 41.133 50.341 44.0033 48.9203 46.3018C47.4996 48.6006 44.9899 49.9995 42.2879 49.9999Z"
                          fill="#FC3B3B"
                        />
                        <path
                          d="M25.087 12.4973C25.9484 12.4973 26.6467 13.1957 26.6467 14.057V32.7733C26.6467 33.6346 25.9484 34.333 25.087 34.333C24.2257 34.333 23.5273 33.6346 23.5273 32.7733V14.057C23.5273 13.1957 24.2257 12.4973 25.087 12.4973Z"
                          fill="white"
                        />
                        <path
                          d="M23.5273 37.4524H26.6467V40.5718H23.5273V37.4524Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="50" height="50" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div id="sec-2">
                    Disclaimer: This information is not intended as a substitute
                    for professional medical advice, emergency treatment or
                    formal first-aid training. Don't use this information to
                    diagnose or develop a treatment plan for a health problem or
                    disease without consulting a qualified health care provider.
                    If you're in a life-threatening or emergency medical
                    situation, seek medical assistance immediately.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      
      </div>
    );
  }
}
