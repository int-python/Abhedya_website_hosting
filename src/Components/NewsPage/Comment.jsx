import React from 'react';
import './Comment.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Comment = () => {
      AOS.init();
    return(
    <div className= "commnent_new">
       <div className="col-4 comment_heading">
             <h5 className="reacent_popular_heading">RECENT POPULAR COMMENT</h5>
        <div className="content">
        <div class="effect1 column">
                 <div>
                 <span>1</span>
                   <figure><img src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="120px" height="90px" /></figure>
               </div>  
            </div>
        <div className="head">
            <a href="#">FASHION</a>
                <h6>Ratcliffe to be Director of nation talent</h6><br/>
                 <p> digiQoles  Jan 10, 2021</p>
            </div>
        </div>
        <div className="content">
        <div class="effect1 column">
                 <div>
                 <span>1</span>
                   <figure><img src="https://images.pexels.com/photos/3794382/pexels-photo-3794382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="120px" height="90px" /></figure>
               </div>  
            </div>
        <div className="head">
            <a href="#">SPORTS</a>
                <h6>Nancy multi Chinese business woman trying</h6><br/>
                 <p> digiQoles  Jan 10, 2021</p>
            </div>
        </div>
        <div className="content">
        <div class="effect1 column">
                 <div>
                 <span>3</span>
                   <figure><img src="https://images.pexels.com/photos/2764666/pexels-photo-2764666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="120px" height="90px" /></figure>
               </div>  
            </div>
        <div className="head">
            <a href="#">TECH</a>
                <h6>Harbour amid a Slowen down in singer city screening</h6><br/>
                 <p> digiQoles  Jan 10, 2021</p>
            </div>
        </div>

        <div className="content">
        <div class="effect1 column">
                 <div>
                 <span>4</span>
                   <figure><img src="https://images.pexels.com/photos/3850209/pexels-photo-3850209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="120px" height="90px" /></figure>
               </div>  
            </div>
        <div className="head">
            <a href="#">GAMES</a>
                <h6>The secret to moving this ancient sphinx screening</h6><br/>
                 <p> digiQoles  Jan 10, 2021</p>
            </div>
        </div>
      <div className="images1">
      <div data-aos="flip-right">
     <div class="card-container">
	<div class="front"><img className="img-fluid" src="https://images.pexels.com/photos/4317157/pexels-photo-4317157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="400px" height="200px"/></div>
	<div class="back"><h6>Fashion</h6>  
    <p>digiQoles July 10, 2019
Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by</p>
     </div>
</div>
     </div>
     <div data-aos="flip-left">
     <div class="card-container">
	<div class="front"><img className="img-fluid" src="https://images.pexels.com/photos/4597994/pexels-photo-4597994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="400px" height="200px"/></div>
	<div class="back"><h6>Arts</h6>
    <p>digiQoles July 10, 2019
Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by</p>
    </div>
</div>
     </div>
     <div data-aos="flip-up">
     <div class="card-container">
	<div class="front"><img className="img-fluid" src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="400px" height="200px"/></div>
	<div class="back"><h6>Style</h6>
    <p>digiQoles July 10, 2019
Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by</p>
    </div>
</div>
     </div>
     <div data-aos="flip-left">
     <div class="card-container">
	<div class="front"><img className="img-fluid" src="https://images.pexels.com/photos/2857477/pexels-photo-2857477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="400px" height="200px"/></div>
	<div class="back"><h6>Painting</h6>
    <p>digiQoles July 10, 2019
Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by</p>
    </div>
</div>
     </div>
     
     
</div>
</div>
</div>
  
    );
}
export default Comment;