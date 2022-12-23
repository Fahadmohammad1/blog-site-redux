import React from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  return (
    <div>
      <div class="flex items-center justify-center px-12 pb-12 pt-5">
        <div class="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-4">
              <label
                for="title"
                class="mb-2 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                {...register("title")}
                type="text"
                name="title"
                id="title"
                required
                placeholder="Blog Title"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-4 hidden">
              <label
                for="date"
                class="mb-2 block text-base font-medium text-[#07074D]"
              >
                Date
              </label>
              <input {...register("date")} value={date} name="date" id="date" />
            </div>
            <div class="mb-4 hidden">
              <label
                for="time"
                class="mb-2 block text-base font-medium text-[#07074D]"
              >
                Time
              </label>
              <input {...register("time")} value={time} name="time" id="time" />
            </div>
            <div class="mb-4">
              <label
                for="authorName"
                class="mb-2 block text-base font-medium text-[#07074D]"
              >
                Author Name
              </label>
              <input
                {...register("authorName")}
                type="text"
                name="authorName"
                id="authorName"
                required
                placeholder="Mr Andrew Tate"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-4">
              <label
                for="tags"
                class="mb-2 block text-base font-medium text-[#07074D]"
              >
                Tags (you can add multiple)
              </label>
              <input
                {...register("tags")}
                type="text"
                name="tags"
                id="tags"
                required
                placeholder="Programming, Web development, Javascript"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="mb-4">
              <label
                for="description"
                class="mb-2 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                rows="4"
                name="description"
                id="description"
                required
                placeholder="Write details here"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div class="mb-4">
              <label
                for="image"
                class="mb-2 block text-base font-medium text-[#07074D]"
              >
                Image Link
              </label>
              <input
                {...register("image")}
                type="link"
                name="image"
                id="image"
                required
                placeholder="Add a demo image of your content"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <input
                value="POST"
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none w-full text-center"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
