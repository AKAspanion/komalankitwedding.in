function NotFoundPage() {
  return (
    <div className="w-full h-full text-center flex justify-center items-center">
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-9xl font-semibold tracking-widest">404</h2>
        <div className="text-gray-400 tracking-widest">
          This page could not be found
        </div>
        <a href="./" className="mt-8">
          <button className="btn mt-4 flex gap-1 w-fit">
            <div>Go Home</div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
