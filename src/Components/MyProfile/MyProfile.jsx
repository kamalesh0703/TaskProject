import React, { useEffect, useId, useState } from "react";

function MyProfile(Profiles) {
  console.log(Profiles)
  const [Profile, setProfile] = useState([]);
  const [Email, setEmail] = useState(Profiles?.src[0]?.Email);
  const [Password, setPassword] = useState(Profiles?.src[0]?.Password);
  const [Name, setName] = useState(Profiles?.src[0]?.Name);
  const [Gender, setGender] = useState(Profiles?.src[0]?.Gender);
  const [ProfileFor, setProfileFor] = useState(Profiles?.src[0]?.ProfileFor);
  const [DOB, setDOB] = useState(Profiles?.src[0]?.DOB);
  console.log(DOB)
  const [Religon, setRelgon] = useState(Profiles?.src[0]?.Religon);
  const [MotherTongue, setMotherTongue] = useState(Profiles?.src[0]?.MotherTongue);
  const [Living, setLiving] = useState(Profiles?.src[0]?.Living);
  const [Mobile, setMobile] = useState(Profiles?.src[0]?.Mobile);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const userId = localStorage.getItem("userId");
    let resp = await fetch(`http://localhost:5002/Profile/me/${userId}`);
    let result = await resp.json();
    setProfile(result);
    await setLoading(true);

    console.log(result);
  };
  const handleUpdate = async () => {
    const userId = localStorage.getItem("userId");
    const reqObj = {
      Name: Name,
      Password: Password,
      Email: Email,
      Gender: Gender,
      ProfileFor: ProfileFor,
      DOB: DOB,
      Religon: Religon,
      Living: Living,
      MotherTongue: MotherTongue,
      Mobile: Mobile,
    };
    let headers = {
      method: "PUT",
      body: JSON.stringify(reqObj),
      headers: {
        "content-type": "application/json",
      },
    };
    let resp = await fetch(
      `http://localhost:5002/Profile/editprofile/${userId}`,
      headers
    );
    let result = await resp.json();    
  };
  return (
    <div>
      {isloading?
      <div className="register-form">
        <div>
          <p>Email</p>
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div>
          <p>Profile Created For</p>
          <select
            name="selectedFruit"
            value={ProfileFor}
            onChange={(e) => setProfileFor(e.target.value)}
          >
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
          <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <p>Gender</p>
          <select
            name="selectedFruit"
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" selected="selected" disabled="disabled">
              -- select one --
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <p>DOB</p>
          <input type="text" value={DOB} onChange={(e) => setDOB(e.target.value)} />
        </div>
        <div>
          <p>Religion</p>
          <select onChange={(e) => setRelgon(e.target.value)} value={Religon}>
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
          <input
            type="text"
            value={MotherTongue}
            onChange={(e) => setMotherTongue(e.target.value)}
          />
        </div>
        <div>
          <p>Living in</p>
          <input type="text"value={Living} onChange={(e) => setLiving(e.target.value)} />
        </div>
        <div>
          <p>Mobile No</p>
          <input type="text" value={Mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <button
          className="seeprofile-btn"
          onClick={handleUpdate}
        >
          save
        </button>
      </div>:<div>loading</div>}
    </div>
  );
}

export default MyProfile;
