import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();

  const blogs = useSelector((state) => state?.blogs);

  const blog = blogs?.find((blog) => blog._id === id);
  console.log(blog);

  const { authorName, image, date, time, title, description } = blog;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-10">
      <div
        class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
        style={{ height: "24em" }}
      >
        <div
          class="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src={image}
          class="absolute left-0 top-0 w-full h-full z-0 object-cover"
          alt=""
        />
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <a
            href="/"
            class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
          >
            Programming
          </a>
          <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
            {title}
          </h2>
          <div class="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              class="h-10 w-10 rounded-full mr-2 object-cover"
              alt=""
            />
            <div>
              <p class="font-semibold text-gray-200 text-sm">
                {authorName !== "undefined" ? authorName : "No Name"}
              </p>
              <p class="font-semibold text-gray-400 text-xs">
                {date} - {time}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p class="pb-6">{description}</p>

        <p class="pb-6">
          Difficulty on insensible reasonable in. From as went he they.
          Preference themselves me as thoroughly partiality considered on in
          estimating. Middletons acceptance discovered projecting so is so or.
          In or attachment inquietude remarkably comparison at an. Is surrounded
          prosperous stimulated am me discretion expression. But truth being
          state can she china widow. Occasional preference fat remarkably now
          projecting uncommonly dissimilar. Sentiments projection particular
          companions interested do at my delightful. Listening newspaper in
          advantage frankness to concluded unwilling.
        </p>

        <p class="pb-6">
          Adieus except say barton put feebly favour him. Entreaties unpleasant
          sufficient few pianoforte discovered uncommonly ask. Morning cousins
          amongst in mr weather do neither. Warmth object matter course active
          law spring six. Pursuit showing tedious unknown winding see had man
          add. And park eyes too more him. Simple excuse active had son wholly
          coming number add. Though all excuse ladies rather regard assure yet.
          If feelings so prospect no as raptures quitting.
        </p>

        <p class="pb-6">
          Exquisite cordially mr happiness of neglected distrusts. Boisterous
          impossible unaffected he me everything. Is fine loud deal an rent open
          give. Find upon and sent spot song son eyes. Do endeavor he differed
          carriage is learning my graceful. Feel plan know is he like on pure.
          See burst found sir met think hopes are marry among. Delightful
          remarkably new assistance saw literature mrs favourable.
        </p>

        <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
          Core Modules of Next js
        </h2>

        <p class="pb-6">
          Guest it he tears aware as. Make my no cold of need. He been past in
          by my hard. Warmly thrown oh he common future. Otherwise concealed
          favourite frankness on be at dashwoods defective at. Sympathize
          interested simplicity at do projecting increasing terminated. As
          edward settle limits at in.
        </p>

        <p class="pb-6">
          Dashwood contempt on mr unlocked resolved provided of of. Stanhill
          wondered it it welcomed oh. Hundred no prudent he however smiling at
          an offence. If earnestly extremity he he propriety something admitting
          convinced ye. Pleasant in to although as if differed horrible. Mirth
          his quick its set front enjoy hoped had there. Who connection
          imprudence middletons too but increasing celebrated principles joy.
          Herself too improve gay winding ask expense are compact. New all paid
          few hard pure she.
        </p>

        <p class="pb-6">
          Breakfast agreeable incommode departure it an. By ignorant at on
          wondered relation. Enough at tastes really so cousin am of. Extensive
          therefore supported by extremity of contented. Is pursuit compact
          demesne invited elderly be. View him she roof tell her case has sigh.
          Moreover is possible he admitted sociable concerns. By in cold no less
          been sent hard hill.
        </p>

        <p class="pb-6">
          Detract yet delight written farther his general. If in so bred at dare
          rose lose good. Feel and make two real miss use easy. Celebrated
          delightful an especially increasing instrument am. Indulgence
          contrasted sufficient to unpleasant in in insensible favourable.
          Latter remark hunted enough vulgar say man. Sitting hearted on it
          without me.
        </p>
      </div>
    </div>
  );
};

export default Blog;
