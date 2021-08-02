import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Manifesto.css';
import Jumbotron from 'react-bootstrap/Jumbotron';



function Manifesto (){

    return(
        <div className="manifesto title">
            <Jumbotron> 
                 <div>   
                    <p>We believe that we are all made in likeness, and because of that, our hearts are naturally drawn toward one another. But the thing about kindness is, it’s a choice.</p>
                
                    <p>We believe everyone deserves a seat at the table and everyone has a story worth telling.</p>
              
                    <p>We believe in home, that it should restore us from today and ready us for tomorrow.</p>
                </div>
            </Jumbotron>         
        </div>
    );
};

export default Manifesto;