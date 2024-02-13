import React from "react";

const DeskTopChat = () => {
  return (
    <div className="flex flex-row h-screen antialiased text-gray-800">
      <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
        <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-indigo-800 rounded-3xl">
          <a
            href="#"
            className="flex items-center justify-center h-12 w-12 bg-indigo-100 text-indigo-800 rounded-full"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
          </a>
          <ul className="flex flex-col space-y-2 mt-12">
            <li>
              <a href="#" className="flex items-center">
                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center mt-auto">
            <a
              href="#"
              className="flex items-center justify-center h-12 w-12 bg-indigo-100 text-indigo-800 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-full bg-white px-4 py-6">
        <div className="flex flex-col space-y-4 overflow-y-auto">
          <div className="flex flex-row items-center justify-between pb-2 border-b">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/36"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="ml-2">
                <div className="text-sm font-medium">John Doe</div>
              </div>
            </div>
            <button className="flex items-center bg-indigo-100 text-indigo-800 rounded-full px-2 py-1 text-xs font-medium">
              Chat
            </button>
          </div>
          {/* Additional chat messages here */}
        </div>
        <div className="flex items-center justify-center pt-4">
          <textarea
            className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring focus:ring-indigo-400"
            placeholder="Type your message..."
          />
          <button className="ml-2 bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 text-sm font-medium">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeskTopChat;
