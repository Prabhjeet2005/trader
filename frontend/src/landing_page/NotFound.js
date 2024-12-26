import React from "react";

const NotFound = () => {
	return (
		<div className="text-center flex space-y-2 p-5">
      <img className="p-14 " src="media/images/brokenlink.png" alt="" />
      <span>
        <h1 className="mt-5 mb-4 text-gray-600 text-6xl font-medium ">
				404 NotFound 
      </h1>
      <p>Click on Logo to Redirect to HomePage.</p>
      </span>
			
			
		</div>
	);
};

export default NotFound;
