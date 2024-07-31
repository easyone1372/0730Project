import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InfoDetailProps } from "./InfoProps";

//상세 설명 - 위치, 번호, 설명 등을 위한 component
const InfoDetail = ({ content, detailIcon }: InfoDetailProps) => {
  return (
    <div className="flex gap-2">
      <div className="pl-2">
        <FontAwesomeIcon icon={detailIcon} />
      </div>
      <div className="text-sm font-thin">{content}</div>
    </div>
  );
};
export default InfoDetail;
