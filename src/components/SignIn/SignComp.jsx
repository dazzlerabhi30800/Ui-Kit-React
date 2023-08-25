import SignIn from "./SignIn";

export default function SignComp() {
  return (
    <section className="h-[50vh] grid grid-cols-2 col-span-2 bg-red-500">
      <div className="ocean-container h-[50vh] w-full relative">
        <img
          className="ocean-img w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1252&q=80"
          alt="ocean"
        />

        <h1 className="absolute z-10 bottom-10 flex flex-col gap-1 text-center text-white font-bold text-2xl px-2">
          Ocean High
          <span className="text-sm w-4/5 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            provident!
          </span>
        </h1>
      </div>
      <SignIn />
    </section>
  );
}
