import React, { useEffect, useState } from 'react';
import './Profiles.css'

function Profiles() {
  const [Profiles,setProfiles]=useState([]);
  const [display,setDisplay]=useState(false);
  const [profile,setProfile]=useState();
  const [currentPage,setCurrentPage]=useState(1);
  const recordPerPage=10;
  const lastIndex=currentPage*recordPerPage;
  const FirstIndex=lastIndex-recordPerPage;
  const records=Profiles.slice(FirstIndex,lastIndex);
  const npage=Math.ceil(Profiles.length/recordPerPage);
  const numbers=[...Array(npage+1).keys()].slice(1);
  useEffect(()=>{
  getProfiles()
  },[])
  const getProfiles=async()=>{
    let resp = await fetch("http://localhost:5002/Profile/getAllProfiles");
    let result = await resp.json();
    setProfiles(result)
  }
  const seeprofile=(profile)=>{
    setProfile(profile)
    setDisplay(true)
  }

const refreshwindow=()=>{
  setDisplay(!display)
  console.log('dfasdf')
}
const prepage=()=>{
  if(currentPage!==1){
    setCurrentPage(currentPage-1)
  }
}
const ChangePage=(id)=>{
  setCurrentPage(id)
}
const nextPage=()=>{
  if(currentPage!==npage){
    setCurrentPage(currentPage+1)
  }
}
  return (
    <>
    <div className="profile-container">
      {display ? "":records?.map((profile)=>{
        return(
          <div className='profile-card' key={profile._id}>
        <div>
          <p>Name:{profile.Name}</p>
          <p>Gender:{profile.Gender}</p>
          <p>MotherTongue:{profile.MotherTongue}</p>
        </div>
        <div>
          <p>Mobile:{profile.Mobile}</p>
          <p>DOB:{profile.DOB}</p>
          <p>Living:{profile.Living}</p>
          <button onClick={()=>seeprofile(profile)} className='seeprofile-btn'>See Profile</button>
        </div>
      </div>
        )
      })}
    </div>
    {
      display? 
      <div>
        <div className="register-form">
          <div>
            <p>Email</p>
            <p>{profile.Email}</p>
          </div>
          <div>
            <p>Profile Created For</p>
            <p>{profile.ProfileFor}</p>
          </div>
          <div>
            <p>Name</p>
            <p>{profile.Name}</p>
           
          </div>
          <div>
            <p>Gender</p>
            <p>{profile.Gender}</p>

          </div>
          <div>
            <p>DOB</p>
            <p>{profile.DOB}</p>

          </div>
          <div>
            <p>Religon</p>
            <p>{profile.Religon}</p>

          </div>
          <div>
            <p>Mother Tongue</p>
            <p>{profile.MotherTongue}</p>
          </div>
          <div>
            <p>Living in</p>
            <p>{profile.Living}</p>
          </div>
          <div>
            <p>Mobile No</p>
            <p>{profile.Mobile}</p>
          </div>
        <button onClick={refreshwindow} className='seeprofile-btn'>Close</button>
        </div>
      </div>
      :<div></div>
    }
    <div className="pagination">
      <li className='prev' onClick={prepage}>
        <a href="#">Prev</a>
      </li>
      {
        numbers?.map((n,i)=>{
          return(
            <li key={i} className={`pagelist ${currentPage === n ?"active":''}`} onClick={()=>ChangePage(n)}><a href="#" >{n}</a></li>
          )
        })
      }
      <li className='prev' onClick={nextPage}>
        <a href="#" >Next</a>
      </li>
    </div>
    </>
  )
}

export default Profiles;