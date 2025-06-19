import React from 'react';
import ReactDOM from 'react-dom/client';
import ArgentinaImage from "../images/Argentina.png";
import FranceImage from "../images/France.png";
import GermanyImage from "../images/Germany.png";
import ItalyImage from "../images/Italy.png";
import ManchesterImage from "../images/Manchester.png";
import ScotlandImage from "../images/Scotland.png";
import UsaImage from "../images/Usa.png"
import BrazilImage from "../images/Brazil.png";
import ParisImage from "../images/Paris.png";
import PolandImage from "../images/Poland.png";
import UruguayImage from "../images/Uruguay.png";
import Scroll from './Scroll'
import "../CSS/Home.css"
function Home(){
  return(
    <div className="Home">
       <h4>Matches For You </h4>
      <div class="Scores-Wrapper">
        <div className="Home-Page">
          <div className="Scores">
            <div className="Scores-Top">
              <div className="Time"><span class="live-dot"></span>
              Live</div>
              <div className="Tournment">FIFA 2023</div>
            </div>
            <div className="Scores-Bottom">
                <p>Amsterdam Arena (Amsterdam, Netherlands)</p>
                <div className="Team-Details">
                  <img src={ArgentinaImage} alt="Argentina Team" className="Team-logo"/>;
                  <h1>2</h1>
                  <h1>-</h1>
                  <h1>2</h1>
                  <img src={FranceImage} alt="Argentina Team" className="Team-logo"/>;
                </div>
                <div className="Player-Score">
                    <div className="Left-team">
                      <p>Chaitanya 18'</p>
                      <p>Manohar 43'</p>
                    </div>
                    <div className="Right-team">
                      <p>Ronaldo 83'</p>
                      <p>Messie 90'</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="Scores">
            <div className="Scores-Top">
              <div className="Time"><span class="live-dot"></span>Live</div>
              <div className="Tournment">FIFA 2023</div>
            </div>
              <div class="Scores-Bottom">
                <p>Celtic Park (Glasgow, Scotland)</p>
                <div className="Team-Details">
                  <img src={GermanyImage} alt="Argentina Team" className="Team-logo"/>;
                  <h1>1</h1>
                  <h1>-</h1>
                  <h1>2</h1>
                  <img src={ScotlandImage} alt="Argentina Team" className="Team-logo"/>;
                </div>
                <div className="Player-Score">
                    <div className="Left-team">
                      <p>Roman 7'</p>
                    </div>
                    <div className="Right-team">
                      <p>Neynmar 33'</p>
                      <p>Messie 66'</p>
                    </div>
                </div>
              </div>
          </div>

          <div className="Scores">
            <div className="Scores-Top">
                <div className="Time">Finished</div>
                <div className="Tournment">FIFA 2023</div>
              </div>
              <div class="Scores-Bottom">
              <p> Stade (Orange) Vélodrome (Marseille, France)</p>
                <div className="Team-Details">
                  <img src={ManchesterImage} alt="Argentina Team" className="Team-logo"/>;
                  <h1>0</h1>
                  <h1>-</h1>
                  <h1>3</h1>
                  <img src={UsaImage} alt="Argentina Team" className="Team-logo"/>;
                </div>
                <div className="Player-Score">
                    <div className="Left-team">
                      {/* <p>Roman 7'</p>
                      <p>Sethron 63'r</p> */}
                    </div>
                    <div className="Right-team">
                      <p>Neynmar 33'</p>
                      <p>Messie 66'</p>
                      <p>Chaitu 93'</p>
                    </div>
                </div>
              </div>
          </div>

          <div className="Scores">
            <div className="Scores-Top">
              <div className="Time">Finished</div>
              <div className="Tournment">FIFA 2023</div>
            </div>
            <div class="Scores-Bottom">
                <p>Final. Dubai International Football Stadium, Dubai</p>
                <div className="Team-Details">
                  <img src={GermanyImage} alt="Argentina Team" className="Team-logo"/>;
                  <h1>4</h1>
                  <h1>-</h1>
                  <h1>1</h1>
                  <img src={ItalyImage} alt="Argentina Team" className="Team-logo"/>;
                </div>
                <div className="Player-Score">
                    <div className="Left-team">
                      <p>Roman 7'</p>
                      <p>Sethron 63'r</p>
                    </div>
                    <div className="Right-team">
                      <p>UnderTaker 33'</p>
                    </div>
                </div>
            </div>          
          </div>

          <div className="Scores">
            <div className="Scores-Top">
              <div className="Time">Finished</div>
              <div className="Tournment">FIFA 2023</div>
            </div>
            <div class="Scores-Bottom">
                <p>Final. Dubai International Football Stadium, Dubai</p>
                <div className="Team-Details">
                  <img src={GermanyImage} alt="Argentina Team" className="Team-logo"/>;
                  <h1>4</h1>
                  <h1>-</h1>
                  <h1>1</h1>
                  <img src={ItalyImage} alt="Argentina Team" className="Team-logo"/>;
                </div>
                <div className="Player-Score">
                    <div className="Left-team">
                      <p>Roman 7'</p>
                      <p>Sethron 63'r</p>
                    </div>
                    <div className="Right-team">
                      <p>UnderTaker 33'</p>
                    </div>
                </div>
            </div>          
          </div>

          <div className="Scores Scores-Last-One" >
            <div className="Scores-Top">
              <div className="Time">Finished</div>
              <div className="Tournment">FIFA 2023</div>
            </div>
            <div class="Scores-Bottom">
                <p>Final. Dubai International Football Stadium, Dubai</p>
                <div className="Team-Details">
                  <img src={GermanyImage} alt="Argentina Team" className="Team-logo"/>;
                  <h1>4</h1>
                  <h1>-</h1>
                  <h1>1</h1>
                  <img src={ItalyImage} alt="Argentina Team" className="Team-logo"/>;
                </div>
                <div className="Player-Score">
                    <div className="Left-team">
                      <p>Roman 7'</p>
                      <p>Sethron 63'r</p>
                    </div>
                    <div className="Right-team">
                      <p>UnderTaker 33'</p>
                    </div>
                </div>
            </div>          
          </div>
        </div>
      </div>

      <div class="news_header"> 
        <h4>TOP NEWS</h4> 
      </div> 
    
      <div class="main"> 
        <h3 class="title">Xara Jetly On Virat Kohli!</h3> 
        <div class="news">  
          <img class="news_img" src="images/RM.png"/> 
           <div class="text">                                           
                  <h4>Beautiful NZ Crickter Xara Jetly Expressed Desire To Take Photo With Virat Kohli</h4> 
                  <p>Virat Kohli antics on the cricket field has made him a living legend, and there is hardly any corner of the cricketing world where he is not admired. He is equally famous among fans and cricketers, and he is following among female cricketers is also quite insane.</p> 
            </div> 
        </div>  
        <h3 class="title">6️ ⃣ 6️ ⃣ and ... Out! ☝️</h3> 
        <div class="news">  
          <img class="news_img" src="images/Ronaldo.png"/> 
              <div class="text"> 
                  <h4>Ronaldo drops out of Brazilian football presidency due to lack of support</h4> 
                  <p>Brazilian football legend Ronaldo, who is also a two-time World Cup winner, has withdrawn his intention to run for the presidency of the Brazilian Football Confederation (CBF) due to a lack of support from regional federations.In a social media post, the two-time Ballon d'Or winner stated that after publicly expressing his desire to become a candidate for the CBF presidency, he has officially withdrawn his intention.</p> 
              </div> 
        </div>  
        
        <h3 class="title">Salary Hike</h3> 
        <div class="news">  
          <img class="news_img" src="images/Messie.png"/> 
              <div class="text"> 
                  <h4>3 Players Who Might Get a Salary Hike In IPL 2025</h4> 
                  <p>The IPL 2024 saw the Kolkata Knight Riders crowned the champions for the third time in the history of the tournament. While some of the experienced campaigners of the team like, Mitchell Starc, Sunil Narine, and Phil Salt performed for the team, there were also players like Harshit Rana who delivered under pressure. This leads us to the fact that for a team to win the trophy, besides the top and high-priced players, the newer Indian talents also need to step up.</p> 
              </div> 
        </div>  
      </div> 
   </div>
  );
}

export default Home;