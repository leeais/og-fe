import LgModal from "@/components/_common/LgModal";
import { Form, Image, Input, message, Select } from "antd";
import type { ClassFormData } from "./utils";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { classService } from "@/services/class.service";
import type { Class } from "../TableClasses/utils";
import type { Batch } from "@/pages/CategoriesBatches/components/TableBatches/utils";
import type { Faculty } from "@/pages/CategoriesFaculties/components/TableFaculties/utils";
import { facultyService } from "@/services/faculty.service";
import { batchService } from "@/services/batch.service";

interface ModalClassProps {
  name: string;
}

export default function ModalClass({ name }: ModalClassProps) {
  const { closeModal, getData } = useModal();
  const [form] = Form.useForm<ClassFormData>();
  const [avatar, setAvatar] = useState<File>();
  const queryClient = useQueryClient();
  const { active } = useModal();

  const _class = getData() as Class;

  const { data: faculties } = useQuery({
    queryKey: ["faculties"],
    queryFn: facultyService.getFaculties,
  });

  const { data: batches } = useQuery({
    queryKey: ["batches"],
    queryFn: batchService.getBatches,
  });

  const { mutate } = useMutation({
    mutationFn: (data: ClassFormData) => {
      if (_class) {
        return classService.updateClass(_class.id, data);
      }
      return classService.createClass(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["classes"],
      });
      form.resetFields();
      setAvatar(undefined);
      closeModal();
      message.success(_class ? "Cập nhật thành công" : "Thêm mới thành công");
    },
  });

  useEffect(() => {
    if (_class && active === name)
      form.setFieldsValue({
        ..._class,
        facultyId: _class.faculty.id,
        batchId: _class.batch.id,
      });
  }, [form, _class, active, name]);

  function handleSubmit(values: ClassFormData) {
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
        <Form.Item label="Tên lớp học" name="name" required>
          <Input />
        </Form.Item>
        <Form.Item label="Tên ngắn gọn" name="shortName" required>
          <Input />
        </Form.Item>
        <div className="flex items-center gap-4">
          <Form.Item className="flex-1 m-0" label="Khoa" name="facultyId">
            <Select
              showSearch
              allowClear
              optionFilterProp="children"
              filterOption={(input, options) =>
                (options?.label ?? "")
                  .toString()
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={
                faculties?.data.map((item: Faculty) => ({
                  label: item.name,
                  value: item.id,
                })) || []
              }
              placeholder="Khoa"
            />
          </Form.Item>
          <Form.Item className="flex-1 m-0" label="Khóa học" name="batchId">
            <Select
              showSearch
              allowClear
              optionFilterProp="children"
              filterOption={(input, options) =>
                (options?.label ?? "")
                  .toString()
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={
                batches?.data.map((item: Batch) => ({
                  label: item.name,
                  value: item.id,
                })) || []
              }
              placeholder="Phòng ban"
            />
          </Form.Item>
        </div>
        <div className="flex items-center gap-4">
          <Form.Item
            className="flex-1"
            label="Logo lớp học (nếu có)"
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
