"use client";
import { useState } from "react";

interface VideoWithSkeletonProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    skeletonClassName?: string;
}

export default function VideoWithSkeleton({ className, skeletonClassName, ...props }: VideoWithSkeletonProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative ${className || ""}`}>
            {isLoading && (
                <div className={`absolute inset-0 bg-gray-100 animate-pulse z-10 ${skeletonClassName || ""}`} style={{ borderRadius: "inherit" }} />
            )}
            <video
                {...props}
                className={`${className || ""} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                onCanPlay={(e) => {
                    setIsLoading(false);
                    if (props.onCanPlay) props.onCanPlay(e);
                }}
                onLoadedData={(e) => {
                    setIsLoading(false);
                    if (props.onLoadedData) props.onLoadedData(e);
                }}
            />
        </div>
    );
}
