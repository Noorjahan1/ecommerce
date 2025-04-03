import React from 'react';
 // Make sure to create a CSS file for styling
import Image from "next/image";
import loadingGif from "../public/loading.gif"; // Adjust the path to your loading image
const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image
                src={loadingGif} // Replace with your loading image path
                alt="Loading..."
                width={300} // Adjust width as needed
                height={300} // Adjust height as needed
            />
        </div>
    );
};

export default Loading;