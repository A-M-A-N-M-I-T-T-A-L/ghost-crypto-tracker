import Image from "next/image";
import Comment from "../../resources/svg/comment";
import Heart from "../../resources/svg/heart";
import MoreHorizontal from "../../resources/svg/moreHorizontal";
import Share from "../../resources/svg/share";
import BullishFilled from "./BullishFilled";
import BearishFilled from "./BearishFilled";
import shiba from "../../resources/shiba.png";

const styles = {
  postAction: "flex items-center",
  chatCard: "border-b-2 border-gray-700 pb-6 mb-6",
  chatCardWrapper: "flex items-center justify-between",
  flexCenter: "flex items-center",
  greyText: "text-gray-400 ml-2",
  grey400: "text-gray-400",
  flexBetween: "flex justify-between",
  messageContent: "my-4 mt- 2",
  labelsContainer: "flex w-full ml-3",
};

const ChatCard = ({
  content = "",
  timeStamp,
  sender,
  bullish,
  senderAvatar = shiba,
  likes,
  comments,
}) => {
  return (
    <div className={styles.chatCard}>
      <div className={styles.chatCardWrapper}>
        <div className={styles.flexCenter}>
          <div>
            <Image
              width={40}
              height={40}
              src={senderAvatar}
              className=" rounded-full"
              alt="Avatar"
            />
          </div>
          <div>
            {sender}
            &nbsp; . &nbsp;
            <span className={styles.grey400}>{timeStamp}</span>
            &nbsp; . &nbsp;
            {bullish ? <BullishFilled /> : <BearishFilled />}
          </div>
        </div>

        <MoreHorizontal />
      </div>

      <p className={styles.messageContent}>{content}</p>

      <div className={styles.flexBetween}>
        <div className={styles.postAction}>
          <Comment />
          <p className={styles.greyText}>{comments}</p>
        </div>

        <div className={styles.postAction}>
          <Heart />
          <p className={styles.greyText}>{likes}</p>
        </div>

        <div className={styles.postAction}>
          <Share />
          <p className={styles.greyText}>Share</p>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
