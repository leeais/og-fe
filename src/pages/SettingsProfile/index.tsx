import { useAuth } from "@/hooks/useAuth";
import { Button, Form, Image, Input, Tag, Upload } from "antd";
import { ROLES, type RoleEnum } from "@/config/roles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import type { ProfileFormValues } from "./utils";
import { useMutation } from "@tanstack/react-query";

export default function SettingsProfile() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { mutate: updateProfile, isPending } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: async (values: ProfileFormValues) => Promise.resolve(values),
  });
  // fetch user data from server, don't use data state
  const { currentUser, roles } = useAuth();
  const [form] = Form.useForm();

  const handleUpdateProfile = (values: ProfileFormValues) => {
    if (!isEdit) return;
    updateProfile(values);
  };
  return (
    <div className="bg-background p-4">
      <div className="mx-auto max-w-7xl">
        <div className="p-4 rounded border space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex-1 flex items-center">
              <div className="mx-[5%]">
                <Image
                  className="rounded-full border border-border overflow-hidden"
                  width={160}
                  height={160}
                  src={currentUser?.avatarUrl || "/images/default_user.png"}
                  alt={currentUser?.username}
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                  {currentUser?.lastName + " " + currentUser?.firstName}
                </h3>
                <p>
                  ID:{" "}
                  <span className="text-primary">{currentUser?.username}</span>
                </p>
                <p>Email: {currentUser?.email}</p>
                <div className="flex items-center gap-2">
                  <h4>Loại tại khoản:</h4>
                  <div className="flex items-center gap-1">
                    {roles?.map((role: RoleEnum) => (
                      <Tag
                        key={role}
                        color={
                          role === ROLES.ADMIN
                            ? "green"
                            : role === ROLES.INSTRUCTOR
                            ? "blue"
                            : undefined
                        }
                      >
                        {role}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Upload>
              <Button>Đổi ảnh đại diện</Button>
            </Upload>
          </div>

          <Form
            className="space-y-1 rounded border"
            disabled={!isEdit}
            onFinish={handleUpdateProfile}
            form={form}
            initialValues={{ ...currentUser }}
          >
            <div className="p-4 flex items-center justify-between">
              <h3 className="font-semibold text-base">Thông tin cá nhân</h3>
              {isEdit ? (
                <div className="space-x-2">
                  <Button
                    htmlType="reset"
                    type="default"
                    icon={<FontAwesomeIcon icon={faSave} />}
                    onClick={() => {
                      setIsEdit(false);
                      form.resetFields();
                    }}
                    disabled={isPending}
                  >
                    Hủy
                  </Button>
                  <Button
                    className="disabled:bg-muted"
                    htmlType="submit"
                    type="primary"
                    icon={<FontAwesomeIcon icon={faSave} />}
                    disabled={isPending}
                  >
                    Lưu thay đổi
                  </Button>
                </div>
              ) : (
                <Button
                  htmlType="button"
                  type="default"
                  icon={<FontAwesomeIcon icon={faEdit} />}
                  onClick={() => setIsEdit(true)}
                  disabled={isPending}
                >
                  Chỉnh sửa
                </Button>
              )}
            </div>
            <div className="px-4 grid grid-cols-2 gap-x-[5%]">
              <Form.Item name={"firstName"} label="Tên" labelCol={{ span: 6 }}>
                <Input />
              </Form.Item>
              <Form.Item
                name={"lastName"}
                label="Họ và tên đệm"
                labelCol={{ span: 6 }}
              >
                <Input />
              </Form.Item>
              <Form.Item name={"email"} label="Email" labelCol={{ span: 6 }}>
                <Input />
              </Form.Item>
              <Form.Item
                name={"phone"}
                label="Số điện thoại"
                labelCol={{ span: 6 }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={"address"}
                label="Địa chỉ"
                labelCol={{ span: 6 }}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item name={"bio"} label="Bio" labelCol={{ span: 6 }}>
                <Input.TextArea />
              </Form.Item>
            </div>
          </Form>

          <div className="space-y-4">
            <h3 className="font-semibold text-base">Thông tin trường học</h3>
            <ul className="grid grid-cols-2 gap-x-[5%] gap-y-4">
              <li className="flex items-center gap-2">
                <span className="w-24">Phòng ban:</span>
                <p className="text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-24">Khoa:</span>
                <p className="text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-24">Lớp:</span>
                <p className="text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-24">Khóa học:</span>
                <p className="text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </li>
              <li className="col-span-2 flex items-center gap-2">
                <span className="w-24 shrink-0">Ghi chú:</span>
                <p className="mt-2 text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit earum tenetur sequi, sint velit similique architecto
                  nihil. Voluptatem esse quae beatae iusto. Alias dolore
                  molestias ratione provident maiores dicta ipsam.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
