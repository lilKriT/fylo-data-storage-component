import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-dvh flex justify-center items-center">
      <div className="flex gap-8">
        {/* Left box */}
        <div className="min-w-[22rem] flex flex-col gap-8 bg-blue-850 p-10 rounded-xl rounded-tr-[6rem]">
          <Image
            src={"/logo.svg"}
            alt="Fylo Logo"
            width={135}
            height={40}
            className=""
          />
          <div className="flex gap-4">
            <div className="flex justify-center items-center w-12 aspect-square bg-blue-950 rounded-xl">
              <Image
                src={"/icon-document.svg"}
                alt="Document"
                width={20}
                height={24}
                className=""
              />
            </div>
            <div className="flex justify-center items-center w-12 aspect-square bg-blue-950 rounded-xl">
              <Image
                src={"/icon-folder.svg"}
                alt="Folder"
                width={24}
                height={20}
              />
            </div>
            <div className="flex justify-center items-center w-12 aspect-square bg-blue-950 rounded-xl">
              <Image
                src={"/icon-upload.svg"}
                alt="Upload"
                width={24}
                height={16}
              />
            </div>
          </div>
        </div>
        <div>
          <p>You’ve used 815 GB of your storage</p>

          <p>185 GB Left</p>

          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
      </div>
    </section>
  );
}
