import React from "react";
import StoryBox from "./storyBox";
import StoryImg1 from "../assets/story-1.jpeg";
import StoryImg2 from "../assets/story-2.jpeg";
import StoryImg3 from "../assets/story-3.jpeg";
import StoryImg4 from "../assets/story-4.jpeg";

const PopularityStory = (props) => {
  return (
    <div className="popularityStory">
      <div className="popularityStoryTitle">인기 스토리</div>
      <div className="popularityStoryContainer">
        <StoryBox
          img={StoryImg1}
          title="10대 청소년들의 유행 시작점은 여기입니다!"
          // detail="반려동물 에티켓, 같이 점검해봐요"
        />
        <StoryBox
          img={StoryImg2}
          title="MZ 들이 말한다! 대기업과 스타트업"
          // detail="반려동물 에티켓, 같이 점검해봐요"
        />
        <StoryBox
          img={StoryImg3}
          title="친환경 제품, 직접적인 영향이 궁금해요"
          // detail="반려동물 에티켓, 같이 점검해봐요"
        />
        <StoryBox
          img={StoryImg4}
          title="나이대 별 트렌드의 조건"
          // detail="반려동물 에티켓, 같이 점검해봐요"
        />
      </div>
    </div>
  );
};

export default PopularityStory;
