import React from "react";
import StoryBox from "./storyBox";

const PopularityStory = (props) => {
  return (
    <div className="popularityStory">
      <div className="popularityStoryTitle">인기 스토리</div>
      <div className="popularityStoryContainer">
        <StoryBox
          title="반려동물 에티켓, 같이 점검해봐요"
          detail="반려동물 에티켓, 같이 점검해봐요"
        />
        <StoryBox
          title="반려동물 에티켓, 같이 점검해봐요"
          detail="반려동물 에티켓, 같이 점검해봐요"
        />
        <StoryBox
          title="반려동물 에티켓, 같이 점검해봐요"
          detail="반려동물 에티켓, 같이 점검해봐요"
        />
        <StoryBox
          title="반려동물 에티켓, 같이 점검해봐요"
          detail="반려동물 에티켓, 같이 점검해봐요"
        />
      </div>
    </div>
  );
};

export default PopularityStory;
