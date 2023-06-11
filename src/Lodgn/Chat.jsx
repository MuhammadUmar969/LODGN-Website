import React from 'react';
import { SiWechat } from 'react-icons/si';

const Chat = () => {
  return (
    <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full bg-green-500 text-white -mt-10 -left-28 sm:-left-20 md:-left-24 lg:-left-32 xl:-left-40">
      <SiWechat className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pl-1 pt-1.5 sm:pt-1 md:pt-2" />
    </div>
  );
};

export default Chat;
