import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
       <div > 
         <div className="footer">
         <div className="heading">
         <h1>Sheikh Hasina
Medical College & Hospital</h1>
         </div>
         <div className="Footer-About">
           <div>
             <a href="https://talukderakash.github.io/personalwebsite/"><h3>Contact</h3></a>
             <h5>Principal </h5>
             <p>Sheikh Hasina <br />
Medical College & Hospital</p>
           </div>
           <div>
             <a href="https://www.google.com/maps/dir//7W7F%2BCMR+Sheikh+Hasina+Medical+College+%26+Hospital,+Tangail,+Tangail+1900/@24.2636824,89.8891288,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x39fdfbdff6fdebe1:0x51c7c3ae44006904!2m2!1d89.9241485!2d24.2636082!3e0"> <h3>Address</h3></a>
             <p> 7W8H+F7G, Tangail <br />Tangail Dhaka <br /> Bangladesh </p>
             <p></p>
             
           </div>
           <div className="size">
             <a href="https://en.wikipedia.org/wiki/Sheikh_Hasina_Medical_College,_Tangail"> <h3>About</h3> </a>
             <p>Founded: 2014 <br />
                 Number of students: 269 <br />
                 Academic staff: 57  <br />
                 Academic affiliation: University of Dhaka</p>
           </div>
           
         </div>
       </div> 
       </div>
    );
};
export default Footer;