import { Paperclip } from "lucide-react";
import { useRef } from "react";

const UploadFile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <>
      <input ref={fileInputRef} hidden type="file" />

      <Paperclip
        className="hover:cursor-pointer outline-none"
        onClick={handleClick}
        role="button"
        tabIndex={0}
      />
    </>
  );
};

export default UploadFile;
