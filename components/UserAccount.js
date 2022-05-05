import React, { useEffect, useContext } from "react";
import AuthContext from "./context/auth/authContext";
import { formatDate } from "../utilities/dateFormat";

export default function UserAccount() {
  // Get the auth context.
  const authContext = useContext(AuthContext);
  const { user, getUserDetails } = authContext;

  // Load the user Details.
  useEffect(() => {
    getUserDetails();
  });

  // Unpack the user details.
  const { userName, email, gender, dateCreated } = user;

  // Format the date.
  const userCreationDate = formatDate(dateCreated);

  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-32">
      <h2 className="text-4xl mb-5 font-oswald text-indigo-500 hover:text-purple-500">
        Admin User Details
      </h2>
      <section className="flex flex-wrap md:flex-row justify-between items-center w-[90%] md:w-1/2 space-x-20 bg-gray-100 border-2 hover:border-indigo-500 m-2 p-5 rounded-lg text-indigo-500 hover:text-purple-500">
        <h3 className="text-lg md:text-2xl font-zilla font-medium">Name:</h3>
        <p className="text-sm md:text-xl font-montserrat font-semibold">
          {userName}
        </p>
      </section>
      <section className="flex flex-wrap md:flex-row justify-between items-center w-[90%] md:w-1/2 space-x-20 bg-gray-100 border-2 hover:border-indigo-500 m-2 p-5 rounded-lg text-indigo-500 hover:text-purple-500">
        <h3 className="text-lg md:text-2xl font-zilla font-medium">Email:</h3>
        <p className="text-sm md:text-xl font-montserrat font-semibold">
          {email}
        </p>
      </section>
      <section className="flex flex-wrap md:flex-row justify-between items-center w-[90%] md:w-1/2 space-x-20 bg-gray-100 border-2 hover:border-indigo-500 m-2 p-5 rounded-lg text-indigo-500 hover:text-purple-500">
        <h3 className="text-lg md:text-2xl font-zilla font-medium">Sex:</h3>
        <p className="text-sm md:text-xl font-montserrat font-semibold">
          {gender}
        </p>
      </section>
      <section className="flex flex-wrap md:flex-row justify-between items-center w-[90%] md:w-1/2 space-x-20 bg-gray-100 border-2 hover:border-indigo-500 m-2 p-5 rounded-lg text-indigo-500 hover:text-purple-500">
        <h3 className="text-lg md:text-2xl font-zilla font-medium">
          Creation Date:
        </h3>
        <p className="text-sm md:text-xl font-montserrat font-semibold">
          {userCreationDate}
        </p>
      </section>
    </div>
  );
}
