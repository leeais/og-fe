import { useModal } from "@/hooks/useModal";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, type ModalProps } from "antd";
import { useEffect, useState, type PropsWithChildren } from "react";

interface LgModalProps
  extends Omit<ModalProps, "title" | "closeIcon">,
    PropsWithChildren {
  name: string;
  title?: string;
  closeIcon?: boolean;
  showHeader?: boolean;
}

export default function LgModal({
  name,
  children,
  title,
  closeIcon = true,
  showHeader = true,
  ...props
}: LgModalProps) {
  const [open, setOpen] = useState<boolean>(false);
  const { active, closeModal, getData } = useModal();

  useEffect(() => {
    if (active === name) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [active, name]);

  function handleClose() {
    setOpen(false);
    closeModal(name);
  }

  const modalTitle = title || (getData() ? "Cập nhật" : "Thêm mới");

  const header = (
    <div className="flex itesms-center justify-between">
      <span className="font-semibold text-accent-foreground">{modalTitle}</span>
      {closeIcon && (
        <Button
          className="text-accent-foreground"
          type="text"
          size="small"
          icon={<FontAwesomeIcon icon={faX} size="sm" />}
          onClick={handleClose}
        />
      )}
    </div>
  );

  return (
    <Modal
      open={open}
      title={showHeader ? header : null}
      onCancel={handleClose}
      closeIcon={null}
      {...props}
    >
      {children}
    </Modal>
  );
}
