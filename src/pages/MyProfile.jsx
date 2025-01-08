import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Fahad Masroor",
    image: assets.profile_pic,
    email: "masroorfahad2704@gmail.com",
    phone: "+91 7563987828",
    address: {
      line1: "57th Cross,  Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2003-04-27",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}

      <hr />

      <div>
        <p>Text Contact Info</p>
        <div>
          <p>Email id :</p>
          <p>{userData.email}</p>

          <p>Phone :</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p>Address:</p>
          {
            isEdit ? <p>
              <input type="text"/>
              <br />
              <input type="text" />
              <br />
              : <p>{
                userData.address.line1}
                <br />
                {userData.address.line2}
                </p>
            </p>
}
          <p>BASIC INFO</p>
          <p>Gender :</p>
          <p>{userData.gender}</p>

          <p>Birthday :</p>
          <p>{userData.dob}</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
