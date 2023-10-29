import '../css/signup.css';
import React, { useState, useEffect } from 'react';
import { Category, Gettype, Submit, Confirm, Page } from '../api/Auth';
import org from "../img/corporation.png";
import message from "../img/message.png";
import phone from "../img/phone.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GenAlert } from '../alert/alert';
import { Bars } from 'react-loader-spinner'
import Nav from './nav';
import Countdown from 'react-countdown';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';


function Contest() {

  const [getCategory, setCategory] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loadingx, setLoadingx] = useState(false);
  const [getDataId, setDataId] = useState(false);
  const [isType, getisType] = useState(false);
  const [allData, getAlldata] = useState(false);
  const [ttype, gettType] = useState(false);
  const [getAcct, setAcct] = useState(false);
  const name = useFormInput('');
  const phoneno = useFormInput('');
  const deptno = useFormInput('');


  const { id } = useParams();
  const [contestDetails, setContestDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingx(true)
        const response = await axios.get(`https://app.paysnug.link/cont/page?id=${id}`);
        setContestDetails(response.data);
        setLoadingx(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    Category(id).then(response => {
      console.log(response.data)
      setCategory(response.data.data)

    })
  }, [])
  const HandleProcess = (process) => {
    gettType(false)
    gettType(process)

  }

  if (loadingx) {
    return <div>Loading...</div>;
  }

  if (error) {

    return <div>Error loading data. Please try again later.</div>;
  }

  if (!contestDetails && !loadingx) {
    // Render your 404 component here
    return <NotFound />;
  }








  const Confirmdata = (process) => {

    const id = process.target.getAttribute('confirm');
    setLoading(true)
    Confirm(id).then(response => {
      const stat = response.data.data;
      setLoading(false)
      if (stat === true) {

        GenAlert(true, "Transaction Successull close the page");

      }
      else {
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
    if (fullname != "") {
      if (phone) {
        if (dept != "") {
          Submit(fullname, phone, dept, dataId, optionId).then(response => {
            setLoading(false)
            const data = response.data.data;
            console.log(response.data.data)
            setAcct(data)
            //setCategory(response.data.data)
            if (data.status == true) {

            }
          })
        }
        else {
          GenAlert(false, "Department Required");
          setLoading(false)
        }
      }
      else {
        GenAlert(false, "Phone  Required");
        setLoading(false)
      }

    }
    else {
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
      getAlldata(data)
      setDataId(data ? data.categoryCode : false)
      getisType(true)
      setLoading(false)
      window.scrollTo(90, 5100);


      //setCategory(response.data.data)
    })
  };
  const containerStyle = {
    color: 'white',
    minHeight: '400px',

    backgroundImage: `url(${contestDetails.data.backimg})`, // Dynamically set the background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: 'inset 0 0 0 2000px hsla(252, 94%, 7%, 0.547)',
  };

  return (
    <div className="body">
      <Nav />
      <ToastContainer />



      <div style={containerStyle}>
        <div className="container">
          <div className="title" align="center"> {contestDetails.data.heading}</div>
          <div className="dsc" align="center">{contestDetails.data.description}</div>

        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container">


        <div className="row  ">
          <div className="col-lg-3 col-md-3  mtx ">
            <div className='orginfo'>
              <div className='card'>
                <div className="container">
                  <div className='orgby'> <img src={org} className="conicon" /> &nbsp;&nbsp;Organized By:</div>
                  <div className='orgname'>{contestDetails.data.orginizedBy}</div>
                  <div className='orgby'><img src={message} className="conicon" />&nbsp;&nbsp;Email:</div>
                  <div className='orgname'>{contestDetails.data.email}</div>
                  <div className='orgby'> <img src={phone} className="conicon" /> &nbsp;&nbsp;Phone:</div>
                  <div className='orgname'>{contestDetails.data.phone}</div>
                  <br />
                  <br />
                  <div className='orgname'>CountDown:</div>
                  <div className='countdownn '><elem className={contestDetails.data.countDown <="Oct 25, 2023 11:00:00"?"warding":""}><Countdown date={contestDetails.data.countDown} /></elem></div>
                  <br />


                  <div className='row'>
                    <div className=' col'>  <img src={contestDetails.data.logo1} alt="Forest" className='img' /></div>
                    <div className='col'>  <img src={contestDetails.data.logo2} alt="Forest" className='img' /></div>
                  </div>
                  <br />

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
                      {getCategory ? getCategory.map(data => (
                        <option value={data.categoryCode}>{data.name}</option>
                      )) : "null"}
                    </select>
                  </div>




                </div>

                {isType ? <div> {loading ? <Bars
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass="cent"
                  visible={true}
                />

                  : <div>


                    <div className='container'>
                      <div className='row'>
                        {Array.isArray(allData) && allData.length > 0 ? (
                          allData.map(data => (
                            <div className={`col-md-4 mpp ${data.contestVolume >= 200 ? 'green-progress' : (data.contestVolume >= 100 ? 'blue-progress' : 'red-progress')}`}>
                              <div className='card h-100 shadow-sm box-shadow' style={{ maxHeight: '100%', overflow: 'auto' }}>
                                <img src={data.image} className="awardimgpeople" alt={data.name} />
                                <div className='card-body'>
                                  <div className='subtitle'>{data.name}</div>
                                  <div className="amt">{data.contest_name}</div>
                                  <div className="progress">
                                    <div
                                      className={`progress-bar progress-bar-striped ${(data.contestVolume / contestDetails.data.threshold) * 100 >= 99
                                          ? 'bg-success'
                                          : (data.contestVolume / contestDetails.data.threshold) * 100 >= 30
                                            ? 'bg-info'
                                            : (data.contestVolume / contestDetails.data.threshold) * 100 >= 20
                                              ? 'bg-warning'
                                              : "bg-danger"

                                        }`}
                                      role="progressbar"
                                      style={{
                                        width: `${(data.contestVolume / contestDetails.data.threshold) * 100}%`, // Calculate percentage and set width
                                      }}
                                      aria-valuenow={(data.contestVolume / contestDetails.data.threshold) * 100}
                                      aria-valuemin="1"
                                      aria-valuemax="100"
                                    >
                                    </div>
                                  </div>

                                  <div align="center">
                                        {data.contestVolume >= 200 ? `VOTE ${data.contestVolume}` : ''}
                                      </div>
                                  <button
                                    className='btn btn-success submit'
                                    onClick={() => HandleProcess(data)}
                                    value={data}
                                    optionId={1}
                                    dataId={getDataId}
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                  >
                                    Check Out
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))


                        ) : (
                          <div align="center">No data available</div>
                        )}







                      </div>
                    </div>
                  </div>}
                </div> :
                  <div align="center" className=''>
                    {loading ? <Bars
                      height="80"
                      width="80"
                      color="#4fa94d"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass="cent"
                      visible={true}
                    />

                      : <div className='awardcart'>Please select award</div>}
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
          {getAcct ?

            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel"><b>Payment Details </b></h5>
              </div>
              <div className="modal-body">
                <p align="center">Transfer ₦ {getAcct.amount} to the account below</p>
                <div className="row">
                  <div className="col"><b>Account Name</b></div>
                  <div className="col" align="right">{getAcct.name}</div>
                  <br />
                  <hr />
                </div>
                <div className="row">
                  <div className="col"><b>Account No</b></div>
                  <div className="col" align="right">{getAcct.acctNo}</div>
                  <br />
                  <hr />
                </div>

                <div className="row">
                  <div className="col"><b>Bank Name</b></div>
                  <div className="col" align="right">{getAcct.bankName}</div>
                  <br />
                  <hr />
                </div>

                <div className="row">
                  <div className="col"><div className='b'>Amount</div></div>
                  <div className="col" align="right">₦ {getAcct.amount}</div>
                  <br />
                  <hr />

                </div>
                <div className="row">
                  <div className="col"><b>Award Name</b></div>
                  <div className="col" align="right">{getAcct.category}</div>
                  <br />
                  <hr />
                </div>
                <div className="row">
                  <div className="col"><b>Award Type</b></div>
                  <div className="col" align="right">{getAcct.ctype}</div>
                  <br />
                  <hr />
                </div>
                <p className='notex'>Amount below or above ₦ {getAcct.amount} will be count as void  </p>


              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={Close}>Close</button>
                <button type="button" className="btn btn-primary" confirm={getAcct.acctNo} onClick={Confirmdata} disabled={loading}>{loading ? 'Loading...' : 'Confirm'}</button>
              </div>
            </div> :



            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Details </h5>
              </div>
              <div className="modal-body">
                <div align="center"><img src={ttype.image} className='awardimgpeople1' /></div>
                <br />
                <div align="center">{ttype.name}</div>
                <div className="progress">
                  <div className={`progress-bar progress-bar-striped ${(ttype.contestVolume / contestDetails.data.threshold) * 100 >= 99
                      ? 'bg-success'
                      : (ttype.contestVolume / contestDetails.data.threshold) * 100 >= 30
                        ? 'bg-info'
                        : (ttype.contestVolume / contestDetails.data.threshold) * 100 >= 20
                          ? 'bg-danger'
                          : "bg-warning"

                    }`} role="progressbar" style={{
                      width: `${(ttype.contestVolume / contestDetails.data.threshold) * 100}%`, // Calculate percentage and set width
                    }}
                    aria-valuenow={(ttype.contestVolume / contestDetails.data.threshold) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                </div>



                <div className="container mt-2">
                  <table className="table">
                    <tbody>

                      <tr>
                        <td>Category:</td>
                        <td>{ttype.contest_name}</td>
                      </tr>
                      <tr>
                        <td>Department:</td>
                        <td>{ttype.department}</td>
                      </tr>
                      <tr>
                        <td>Account No:</td>
                        <td>{ttype.accountNumber}</td>
                      </tr>
                      <tr>
                        <td>Bank Name:</td>
                        <td>{ttype.bankName}</td>
                      </tr>
                      <tr>
                        <td>Description:</td>
                        <td>{ttype.description}</td>
                      </tr>

                    </tbody>
                  </table>
                  <p className='notex'>Each vote costs 50 naira and can be made in multiples of 50 naira. The system will tally the total based on these multiples. </p>
                </div>




              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">okay</button>
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

export default Contest;
