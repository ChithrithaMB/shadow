import React from "react";
import RegisterForm from "./patientrecordform";
import '../patientrecordform.css';
const App=()=>{
  return(
    <div className="Mycontainer">
      <div className="card1">
        <button class="button4">HOME</button>
      <div className="card3">
        <div className="Symbol"></div>
      <div className="text1">BODHI PLUS</div>
      </div>
      <div className="card">
        <div className="card-header">PATIENT MEDICAL RECORD</div>
      
          </div>
          <RegisterForm/>
          </div>

      <div  className="div5">
          <div className="c4">Currently taking medicines</div>
          <hr class="hr4"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your  medicines" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your  medicines" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your  medicines" />
          </div>
          <div  className="div6">
          <div className="c5">Recent Medical History</div>
          <hr class="hr5"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your  medical history" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your  medical history" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your  medical history" />
          <button class="button3">Print a copy</button>
          </div>
          <div  className="div7">
          <div className="c6">Recent Surgeries</div>
          <hr class="hr6"></hr>
          <input id="chi1" type="text1" name="text1" placeholder="Enter your recent Surgeries" />
          <input id="chi2" type="text1" name="text1" placeholder="Enter your recent Surgeries" />
          <input id="chi3" type="text1" name="text1" placeholder="Enter your recent Surgeries" />
          </div>
    </div>
    )
}

export default App;
/*const App=()=>{
  return(
    <div className="Mycontainer">
      <PrimarySearchAppBar />
      <div className="card">
        <div className="card-header">PATIENT MEDICAL RECORD</div>
      
          <RegisterForm/>
          </div>

        <div  className="div5">
          <div className="c4">Currently taking medicines</div>
          <hr class="hr4"></hr>
          <div  className="b21">
          <div className="e2">Aspirin</div>
          </div>
          <div  className="b22">
          <div className="e2">DOLO-650</div>
          </div>
          <div  className="b23">
          <div className="e2">Paracetamol</div>
          </div>
          </div>
          <div  className="div6">
          <div className="c5">Recent Medical History</div>
          <hr class="hr5"></hr>
          <div  className="b21">
              <div className="e2">Heart attack</div>
          </div>
          <div  className="b22">
          <div className="e2">HIV</div>
          </div>
          <div  className="b23">
          <div className="e2">COVID-19</div>
          </div>
          </div>
          <div  className="div7">
          <div className="c6">Recent Surgeries</div>
          <hr class="hr6"></hr>
          <div  className="b21">
          <div className="e2">Brain Surgery</div>
          </div>
          <div  className="b22">
          <div className="e2">Neck Surgery</div>
          </div>
          <div  className="b23">
          <div className="e2">Cataract Surgery</div>
          
          </div>
          <button class="button">Print</button>
          </div>
          </div>
    
    
          
    )
}

export default App;*/


