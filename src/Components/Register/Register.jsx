import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const [Name,setName]=useState('');
  const [Gender,setGender]=useState('');
  const [ProfileFor,setProfileFor]=useState('');
  const [DOB,setDOB]=useState('');
  const [Religon,setRelgon]=useState('');
  const [MotherTongue,setMotherTongue]=useState('');
  const [Living,setLiving]=useState('');
  const [Mobile,setMobile]=useState('');

  const hadlesubmit=async(e)=>{
    e.preventDefault();
    const reqObj={Name:Name,Password:Password,Email:Email,Gender:Gender,ProfileFor:ProfileFor,DOB:DOB,Religon:Religon,Living:Living,MotherTongue:MotherTongue,Mobile:Mobile}
    let headers = {
      method: "POST",
      body: JSON.stringify(reqObj),
      headers: {
        "content-type": "application/json",
      },
    };
    let resp = await fetch("http://localhost:5002/Profile/register", headers);
    let result = await resp.json();
    console.log(result)
    alert(result.Msg)
  }
  return (
    <div className="register-container">
      <div className="left">
        <div className="register-form">
          <div>
            <p>Email</p>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div>
            <p>Password</p>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div>
            <p>Profile Created For</p>
            <select name="selectedFruit" onChange={(e)=>setProfileFor(e.target.value)}>
              <option value="" selected="selected" disabled="disabled">
                -- select one --
              </option>
              <option value="MySelf">MySelf</option>
              <option value="Son">Son</option>
              <option value="Son">Daughter</option>
              <option value="Son">Brother</option>
              <option value="Son">Sister</option>
              <option value="Son">Friend</option>
              <option value="Son">Relative</option>
            </select>
          </div>
          <div>
            <p>Name</p>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
          </div>
          <div>
            <p>Gender</p>
            <select name="selectedFruit" onChange={(e)=>setGender(e.target.value)}>
              <option value="" selected="selected" disabled="disabled">
                -- select one --
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <p>DOB</p>
            <input type="date" onChange={(e)=>setDOB(e.target.value)} />
          </div>
          <div>
            <p>Religion</p>
            <select onChange={(e)=>setRelgon(e.target.value)}>
              <option value="" selected="selected" disabled="disabled">
                -- select one --
              </option>
              <option value="African Traditional &amp; Diasporic">
                African Traditional &amp; Diasporic
              </option>
              <option value="Agnostic">Agnostic</option>
              <option value="Atheist">Atheist</option>
              <option value="Baha'i">Baha'i</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Cao Dai">Cao Dai</option>
              <option value="Chinese traditional religion">
                Chinese traditional religion
              </option>
              <option value="Christianity">Christianity</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Islam">Islam</option>
              <option value="Jainism">Jainism</option>
              <option value="Juche">Juche</option>
              <option value="Judaism">Judaism</option>
              <option value="Neo-Paganism">Neo-Paganism</option>
              <option value="Nonreligious">Nonreligious</option>
              <option value="Rastafarianism">Rastafarianism</option>
              <option value="Secular">Secular</option>
              <option value="Shinto">Shinto</option>
              <option value="Sikhism">Sikhism</option>
              <option value="Spiritism">Spiritism</option>
              <option value="Tenrikyo">Tenrikyo</option>
              <option value="Unitarian-Universalism">
                Unitarian-Universalism
              </option>
              <option value="Zoroastrianism">Zoroastrianism</option>
              <option value="primal-indigenous">primal-indigenous</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <p>Mother Tongue</p>
            <input type="text" onChange={(e)=>setMotherTongue(e.target.value)} />
          </div>
          <div>
            <p>Living in</p>
            <input type="text" onChange={(e)=>setLiving(e.target.value)} />
          </div>
          <div>
            <p>Mobile No</p>
            <input type="text" onChange={(e)=>setMobile(e.target.value)} />
          </div>
          <button onClick={hadlesubmit} className='seeprofile-btn'>Register</button>
        </div>
      </div>
      {/* right side form */}
      <div className="right">
      <div className="register-form">
          <div>
            <p>Email</p>
            <p>{Email}</p>
          </div>
          <div>
            <p>Password</p>
            <p>{Password}</p>

          </div>
          <div>
            <p>Profile Created For</p>
            <p>{ProfileFor}</p>
          </div>
          <div>
            <p>Name</p>
            <p>{Name}</p>
           
          </div>
          <div>
            <p>Gender</p>
            <p>{Gender}</p>

          </div>
          <div>
            <p>DOB</p>
            <p>{DOB}</p>

          </div>
          <div>
            <p>Religon</p>
            <p>{Religon}</p>

          </div>
          <div>
            <p>Mother Tongue</p>
            <p>{MotherTongue}</p>
          </div>
          <div>
            <p>Living in</p>
            <p>{Living}</p>
          </div>
          <div>
            <p>Mobile No</p>
            <p>{Mobile}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
