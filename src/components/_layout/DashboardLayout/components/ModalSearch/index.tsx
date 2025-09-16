import LgModal from "@/components/_common/LgModal";
import { Button, Divider, Input } from "antd";
import type { InputRef } from "antd";
import { useEffect, useRef } from "react";
import { SEARCH_MODAL_NAME } from "./utils";
import { useModal } from "@/hooks/useModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown, faSearch, faUpDown } from "@fortawesome/free-solid-svg-icons";

export default function ModalSearch() {
  const { openModal, closeModal } = useModal();
  const inputRef = useRef<InputRef | null>(null);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openModal(SEARCH_MODAL_NAME);
      }
    }

    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, [openModal]);

  return (
    <div className="flex items-center">
      <Button
        className="pl-1"
        icon={<FontAwesomeIcon icon={faSearch} />}
        iconPosition="end"
        onClick={() => openModal(SEARCH_MODAL_NAME)}
      >
        <div className="flex items-center gap-4 pr-4">
          <span className="text-xs rounded p-0.5 bg-primary text-primary-foreground px-1">
            Ctrl + K
          </span>
          Tìm kiếm
        </div>
      </Button>

      <LgModal
        name={SEARCH_MODAL_NAME}
        showHeader={false}
        footer={null}
        onCancel={() => closeModal()}
        afterOpenChange={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <Input
          ref={inputRef}
          size="large"
          variant="underlined"
          placeholder="What are you searching for..."
        />
        <div className="h-80 overflow-auto py-4">
          <p>Search content</p>
          {/* <div className="h-[600px]" /> */}
        </div>

        <Divider className="m-0 mb-4" />
        <div className="flex items-center gap-2">
          <div className="space-x-1">
            <span className="p-1 rounded text-primary border">
              <FontAwesomeIcon icon={faUpDown} />
            </span>
            <span>điều hướng</span>
          </div>
          <Divider type="vertical" />
          <div className="space-x-1">
            <span className="p-1 rounded text-primary border">
              <FontAwesomeIcon className="rotate-90" icon={faArrowTurnDown} />
            </span>
            <span>chọn</span>
          </div>
          <Divider type="vertical" />
          <div className="space-x-1">
            <span className="p-1 rounded text-primary border font-semibold">
              esc
            </span>
            <span>đóng</span>
          </div>
        </div>
      </LgModal>
    </div>
  );
}
