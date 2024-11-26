import { FC } from "react";
import { AddLinkForm } from "../AddLinkForm";
import { Link, LinkParentId } from "@/types";
import DndIcon from "@/assets/dnd.svg";
import Image from "next/image";
import { useCurrentFormContext } from "@/contexts";
import { Button } from "../Button";
import { LinkActionButtons } from "../LinkActionButtons/LinkActionButtons";

export type LinkPreviewProps = {
  name: string;
  link: string;
  id: string;
  nestingLevel: number;
  parentId: LinkParentId;
  children: Array<Link>;
};

export const LinkPreview: FC<LinkPreviewProps> = ({
  name,
  link,
  nestingLevel,
  parentId,
  children,
}) => {
  const { currentForm, setCurrentForm } = useCurrentFormContext();

  const nestingMarginStyle = {
    marginLeft: `${30 * nestingLevel}px`,
  };

  return (
    <li
      className={` border-[#D0D5DD] ${
        nestingLevel === 0
          ? "rounded-lg mb-9 border-[1px] border-solid"
          : "rounded-bl-lg"
      }`}
    >
      <div style={nestingMarginStyle}>
        <div
          className={`bg-white px-6 pt-4 border-l-[1px] border-b-[1px] border-[#D0D5DD]
        ${nestingLevel === 0 ? "rounded-t-lg " : "rounded-b-lg"}
        `}
        >
          <div className="flex gap-3.5 items-center pb-4 bg-white">
            <Image
              width="20"
              height="20"
              src={DndIcon}
              alt="drag and drop icon"
            />
            <div className="grow gap-y-2">
              <h3 className="text-[#101828] text-sm font-semibold leading-5">
                {name}
              </h3>
              <p className="text-[#475467] text-sm leading-5">{link}</p>
            </div>
          </div>
        </div>
        <LinkActionButtons
          name={name}
          link={link}
          parentId={parentId}
          nestingLevel={nestingLevel}
        />
        <ul className="bg-[#F9FAFB]">
          {children?.map((link) => (
            <LinkPreview
              key={link.id}
              {...link}
              parentId={link.id}
              nestingLevel={nestingLevel + 1}
            />
          ))}
        </ul>
      </div>
      {nestingLevel === 0 && (
        <>
          <div className="px-6 bg-[#F9FAFB] py-5">{currentForm}</div>
          <div className="py-5 bg-[#f5f5f5] px-6 rounded-b-lg">
            <Button
              variant="primary"
              onClick={() =>
                setCurrentForm(
                  <AddLinkForm parentId={null} nestingLevel={nestingLevel} />
                )
              }
            >
              Dodaj pozycję menu
            </Button>
          </div>
        </>
      )}
    </li>
  );
};
