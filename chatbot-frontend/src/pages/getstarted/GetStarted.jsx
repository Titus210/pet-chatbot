import React from "react";
import { Link } from "react-router-dom";

import chatBot from "../../assets/images/bot-1.png";

const GetStarted = () => {
  return (
    <>
      <div className="h-screen bg-white flex flex-col items-center justify-center md:w-7/12 mx-auto ">
        <div className="h-full py-4 flex flex-col items-center justify-between gap-4 md:h-auto">
          <div className=""></div>

          <div className="intro">
            <div className="h-auto flex items-center rounded-full">
              <img
                src={chatBot}
                alt="PetBot"
                className="h-48 w-48 mx-auto rounded-full"
              />
            </div>
            <h1 className="text-blue text-3xl font-bold text-center">
              Welcome to <span className="yellow">PetBot </span>
              <br />{" "}
              <span className="text-md text-gray-500">
                Your Personal Pet Assistant
              </span>
            </h1>
          </div>

          <div className="button flex flex-col gap-3">
            <div className="">
              <p className="text-gray-500">
                Nice to meet you! What can I do for you today
              </p>
            </div>
            <div className="w-11/12 mx-auto text-center">
              <Link to="/chat">
                <p className="px-4 py-2 bg-blue text-white rounded-lg">
                  Get Started
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
