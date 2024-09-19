import React, { useState } from "react";
import useModal from "../../util/customHooks/useModal";
import Modal from "../../components/Modal";
import {userData} from "../../Mockdata/userData"

function MyProfile() {
  const [user, setUser] = useState(userData);

  const [open,handleOpen,handleClose]=useModal()

  const handlePeronalInfo = () => {
    setUser({ ...user, personalEdit: !user?.personalEdit });
  };
  const handleEmail = () => {
    setUser({ ...user, emailEdit: !user?.emailEdit });
  };
  const handleMobile = () => {
    setUser({ ...user, mobileNumberEdit: !user?.mobileNumberEdit });
  };
  return (
    <div className=" p-8 w-[100%]">
      <div className="flex-col">
        <div className="flex items-center mb-8">
          <h1 className="font-bold text-2xl">Personal Information</h1>
          <button
            className="pl-[10%] text-blue-600 "
            onClick={handlePeronalInfo}
          >
            {user?.personalEdit === false ? "Edit" : "Cancel"}
          </button>
        </div>
        <div className="flex my-5 gap-6">
          <input
            className={`py-3 px-2 border ${user.personalEdit === false ? 'text-gray-400' : 'text-black'} `}
            type="text"
            placeholder="user"
            value={user?.personalData?.fname}
            disabled={user.personalEdit === false}
          />
          <input
           className={`py-3 px-2 border ${user.personalEdit === false ? 'text-gray-400' : 'text-black'} `}
            type="text"
            placeholder="user"
            value={user?.personalData?.lname}
            disabled={user.personalEdit === false}
          />
          {user.personalEdit === true ? (
            <div className="py-3 px-4 rounded-md border bg-black text-white">
              <button>Save</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <div>
          <h1>Your Gender</h1>
        </div>
        <div className="flex my-3 gap-5">
          <div>
            <label>
              <input type="radio" checked={user?.personalData?.gender==="male"?"checked":""} disabled={user.personalEdit === false} />
              <span className="pl-2">Male</span>
            </label>
          </div>
          <div>
            <label>
              <input type="radio" checked={user?.personalData?.gender==="female"?"checked":""} disabled={user.personalEdit === false} />
              <span className="pl-2">Female</span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className="flex mt-[6%] items-center mb-8">
          <h1 className="font-bold text-2xl">Email Address</h1>
          <button className="pl-[10%] text-blue-600" onClick={handleEmail}>{user?.emailEdit === false ? "Edit" : "Cancel"}</button>
        </div>
        <div className="flex gap-6">
          <input
            className={`py-3 px-2 border ${user.emailEdit === false ? 'text-gray-400' : 'text-black'}`}
            type="text"
            placeholder="user@gmail.com"
            disabled={user.emailEdit === false}
            value={user?.personalData?.emailAddress}
          />
           {user.emailEdit === true ? (
            <div className="py-3 px-4 rounded-md border bg-black text-white">
              <button>Save</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mb-8">
        <div className="flex mt-[6%] items-center mb-8">
          <h1 className="font-bold text-2xl">Mobile Number</h1>
          <button className="pl-[10%] text-blue-600" onClick={handleMobile}>{user?.mobileNumberEdit === false ? "Edit" : "Cancel"}</button>
        </div>
        <div className="flex gap-6">
          <input
          className={`py-3 px-2 border  ${user.mobileNumberEdit === false ? 'text-gray-400' : 'text-black'}`}
            type="text"
            placeholder="8888444422"
            disabled={user.mobileNumberEdit === false}
            value={user?.personalData?.mobileNumber}
          
          />
           {user.mobileNumberEdit === true ? (
            <div className="py-3 px-4 rounded-md border bg-black text-white">
              <button>Save</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <section>
        <h1 className="font-bold text-lg  mt-[5%]">FAQs</h1>
      </section>
      <div>
        <div className="my-5 ">
          <h1 className="pb-2 font-medium">
            What happens when I update my email address (or mobile number)?
          </h1>
          <h1 className="font-thin">
            Your login email id (or mobile number) changes, likewise. You'll
            receive all your account related communication on your updated email
            address (or mobile number).
          </h1>
        </div>
        <div className="my-5 ">
          <h1 className="pb-2 font-medium">
            When will my Flipkart account be updated with the new email address
            (or mobile number)?
          </h1>
          <h1 className="font-thin">
            It happens as soon as you confirm the verification code sent to your
            email (or mobile) and save the changes.
          </h1>
        </div>
        <div className="my-5 ">
          <h1 className="pb-2 font-medium">
            What happens to my existing Flipkart account when I update my email
            address (or mobile number)?
          </h1>
          <h1 className="font-thin">
            Updating your email address (or mobile number) doesn't invalidate
            your account. Your account remains fully functional. You'll continue
            seeing your Order history, saved information and personal details.
          </h1>
        </div>
        <div className="my-5 ">
          <h1 className="pb-2 font-medium">
            Does my Seller account get affected when I update my email address?
          </h1>
          <h1 className="font-thin">
            Flipkart has a 'single sign-on' policy. Any changes will reflect in
            your Seller account also.
          </h1>
        </div>
      </div>
      <div className="mt-8 flex-col">
        <div>
          <button className=" text-blue-600 my-3">Deactivate Account</button>
        </div>
        <div>
          {" "}
          <button className=" text-red-500 my-3" onClick={handleOpen}>Delete Account</button>
          <Modal isOpen={open} onClose={handleClose}>
              
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
