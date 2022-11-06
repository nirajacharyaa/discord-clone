import { HashtagIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectChannel, setChannelInfo } from "../features/channelSlice";
const Channel = ({ channelName, id }) => {
  const channel = useSelector(selectChannel);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setChannel = () => {
    dispatch(setChannelInfo({ channelName: channelName, channelId: id }));
    navigate(`/channels/${id}`);
  };

  return (
    <div
      className="mb-3 flex items-center cursor-pointer p-1  hover:bg-[#3a3c43]"
      onClick={() => {
        setChannel();
      }}
    >
      <HashtagIcon className="h-4 mr-1" />
      <h1>{channelName}</h1>
    </div>
  );
};

export default Channel;
