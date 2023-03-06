import code from "../Assets/code1.gif";
export const Home = () => {
  return (
    <>
      <div className="flex-none box-border max-w-full">
        <h1 className="font-bold text-2xl">
          Responsive Menu React With TailwindCSS
        </h1>
        <p>Preview</p>
        <div className="mx-auto">
          <img src={code} alt="code" className="max-full h-auto" />
        </div>
      </div>
    </>
  );
};
