import React from "react";
import { useForm } from "react-hook-form";

const Formhook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data) =>
    await delay(2000).then(() => console.log(data));

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-semibold text-center mb-4">Register</h2>
        
        <div className="mb-4">
          <input
            type="text"
            {...register("username", {
              required: "Username is required",
              minLength: { value: 3, message: "At least 3 characters required" },
              maxLength: { value: 20, message: "Max 20 characters allowed" },
            })}
            placeholder="Username"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>
        
        <div className="mb-4">
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: 3, maxLength: 8 })}
            placeholder="Password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        
        <div className="mb-4">
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Formhook;
