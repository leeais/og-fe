import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "antd";

export default function SplashScreen() {
  return (
    <div className="size-full h-screen relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex flex-col gap-4 items-center">
        <Image
          className="rounded-full overflow-hidden object-contain"
          height={80}
          width={80}
          preview={false}
          src="/images/logo.png"
        />
        <span className="font-bevnpro text-lg uppercase font-semibold">
          Trường Đại học Sao Đỏ
        </span>
        <FontAwesomeIcon
          className="animate-spin text-primary"
          icon={faSpinner}
          size="3x"
        />
      </div>
    </div>
  );
}
