import ChevronDown from "../../resources/svg/chevronDown";
import ChevronUp from "../../resources/svg/chevronUp";
import shiba from "../../resources/shiba.png";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import ChatCard from "./ChatCard";


const styles = {
  bullishLabel:
    "flex cursor-pointer active:bg-green-600 items-center text-green-600 border-2 border-green-600 h-min px-2 rounded-lg hover:bg-green-600 hover:text-white hover:fill-white",
  bearishLabel:
    "flex cursor-pointer active:bg-red-600 items-center text-red-600 border-2 border-red-600 h-min px-2 rounded-lg hover:bg-red-600 hover:text-white hover:fill-white",
  input: "w-full bg-[#323546] p-4 outline-none rounded-xl",
  flexBetween: "flex justify-between",
  flexCenter: "flex justify-between items-center",
  chat: "max-w-lg min-w-full",
  chatContainer: "p-4 bg-[#222531] outline-none rounded-xl ",
  postButtonContainer: "flex align-center justify-end",
  boldText: "font-bold",
  activeBullishLabel:
    "flex cursor-pointer bg-green-600 items-center text-white border-2 border-green-600 h-min px-2 rounded-lg ",
  activeBearishLabel:
    "flex cursor-pointer bg-red-600 items-center text-white border-2 border-red-600 h-min px-2 rounded-lg ",
};

const Chat = () => {
  const [message, setMessage] = useState("");
  const [bullishValue, setBullishValue] = useState(true);

  const sendMessage = ()=>{}

  return (
    <>
    <div className={styles.chat}>
      <div className={styles.flexCenter}>
        <p className={styles.boldText}>Crypto Chat</p>
      </div>

      <br />

      <div className={styles.chatContainer}>
        <div className={styles.flexBetween}>
          <div className={styles.flexCenter}>
            <div>
              <Image src={shiba} width={70} height={70} layout="fixed" />
            </div>
            <div className="text-left mr-10">
              <b>Aman</b>
              <p className=" text-gray-400 text-xs">Aman Mittal</p>
            </div>
          </div>

          <div className={styles.flexCenter}>
            <div
              className={
                bullishValue ? styles.activeBullishLabel : styles.bullishLabel
              }
              onClick={() => setBullishValue(true)}
            >
              <ChevronUp fill="#17c784" />
              <small className="ml-1">Bullish</small>
            </div>
            &nbsp;&nbsp;
            <div
              className={
                !bullishValue ? styles.activeBearishLabel : styles.bearishLabel
              }
              onClick={() => setBullishValue(false)}
            >
              <ChevronDown fill="#a52b2b" />
              <small className="ml-1">Bearish</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex">
        <div className="flex items-center text-sm text-green-600 ">
        <ChevronUp fill="#22bc64" />
              <small className="ml-1">Bullish</small>
        </div>
        &nbsp;&nbsp;
            <div
           className="flex items-center text-sm text-red-600 "
            >
              <ChevronDown fill="#a52b2b" />
              <small className="ml-1">Bearish</small>
            </div>
    </div>

    <input type="text" className={styles.input}
     placeholder="What's happening in Crypto..?"
     value={message}
     onChange={(e)=>{setMessage(e.target.value)}}
     />
     {message}
     <div className={styles.postButtonContainer}>
        <Button label='Post' onPress={sendMessage} />
     </div>
     
     <ChatCard />
    
    </>
  );
};

export default Chat;