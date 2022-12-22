import React from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
    console.log(data);
  };

  const date = new Date();

  return (
    <div>
      <div class="flex items-center justify-center p-12">
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
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
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
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
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
