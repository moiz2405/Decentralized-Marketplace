"use client";
import React from 'react';

const OwnerInfo = ({ ownerAddress, ownerProfilePic, creatorAddress, creatorProfilePic, creatorVerified }) => (
  <div className="owner-info bg-gradient-to-r from-blue-900 to-black shadow-lg rounded-lg p-4 mt-4 text-white">
    <h3 className="text-lg font-semibold mb-2">Owner and Creator Info</h3>
    
    <div className="flex items-center mt-2 transition-transform transform hover:scale-105 hover:shadow-md">
      <img src={ownerProfilePic} alt="Owner" className="w-10 h-10 rounded-full border-2 border-blue-500" />
      <a href={`/profile/${ownerAddress}`} className="ml-3 text-blue-300 hover:underline transition-colors duration-200">
        {ownerAddress}
      </a>
    </div>
    
    <div className="flex items-center mt-2 transition-transform transform hover:scale-105 hover:shadow-md">
      <img src={creatorProfilePic} alt="Creator" className="w-10 h-10 rounded-full border-2 border-blue-500" />
      <a href={`/profile/${creatorAddress}`} className="ml-3 text-blue-300 hover:underline transition-colors duration-200 flex items-center">
        {creatorAddress}
        {creatorVerified && (
          <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
            Verified
          </span>
        )}
      </a>
    </div>
  </div>
);

export default OwnerInfo;
