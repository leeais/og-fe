import { Popover } from "antd";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

export default function PopoverNotifications() {
  const content = <div className="min-w-md flex flex-col gap-2"></div>;

  return (
    <Popover content={content} placement="bottomRight" trigger="click">
      <Button
        className="text-primary-foreground"
        type="text"
        shape="circle"
        icon={<FontAwesomeIcon icon={faBell} />}
      />
    </Popover>
  );
}
