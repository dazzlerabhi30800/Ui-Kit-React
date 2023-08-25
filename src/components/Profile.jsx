export default function Profile() {
  return (
    <section className="bg-white p-4 text-black flex flex-col text-center justify-center gap-10 rounded-sm shadow-lg">
      <div className="flex items-center justify-center gap-5">
        <img
          className="w-[80px] h-[80px] object-cover rounded-full"
          src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Aiden Pearce"
        />
        <div className="flex flex-col text-left">
          <h4 className="text-sm font-bold">Aiden Pearce</h4>
          <p className="text-xs font-semibold text-gray-500">UK, London</p>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 gap-5">
        <div>
          <h4 className="text-sm font-bold">145856</h4>
          <p className="text-xs font-semibold text-gray-500">Followers</p>
        </div>
        <div>
          <h4 className="text-sm font-bold">9753</h4>
          <p className="text-xs font-semibold text-gray-500">Following</p>
        </div>
        <div>
          <h4 className="text-sm font-bold">547</h4>
          <p className="text-xs font-semibold text-gray-500">Photos</p>
        </div>
      </div>
      <button className="py-2 px-14 rounded-md bg-teal-500 font-medium text-white w-fit mx-auto transition ease-in-out duration-300 hover:bg-teal-400">
        Follow
      </button>
    </section>
  );
}
