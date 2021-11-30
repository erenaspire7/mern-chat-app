import Head from "next/head";
import Image from "next/image";
import {
  ChatboxEllipses,
  EllipsisVertical,
  Search,
  Attach,
  Send,
} from "@styled-icons/ionicons-sharp";
import { SmileBeam } from "@styled-icons/fa-regular/SmileBeam";
import { useState } from "react";

export default function Home() {
  const [chatState, setChat] = useState({});

  const arr = [
    {
      title: "Eren",
    },
    { title: "Levi" },
  ];

  return (
    <div className="">
      <Head>
        <title>ChatApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Inserts Loading Screen */}
      <main className="h-screen bg-gradient-to-b from-green-600 to-gray-800 w-full flex items-center justify-center">
        <div className="bg-blue-200 flex flex-row w-11/12 h-5/6 shadow-2xl">
          <div className="flex flex-col h-full bg-gray-800 w-1/3 text-white">
            <div className="h-16 bg-gray-700 flex items-center p-3 justify-between border-r">
              <div className="flex flex-grow">
                <Image
                  src="https://res.cloudinary.com/erenaspire7/image/upload/v1613422066/602acc2bdaddd51903d6937e/dp/profilePic.jpg"
                  width="40"
                  height="40"
                  className="rounded-full"
                ></Image>
              </div>
              <div className="flex justify-between space-x-4 ">
                <ChatboxEllipses size={25}></ChatboxEllipses>
                <EllipsisVertical size={25}></EllipsisVertical>
              </div>
            </div>
            <div className="relative flex justify-center items-center px-4 py-2">
              <span className="absolute inset-y-0 left-6 flex items-center pl-2">
                <Search size={17}></Search>
              </span>
              <input
                className="bg-gray-700 pl-12 rounded-3xl w-full py-1"
                placeholder="Search or start new chat"
              />
            </div>
            <div className="border-t border-gray-500 overflow-y-auto flex flex-grow flex-col ">
              {arr.map((el) => {
                return (
                  <div
                    className="flex py-0 hover:bg-gray-600 "
                    onClick={() => {
                      setChat(el);
                    }}
                  >
                    <div className="px-4 py-3 flex">
                      <Image
                        src="https://res.cloudinary.com/erenaspire7/image/upload/v1613422066/602acc2bdaddd51903d6937e/dp/profilePic.jpg"
                        width="50"
                        height="50"
                        className="rounded-full"
                      ></Image>
                    </div>
                    <div className="flex flex-col flex-grow border-b py-3 border-gray-600 ">
                      <p>{el.title}</p>
                      <p className="text-sm">Last Message</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-grow bg-green-600 flex flex-col text-white justify-center items-center">
            {chatState["title"] ? (
              <>
                <div className="flex h-16 bg-gray-700 w-full flex flex-row items-center px-3 ">
                  <div className="flex">
                    <Image
                      src="https://res.cloudinary.com/erenaspire7/image/upload/v1613422066/602acc2bdaddd51903d6937e/dp/profilePic.jpg"
                      width="40"
                      height="40"
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className="pl-4 flex flex-grow">
                    <p>{chatState["title"]}</p>
                  </div>

                  <div className="flex justify-between space-x-4">
                    <Search size={25}></Search>
                    <EllipsisVertical size={25}></EllipsisVertical>
                  </div>
                </div>
                <div className="flex flex-grow overflow-y-auto"></div>
                <div className="flex h-16 bg-gray-700 w-full flex-row items-center justify-around">
                  <div className="pl-4 pr-2 flex justify-between space-x-2 ">
                    <SmileBeam size={25}></SmileBeam>
                    <Attach size={25}></Attach>
                  </div>
                  <div className="flex flex-grow">
                    <input
                      className="bg-gray-600 pl-4 rounded-3xl w-full py-2"
                      placeholder="Type a message"
                    />
                  </div>
                  <div className="flex px-6">
                    <Send size={21}></Send>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>Hi there 👋, Welcome to ChatApp </p>
                <p>
                  To start a conversation, click the user on the left side of
                  the screen
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
