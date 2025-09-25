import LgModal from "@/components/_common/LgModal";
import { Form, Image, Input, message } from "antd";
import type { DepartmentFormValues } from "./utils";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { departmentService } from "@/services/department.service";
import type { Department } from "../TableDepartments/utils";

interface ModalDepartmentProps {
  name: string;
}

export default function ModalDepartment({ name }: ModalDepartmentProps) {
  const { closeModal, getData } = useModal();
  const [form] = Form.useForm<DepartmentFormValues>();
  const [avatar, setAvatar] = useState<File>();
  const queryClient = useQueryClient();
  const { active } = useModal();

  const department = getData() as Department;

  const { mutate } = useMutation({
    mutationFn: (data: DepartmentFormValues) => {
      if (department) {
        return departmentService.updateDepartment(department.id, data);
      }
      return departmentService.createDepartment(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["departments"],
      });
      form.resetFields();
      setAvatar(undefined);
      closeModal();
      message.success(
        department ? "Cập nhật thành công" : "Thêm mới thành công"
      );
    },
  });

  useEffect(() => {
    if (department && active === name) form.setFieldsValue(department);
  }, [form, department, active, name]);

  function handleSubmit(values: DepartmentFormValues) {
    mutate(values);
  }
  return (
    <LgModal
      name={name}
      width={600}
      afterClose={() => {
        form.resetFields();
        setAvatar(undefined);
      }}
      onOk={() => form.submit()}
    >
      <Form
        className="space-y-2"
        onFinish={handleSubmit}
        form={form}
        layout="vertical"
      >
        <Form.Item label="Tên phòng ban" name="name" required>
          <Input />
        </Form.Item>
        <Form.Item label="Tên ngắn gọn" name="shortName" required>
          <Input />
        </Form.Item>
        <div className="flex items-center gap-4">
          <Form.Item
            className="flex-1"
            label="Logo phòng ban (nếu có)"
            name="avatar"
          >
            <Input
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  setAvatar(files[0] as File);
                }
              }}
            />
          </Form.Item>
          {avatar && (
            <div className="flex-1 flex justify-center">
              <Image
                className="object-contain rounded-full border border-border mx-auto"
                width={100}
                height={100}
                src={URL.createObjectURL(avatar)}
              />
            </div>
          )}
        </div>
        <Form.Item label="Mô tả" name="bio">
          <Input.TextArea rows={4} />
        </Form.Item>
      </Form>
    </LgModal>
  );
}
