import { BlogEntry as BlogEntryInterface } from "@/interfaces/blog";
import { BlogEntry, Like } from "@/components";
import { useState } from "react";
import { BlogEntry01 } from "@/blog-entries";

const BlogCard = ({ id, title, description, date }: BlogEntryInterface) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsVisible(true)}
        className="flex relative flex-col py-3 px-6 space-y-2 h-auto rounded-md ring-2 ring-teal-500 ring-offset-gray-900 transition-all duration-200 ease-in-out cursor-pointer hover:ring-offset-4 group w-[20rem] min-w-[16rem] max-w-[75vw] animate-textFocus active:ring-slate-200"
      >
        <div className="-top-3.5 left-4 text-base text-left transition-all duration-200 ease-in-out sm:absolute sm:px-2 group-hover:-top-4 group-hover:font-bold dark:bg-slate-900">
          {title}
        </div>

        <p className="flex-1 text-sm text-left">{description}</p>
        <div className="flex justify-between items-center w-full">
          <Like id={id} />
          <div className="text-sm">{date}</div>
        </div>
      </button>
      {isVisible && (
        <BlogEntry close={() => setIsVisible(false)}>
          <BlogEntry01 />
        </BlogEntry>
      )}
    </>
  );
};

export default BlogCard;
