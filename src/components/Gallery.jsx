import { useState } from "react";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const imageData = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    "https://images.unsplash.com/photo-1613339027986-b94d85708995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  ];
  return (
    <section className="col-span-2 relative w-full h-[300px] overflow-hidden">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${imageData[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background 0.3s linear",
        }}
      />
      <button
        onClick={() => setIndex((prev) => (prev - 1 <= 0 ? 2 : prev - 1))}
        className="absolute top-1/2 left-0  bg-red-500 p-2 text-white"
      >
        Prev
      </button>
      <button
        onClick={() => setIndex((prev) => (prev + 1 > 2 ? 0 : prev + 1))}
        className="absolute top-1/2 right-0 bg-red-500 text-white p-2"
      >
        Next
      </button>
    </section>
  );
}
