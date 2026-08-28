"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function Modal({children}: {children: React.ReactNode}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    dialogRef.current?.showModal();

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={() => router.back()}
      className=" fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto backdrop:bg-black/60
      "
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-5/6 md:h-5/6 bg-white text-dark 
      flex flex-col gap-10 border-1 
      border-light-border bg-white rounded-none md:rounded-xl shadow-md p-5 md:p-8 fixed inset-0 size-auto
      overflow-x-scroll md:overflow-x-auto"
      >
        <button
          className="cursor-pointer absolute top-2 right-4 border-none hover:text-light-purple"
          onClick={() => dialogRef.current?.close()}
        >
          <span className="text-2xl">&times;</span>
        </button>

        {children}

      </div>
    </dialog>
  );
}
