import React from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../../Context/Context";
import Loading from "../Loading/Loading";
import PostsCard from "../Common/Posts/PostsCard";

const FilterPost = () => {
  const { tag } = useParams(); // Extract the 'tag' from the URL
  const { postData, postLoading } = Blog(); // Access postData and postLoading from context

  // Filter posts based on the tag
  const filteredData = React.useMemo(
    () =>
      postData.filter(
        (post) => post.tags && post.tags.includes(tag.toLowerCase())
      ),
    [postData, tag]
  );

  return (
    <section className="size my-[2rem]">
      <div>
        <h3 className="text-3xl pb-6 border-b border-black mb-[3rem]">
          {filteredData.length > 0
            ? `Your Filtered Posts (${filteredData.length}) :`
            : "There are no posts with this tag"}
        </h3>
        {postLoading ? (
          <Loading />
        ) : (
          <div className="lg:max-w-[60%] flex flex-col gap-[2rem]">
            {filteredData.map((post, i) => (
              <PostsCard post={post} key={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterPost;
