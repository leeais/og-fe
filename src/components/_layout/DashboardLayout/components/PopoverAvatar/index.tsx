import { Divider, Form, Image, Input, Popover, Tag } from "antd";
import {
  faChevronDown,
  faKey,
  faSignOut,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge, Button } from "antd";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/utils";
import { useModal } from "@/hooks/useModal";
import LgModal from "@/components/_common/LgModal";
import {
  CHANGE_PASSWORD_MODAL_NAME,
  type ChangePasswordFormType,
} from "./utils";

export default function PopoverAvatar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
  const [form] = Form.useForm();

  function handleChangePassword(values: ChangePasswordFormType) {
    console.log(values);
  }

  const content = (
    <div className="min-w-xs flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full border border-border overflow-hidden"
            width={50}
            height={50}
            src={currentUser?.avatarUrl || "/images/default_user.png"}
            alt={currentUser?.username}
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">
              {currentUser?.lastName + " " + currentUser?.firstName}
            </h3>
            <p className="text-xs">
              {currentUser?.email || "example@gmail.com"}
            </p>
          </div>
        </div>

        <Tag color="green">Online</Tag>
      </div>
      <Divider className="my-2" />
      <Button
        className="justify-start"
        icon={<FontAwesomeIcon icon={faUserPen} />}
        color="default"
        variant="link"
        onClick={() => navigate(ROUTES.SETTINGS_PROFILE)}
      >
        Thông tin tài khoản
      </Button>
      <Button
        className="justify-start"
        icon={<FontAwesomeIcon icon={faKey} />}
        color="default"
        variant="link"
        onClick={() => openModal(CHANGE_PASSWORD_MODAL_NAME)}
      >
        Đổi mật khẩu
      </Button>
      <LgModal
        width={450}
        name={CHANGE_PASSWORD_MODAL_NAME}
        title="Cập nhật"
        onOk={form.submit}
        onCancel={() => {
          form.resetFields();
          closeModal();
        }}
      >
        <Form className="space-y-4" form={form} onFinish={handleChangePassword}>
          <Form.Item name="oldPassword">
            <Input.Password placeholder="Nhập mật khẩu cũ" />
          </Form.Item>
          <Form.Item name="newPassword">
            <Input.Password placeholder="Nhập mật khẩu mới" />
          </Form.Item>
          <Form.Item className="mb-0" name="confirmNewPassword">
            <Input.Password placeholder="Nhập lại mật khẩu" />
          </Form.Item>
        </Form>
      </LgModal>
      <Button
        className="justify-start"
        icon={<FontAwesomeIcon icon={faSignOut} />}
        danger
        color="danger"
        variant="link"
        onClick={logout}
      >
        Đăng xuất
      </Button>
    </div>
  );

  return (
    <Popover content={content} placement="bottomRight" trigger="click">
      <Button
        className="p-0.5 border border-border pr-2"
        shape="round"
        type="primary"
      >
        <Badge dot offset={[-2, 22]} color="green">
          <Avatar
            className="border border-border"
            size={25}
            src={currentUser?.avatarUrl || "/images/default_user.png"}
          />
        </Badge>
        <FontAwesomeIcon icon={faChevronDown} />
      </Button>
    </Popover>
  );
}
