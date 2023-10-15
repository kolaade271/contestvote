import '../css/signup.css';
import React, { useState, useEffect } from 'react';
import { Category,Gettype,Submit,Confirm} from '../api/Auth';
import org from "../img/corporation.png";
import message from "../img/message.png";
import phone from "../img/phone.png";
import golden from "../img/golden.png";
import medal from "../img/medal.png";
import wooden from "../img/wooden.png";
import bsug from "../img/bsug.jpeg";
import bsh from "../img/bsh.png";
import cert from "../img/cert.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GenAlert } from '../alert/alert';
import { Bars } from  'react-loader-spinner'
import Nav from './nav';
import Countdown from 'react-countdown';


function SignUp() {
  const [getCategory, setCategory] = useState(false);
  const [getOption_a, setOption_a] = useState(false);
  const [getOption_b, setOption_b] = useState(false);
  const [getOption_c, setOption_c] = useState(false);
  const [loading, setLoading] = useState(false);
  const [getDataId, setDataId] = useState(false);
  const [isType, getisType] = useState(false);
  const [allData, getAlldata] = useState(false);
  const [ttype, gettType] = useState(false);
  const [getoptionId, setoptionId] = useState(false);
  const [getAcct, setAcct] = useState(false);
  const name = useFormInput('');
  const phoneno = useFormInput('');
  const deptno = useFormInput('');


useEffect(() => {
  Category().then(response => {
    console.log(response.data)
    setCategory(response.data.data)

  }) 
}, [])
const HandleProcess = (process) => {
  const action = process.target.value;
  const optionId = process.target.getAttribute('optionId');
  setoptionId(optionId)
  console.log(action)
  gettType(action)

}


const Confirmdata = (process) => {
 
  const id = process.target.getAttribute('confirm');
  setLoading(true)
  Confirm(id).then(response => {
    const stat = response.data.data;
    setLoading(false)
    if(stat === true){
      
      GenAlert(true, "Transaction Successull close the page");

    }
    else{
      GenAlert(false, "Transaction pending");
    }
    
  })

}

const Close = () => {
  window.location.reload();

}

const SubmitData = (process) => {
  let fullname = name.value;
  let phone = phoneno.value;
  let dept = deptno.value;
  const action = process.target.value;
  const dataId = process.target.getAttribute('dataId');
  const optionId = process.target.getAttribute('optionId');
  setLoading(true)
  console.log(optionId)
  if(fullname !=""){
    if(phone){
      if(dept !=""){
        Submit(fullname,phone,dept,dataId,optionId).then(response => {
          setLoading(false)
         const data = response.data.data;
          console.log(response.data.data)
          setAcct(data)
          //setCategory(response.data.data)
          if(data.status == true){
          
          }
        })   
      }
      else{
        GenAlert(false, "Department Required");
        setLoading(false)
      }
    }
    else{
      GenAlert(false, "Phone  Required");
      setLoading(false)
    }

  }
  else{
    GenAlert(false, "Fullname Required");
    setLoading(false)
  }

}

const changeCategory = (event) => {
  setLoading(true)
  const option = event.target.value;
  Gettype(option).then(response => {
    const data = response.data.data;
    console.log(response.data)
    setOption_a(data.taken_a)
    setOption_b(data.taken_b)
    setOption_c(data.taken_c)
    getAlldata(data)
    setDataId(data.id)
    getisType(true)
    setLoading(false)
    window.scrollTo(90, 5100);


   //setCategory(response.data.data)
  })   
};


  return (
    <div className="body">
      <Nav/>
      <ToastContainer />
      
          <div className="head">
        <div className="container">
            <div className="title" align="center"> BOUESTI SUGAN Award'23</div>
            <div className="dsc" align="center">SUGAN Award'23 is Student union Government award Night, event on the 13th of January 2023 at Bamidele Olumilua University of Education Science and Technology. Ikere Ekiti, Ekiti state. (BOUESTI)</div>
            
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="container">
        

        <div className="row  ">
          <div className="col-lg-3 col-md-3  mtx ">
            <div className='orginfo'>
              <div className='card'>
                <div className="container">
                <div className='orgby'> <img src={org} className="conicon"/> &nbsp;&nbsp;Organized By:</div>
                <div className='orgname'>BOUESTI SUG</div>
                <div className='orgby'><img src={message} className="conicon"/>&nbsp;&nbsp;Email:</div>
                <div className='orgname'>sugbouesti@gmail.com</div>
                <div className='orgby'> <img src={phone} className="conicon"/> &nbsp;&nbsp;Phone:</div>
                <div className='orgname'>+2348167482499</div>
                <br/>
                <br/>
                <div className='orgname'>CountDown:</div>
                <div className='countdownn'><Countdown date={"Aug 08, 2023 00:00:00"} /></div>
                <br/>
                 
     
                <div className='row'>
          <div className=' col'>  <img src={bsug} alt="Forest" className='img'/></div>
          <div className='col'>  <img src={bsh} alt="Forest" className='img'/></div>
         </div>
          <br/>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-md-push-9">
                <div className=" ">
            <div className=" card ">
              <div className='sh'>Contest</div>
              <div className='note-2'>Below are the list of the available awards which have different options each.
Nominate and claim for your self or others who merits</div>
              <div className='signup-form'>
              <div className="mb-3">
              <label className="form-label">Award Category *</label>
              <select className="form-select  form-control form-select-lg mb-3" aria-label=".form-select-lg example" onChange={changeCategory}>
              
  <option >Open this select menu</option>
  {getCategory? getCategory.map(data => (
     <option value={data.id}>{data.name}</option>
                    )): "null" }
</select>
</div>

               
               
              
              </div>
              
             {isType? <div> {loading?<Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass="cent"
  visible={true}
/>

:<div>

              <div className='avi'>Please choose your prefered type </div>
              <div className='container'>
              <div className='row'>
               <div className="col-md-3">
                  <div className='card shadow-sm box-shadow'>
                   <img src={golden} className="awardimg" />
                   <div className='card-body'>
                    <div className='subtitle'>GOLDEN PLATE AWARD</div>
                    <div className="amt">₦ 15,000.00</div>
                    {getOption_a?
                    <button className=' btn btn-danger outof' disabled>Out of Stock</button>  
                  :<button className=' btn btn-success submit'  onClick={HandleProcess}  value="GOLDEN PLATE AWARD" optionId={1} dataId={getDataId}  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Check Out</button>
                  }
                   </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className='card shadow-sm box-shadow'>
                  <img src={wooden} className="awardimg" />
                   <div className='card-body'>
                    <div className='subtitle'>WOODEN  AWARD</div>
                    <div className="amt">₦ 7,000.00</div>
                    {getOption_b?
                    <button className=' btn btn-danger outof' disabled>Out of Stock</button>  
                  :<button className=' btn btn-success submit'  onClick={HandleProcess}  value="WOODEN AWARD" optionId={3} dataId={getDataId} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Check Out</button>
                  }
                   </div>
                  </div>
                </div>
                
                <div className="col-md-3">
                  <div className='card shadow-sm box-shadow'>
                  <img src={medal} className="awardimg" />
                   <div className='card-body'>
                    <div className='subtitle'>MEDAL AWARD</div>
                    <div className="amt">₦ 1,600.00</div>
                    {getOption_c?
                    <button className=' btn btn-danger outof' disabled>Out of Stock</button>  
                  :<button className=' btn btn-success submit'  onClick={HandleProcess}  value="MEDAL AWARD" optionId={2} dataId={getDataId}  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Check Out</button>
                  }
                   </div>
                  </div>
                </div>
               
                <div className="col-md-3">
                  <div className='card shadow-sm box-shadow'>
                  <img src={cert} className="awardimg" />
                   <div className='card-body'>
                    <div className='subtitle'>CERTIFICATE AWARD</div>
                    <div className="amt">₦ 1,300.00</div>
                    <button className=' btn btn-success submit'   onClick={HandleProcess}  value="CERTIFICATE AWARD" optionId={4} dataId={getDataId} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Check Out</button>
                   </div>
                  </div>
                </div>
                </div>
              </div>
</div>}
              </div>: 
              <div align="center" className=''>
                {loading?<Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass="cent"
  visible={true}
/>

:<div className='awardcart'>Please select award</div>}
              </div>
              }
            </div>
          </div>
          </div>
        </div>

      </div>
{/* start modal */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    {getAcct?
    
    <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="staticBackdropLabel"><b>Payment Details </b></h5>
    </div>
    <div className="modal-body">
    <p align="center">Transfer ₦ {getAcct.amount} to the account below</p>
    <div className="row">
        <div className="col"><b>Account Name</b></div>
          <div className="col" align="right">{getAcct.name}</div>
          <br/>
          <hr/>
          </div>
          <div className="row">
        <div className="col"><b>Account No</b></div>
          <div className="col" align="right">{getAcct.acctNo}</div>
          <br/>
          <hr/>
          </div>

          <div className="row">
        <div className="col"><b>Bank Name</b></div>
          <div className="col" align="right">{getAcct.bankName}</div>
          <br/>
          <hr/>
          </div>

          <div className="row">
        <div className="col"><div className='b'>Amount</div></div>
          <div className="col" align="right">₦ {getAcct.amount}</div>
          <br/>
          <hr/>
         
          </div>
          <div className="row">
        <div className="col"><b>Award Name</b></div>
          <div className="col" align="right">{getAcct.category}</div>
          <br/>
          <hr/>
          </div>
          <div className="row">
        <div className="col"><b>Award Type</b></div>
          <div className="col" align="right">{getAcct.ctype}</div>
          <br/>
          <hr/>
          </div>
          <p className='notex'>Amount below or above ₦ {getAcct.amount} will be count as void  </p>
         
          
    </div>

    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={Close}>Close</button>
      <button type="button" className="btn btn-primary" confirm={getAcct.acctNo} onClick={Confirmdata}  disabled={loading}>{loading ? 'Loading...' : 'Confirm'}</button>
    </div>
  </div>:



    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Enter your Details </h5>
      </div>
      <div className="modal-body">
      <div className="mb-3">
<label className="form-label">Fullname*</label>
  <input type="text" className="form-control"  {...name} placeholder="Your name" required />
</div>
<div className="mb-3">
<label className="form-label">Phone*</label>
  <input type="number" className="form-control" {...phoneno}  placeholder="Phone No" required />
</div>
<div className="mb-3">
<label className="form-label">Department*</label>
  <input type="text" className="form-control" {...deptno} placeholder="Your Department" required/>
</div>
<p><b>Category :</b> {allData?allData.name:null}</p>
<p> <b>Type :</b> {ttype}</p>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-success" dataId={getDataId} optionId={getoptionId} onClick={SubmitData}  disabled={loading}>{loading ? 'Loading...' : 'Make Payment'}</button>
      </div>
    </div>}
  </div>
</div>
{/* end modal */}




<footer className="foot" align="center">
      <span> All right reseverd @ Paysnug Africa</span>
     
    </footer>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default SignUp;
