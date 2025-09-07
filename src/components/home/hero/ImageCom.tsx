"use client";

import React, { useState, useEffect, useRef } from 'react';
import { auth, db } from "../../../libs/firebaseConfig";
import { doc, getDoc } from "firebase/firestore"; // Imported only necessary functions

export default function ImageCom() {
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, "Admin", "motivate");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data && data.img) {
            setImage(data.img);
          } else {
            setError("No image URL found in document");
          }
        } else {
          setError("Document does not exist");
        }
      } catch (error: any) {
        setError(`Failed to fetch image: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      {loading ? (
        <div className="w-[20rem] h-[20rem] flex justify-center items-center ">
          Loading...
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        <img
          className="w-[20rem] z-20 h-auto rounded-lg  object-cover"
          src={image}
          alt="Hero Display"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder-image.jpg"; // Fallback image
          }}
        />
      )}
    </div>
  );
}