import LgModal from "@/components/_common/LgModal";
import { Form, Input, Select } from "antd";
import type { StudentFormData } from "./utils";
import { useModal } from "@/hooks/useModal";

interface ModalStudentProps {
  name: string;
}

export default function ModalStudent({ name }: ModalStudentProps) {
  const { closeModal } = useModal();
  const [form] = Form.useForm();

  function handleSubmit(values: StudentFormData) {
    try {
      console.log(values);
      form.resetFields();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <LgModal
      name={name}
      width={600}
      afterClose={() => form.resetFields()}
      onOk={() => form.submit()}
    >
      <Form
        className="space-y-2"
        onFinish={handleSubmit}
        form={form}
        layout="vertical"
      >
        <Form.Item label="Tên thủ tục" name="name" required>
          <Input />
        </Form.Item>
        <Form.Item label="Chi tiết" name="description" required>
          <Input.TextArea rows={4} />
        </Form.Item>
        <div className="space-y-2 p-2 rounded border border-border">
          <p>Nơi tiếp nhận và xử lý</p>
          <div className="flex items-center gap-2">
            <Form.Item className="flex-1 m-0" name="facultyId">
              <Select options={[]} placeholder="Khoa" />
            </Form.Item>
            <span>hoặc</span>
            <Form.Item className="flex-1 m-0" name="StudentId">
              <Select options={[]} placeholder="Phòng ban" />
            </Form.Item>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Form.Item className="flex-1 m-0" name="fee" label="Lệ phí (nếu có)">
            <Input type="number" placeholder="Đơn vị VND" />
          </Form.Item>
          <Form.Item
            className="flex-1 m-0"
            name="estimatedTime"
            label="Số ngày xử lý ước tính"
          >
            <Input type="number" />
          </Form.Item>
        </div>
      </Form>
    </LgModal>
  );
}
