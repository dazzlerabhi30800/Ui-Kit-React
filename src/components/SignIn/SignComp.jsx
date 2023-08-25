import SignIn from "./SignIn";

export default function SignComp() {
  return (
    <div className="grid grid-cols-2">
      <div className="ocean-container relative">
        <img
          className="ocean-img"
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1252&q=80"
          alt="ocean"
        />

        <h1 className="-text absolute z-10 bottom-10 flex flex-col gap-1 text-center text-white font-bold text-3xl px-2">
          Ocean High
          <span className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            provident!
          </span>
        </h1>
      </div>
      <SignIn />
    </div>
  );
}
