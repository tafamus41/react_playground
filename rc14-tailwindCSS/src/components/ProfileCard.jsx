import React from "react";

const ProfileCard = () => {
  return (
    <div class="user-card">
      <div class="flex flex-col items-center pb-10">
      <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=1"
          alt="Bonnie"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div class="flex mt-4 md:mt-6">
          <button class="btn-primary">Add friend</button>
          <button class="btn-secondary">Message</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
