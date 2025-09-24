import { Image } from "antd";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        className="rounded-full overflow-hidden object-contain"
        height={36}
        preview={false}
        src="/images/logo.png"
      />
      <span className="font-bevnpro text-base tracking-tight uppercase">
        Đại học Sao Đỏ
      </span>
    </div>
  );
}
