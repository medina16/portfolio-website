// import { useRouter } from "next/router";
// import { useEffect, useRef } from "react";

// export default function ProjectModal(){
//     const dialogRef = useRef<HTMLDialogElement>(null)
//     const router = useRouter();

//     useEffect(() => {
//         dialogRef.current?.showModal()
//     }, []);

//     return(
//         <dialog ref={dialogRef}
//         onClose={() => router.back()}
//         className="bg-white p-10"    
//         >
//             <button className="absolute top-2 right-4 border-none"
//             onClick={()=>dialogRef.current?.close()}>
//                 &times;
//             </button>
//             <h2>Tes</h2>
//         </dialog>
//     )

// }