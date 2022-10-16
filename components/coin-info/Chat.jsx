import ChevronDown from "../../resources/svg/chevronDown";
import ChevronUp from "../../resources/svg/chevronUp";
import shiba from "../../resources/shiba.png";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import ChatCard from "./ChatCard";
import { faker } from "@faker-js/faker";
import { GunContext } from "../../context/gunContext";
import { useContext } from "react";
import { useEffect } from "react";

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

  const { gun, getMessages, state } = useContext(GunContext);

  useEffect(() => {
    getMessages("GUN_REF_7");
  }, []);

  const formattedMessagesArray = () => {
    const uniqueArray = state.messages.filter((value, index) => {
      const _value = JSON.stringify(value);
      return (
        index ===
        state.messages.findIndex((obj) => {
          return JSON.stringify(obj) === _value;
        })
      );
    });
    return uniqueArray;
  };

  const sendMessage = () => {
    if (message.trim() === "") return;
    const messagesRef = gun.get("GUN_REF_7");

    const newMessage = {
      sender: faker.name.fullName(),
      avatar:
        "https://png.pngtree.com/png-clipart/20210520/ourmid/pngtree-small-eye-handsome-boys-colorless-character-avatar-png-image_3286527.jpg",
      content: message.trim(),
      isBullish: bullishValue,
      createdAt: Date().substring(4, 11),
      messageId: Date.now(),
    };

    messagesRef.set(newMessage);
    setMessage("");
  };

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
                  !bullishValue
                    ? styles.activeBearishLabel
                    : styles.bearishLabel
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
        <div className="flex items-center text-sm text-red-600 ">
          <ChevronDown fill="#a52b2b" />
          <small className="ml-1">Bearish</small>
        </div>
      </div>

      <input
        type="text"
        className={styles.input}
        placeholder="What's happening in Crypto..?"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <div className={styles.postButtonContainer}>
        <Button label="Post" onPress={sendMessage} />
      </div>

      {formattedMessagesArray()
        .slice(0)
        .reverse()
        .map((message, index) => (
          <ChatCard
            key={index}
            sender={message.sender}
            senderUsername={message.username}
            // senderAvatar={
            //   "https://png.pngtree.com/png-clipart/20210520/ourmid/pngtree-small-eye-handsome-boys-colorless-character-avatar-png-image_3286527.jpg"
            // }
            bullish={message.isBullish}
            timeStamp={message.createdAt}
            content={message.content}
            likes="1.4K"
            comments="2.3K"
          />
        ))}
    </>
  );
};

export default Chat;
