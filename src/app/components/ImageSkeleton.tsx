"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function ImageWithSkeleton(props: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative inline-block ${props.className || ""}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-00 animate-pulse z-10" style={{ borderRadius: "inherit" }} />
      )}
      <Image
        {...props}
        className={`${props.className || ""} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={(e) => {
          setIsLoading(false);
          if (props.onLoad) props.onLoad(e);
        }}
        onError={(e) => {
          setIsLoading(false);
          if (props.onError) props.onError(e);
        }}
      />
    </div>
  );
}
