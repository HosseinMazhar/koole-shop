import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface comments {
  userName: string;
  text?: string;
  score: number;
}

interface feedBackProps {
  id: number;
  comments: comments[];
}

const FeedBack: React.FC<feedBackProps> = ({ id, comments }) => {
  const [rating, setRating] = useState(null);
  const [yourFeedBack, setYourFeedBack] = useState("");
  return (
    <div className="w-full flex flex-col justify-center items-center pb-10 px-10 gap-3">
      <form className="w-full w-max-[600px] flex flex-col justify-center items-center gap-2">
        <Textarea
          value={yourFeedBack}
          onChange={(e) => setYourFeedBack(e.target.value)}
          className="text-xs w-full max-w-[600px]"
          placeholder="type your feedback here..."
        />
        <div className="flex w-full max-w-[600px] justify-start items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className="cursor-pointer text-xl"
              style={{
                color: star <= rating ? "#FFD700" : "#ccc",
              }}
            >
              ★
            </span>
          ))}
        </div>
        <div className="w-flex w-full max-w-[600px] flex justify-end">
          <Button>Submit</Button>
        </div>
      </form>
      {comments.map((comment, index) => {
        return (
          <div
            key={index}
            className="w-full border flex flex-col max-w-[600px] justify-start items-start px-6 py-3 rounded-lg"
          >
            <p className="font-bold">{comment.userName}</p>
            <div className="w-full flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="cursor-pointer text-sm"
                  style={{
                    color: star <= comment.score ? "#FFD700" : "#ccc",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            {comment.text && <p>{comment.text}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default FeedBack;
