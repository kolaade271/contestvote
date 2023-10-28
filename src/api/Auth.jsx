import axios from 'axios';




export const Category = (id) => {
  return (axios.post(`https://app.paysnug.link/cont/category?id=${id}`,
    {
    }, {
    headers: {
      'Content-Type': 'application/json',
    }
  }));

}



export const Gettype = (option) => {
  return (axios.post("https://app.paysnug.link/cont/gettype",
    {
      option:option
    }, {
    headers: {
      'Content-Type': 'application/json',
    }
  }));

}


export const Submit = (fullname,phone,dept,dataId,optionId) => {
  return (axios.post("https://app.paysnug.link/cont/submit",
    {
      fullName:fullname,
      phone:phone,
      dept:dept,
      dataId:dataId,
      optionId:optionId
    }, {
    headers: {
      'Content-Type': 'application/json',
    }
  }));

}

export const Confirm = (id) => {
  return (axios.post("https://app.paysnug.link/cont/confirm",
    {
      confirm:id
    }, {
    headers: {
      'Content-Type': 'application/json',
    }
  }));

}

