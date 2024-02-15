import React from "react";

const userPets = [
  {
    name: "Zowwie",
    age: "21 Years",
    height: "21cm",
    previousTrainings: ["Fetch", "Sit", "Sniff"],
  },
  {
    name: "Zowwie",
    age: "21 Years",
    height: "21cm",
    previousTrainings: ["Fetch", "Sit", "Sniff"],
  },
  {
    name: "Zowwie",
    age: "21 Years",
    height: "21cm",
    previousTrainings: ["Fetch", "Sit", "Sniff"],
  },
  {
    name: "Zowwie",
    age: "21 Years",
    height: "21cm",
    previousTrainings: ["Fetch", "Sit", "Sniff"],
  },
];
const UserPet = () => {
  return (
    <div className="dog-container">
      <div className="grid grid-rows-2 gap-2 py-4 px-4">
        <div className="image bg-slate-800 h-24 w-24 rounded-full"></div>
        <div className="">
          <h1 className="text-2xl font-bold">Hello Titus</h1>
          <div className="">
            <div className="grid grid-cols-3 gap-2 ">
              <div className="bg-slate-600 h-20 ">
                <p className="text-md ">Training</p>
              </div>
              <div className="bg-slate-600 h-20">
                <p className="text-md ">Training</p>
              </div>
              <div className="bg-slate-600 h-20">
                <p className="text-md ">Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPet;
