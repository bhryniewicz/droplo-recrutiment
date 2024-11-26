import PlusCircleIcon from "@/assets/plusCircle.svg";
import Image from "next/image";

export const NoLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full border-[1px] border-solid border-[#EAECF0] bg-[#F9FAFB] mb-8 py-7">
      <h1 className="font-semibold leading-6 text-[#101828]">
        Menu jest puste
      </h1>
      <p className="text-sm text-[#475467] mb-6">
        W tym menu nie ma jeszcze żadnych linków.
      </p>
      <button className="bg-[#7F56D9] flex items-center text-white px-4 py-2.5 gap-2 rounded-lg text-sm font-semibold">
        <Image
          alt="plus cirlce icon"
          width={20}
          height={20}
          src={PlusCircleIcon}
        />
        Dodaj pozycję menu
      </button>
    </div>
  );
};