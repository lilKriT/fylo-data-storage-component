import Image from "next/image";

const iconStyle =
  "flex justify-center items-center w-12 aspect-square bg-blue-950 rounded-xl";

export default function Home() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="flex gap-8">
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
        <div className="flex flex-col justify-between items-start bg-blue-850 p-10 rounded-xl">
          <p>
            You’ve used{" "}
            <strong className="font-semibold text-blue-200">815 GB</strong> of
            your storage
          </p>

          {/* Custom made progress bar */}
          <div className="w-full h-6 rounded-full bg-blue-950 p-1">
            <div className="w-[81.5%] h-full rounded-full bg-linear-to-r from-grad-orange to-grad-red"></div>
          </div>

          <div className="flex w-full justify-between">
            <p>0 GB</p>
            <p>1000 GB</p>
          </div>
          <p>185 GB Left</p>
        </div>
      </div>
    </section>
  );
}
