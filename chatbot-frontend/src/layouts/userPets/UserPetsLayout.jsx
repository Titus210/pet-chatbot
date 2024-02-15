import React from "react";
import UserPet from "../../components/userPets/UserPets";

const UserPetsLayout = () => {
  return (
    <div className="grid grid-cols-2 gap-3 mx-auto w-full ">
      <div className=" bg-slate-400">
        <UserPet/>
      </div>
      <div className=" bg-slate-400">
        <UserPet/>
      </div>
    </div>
  );
};

export default UserPetsLayout;
