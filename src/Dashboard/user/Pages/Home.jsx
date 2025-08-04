import React from "react";

function Home() {
  const savedata = JSON.parse(localStorage.getItem("allResumes"));

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center px-4">
      <h1>
        Welcome to Resume Builder
      </h1>
      




    </div>

  );
}

export default Home;
