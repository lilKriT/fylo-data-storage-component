import Image from "next/image";

const iconStyle =
  "flex justify-center items-center w-12 aspect-square bg-blue-950 rounded-xl";

export default function Home() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 w-full max-w-4xl mx-8 my-32">
        {/* Left box */}
        <div className="min-w-88 flex flex-col gap-8 bg-blue-850 p-10 rounded-xl rounded-tr-[6rem]">
          <Image
            src={"/logo.svg"}
            alt="Fylo Logo"
            width={135}
            height={40}
            className=""
          />
          <div className="flex gap-4">
            <div className={iconStyle}>
              <Image
                src={"/icon-document.svg"}
                alt="Document"
                width={20}
                height={24}
                className=""
              />
            </div>
            <div className={iconStyle}>
              <Image
                src={"/icon-folder.svg"}
                alt="Folder"
                width={24}
                height={20}
              />
            </div>
            <div className={iconStyle}>
              <Image
                src={"/icon-upload.svg"}
                alt="Upload"
                width={24}
                height={16}
              />
            </div>
          </div>
        </div>

        {/* Right box */}
        <div className="flex flex-col items-start bg-blue-850 p-10 rounded-xl grow relative">
          <p>
            You’ve used{" "}
            <strong className="font-semibold text-blue-200">815 GB</strong> of
            your storage
          </p>

          {/* Custom made progress bar */}
          <div className="w-full h-6 rounded-full bg-blue-950 p-1 mt-4">
            <div className="w-[81.5%] h-full rounded-full bg-linear-to-r from-grad-orange to-grad-red"></div>
          </div>

          <div className="flex w-full justify-between text-blue-200 mt-2">
            <p>0 GB</p>
            <p>1000 GB</p>
          </div>

          {/* Tooltip-thingy */}
          <p
            className="absolute inline-flex items-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0 md:top-0 md:-translate-y-2/3 md:right-10  bg-white px-6 py-4 rounded-xl md:rounded-br-none uppercase font-semibold
          after:w-0 after:h-0 after:border-10 after:border-transparent md:after:border-t-white md:after:border-r-white after:absolute after:right-0 after:bottom-0 after:translate-y-full text-nowrap"
          >
            <span className="text-4xl text-blue-950">185</span>
            &nbsp; GB Left
          </p>
        </div>
      </div>
    </section>
  );
}
