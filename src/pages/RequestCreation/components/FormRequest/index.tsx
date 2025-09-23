import { departmentService } from "@/services/department.service";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Select } from "antd";
import { useState } from "react";

export default function FormRequest() {
  const [form] = Form.useForm();
  const { data: requestTypes } = useQuery({
    queryKey: ["departments"],
    queryFn: departmentService.getDepartments,
  });
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Form
      className="bg-background p-4 px-6 rounded border space-y-2"
      form={form}
      layout="vertical"
    >
      <Form.Item name="title" label="Tiêu đề yêu cầu" required>
        <Input />
      </Form.Item>
      <Form.Item name="requestType" label="Loại yêu cầu" required>
        <Select
          options={
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            requestTypes?.data.map((item: any) => ({
              label: item.name,
              value: item.id,
            })) || []
          }
        />
      </Form.Item>
      <Form.Item name="description" label="Mô tả yêu cầu" required>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item name="priority" initialValue={"medium"} label="Mức độ yêu cầu">
        <Select
          options={[
            {
              label: "Cao",
              value: "high",
            },
            {
              label: "Bình thường",
              value: "medium",
            },
            {
              label: "Thấp",
              value: "low",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="attachment"
        label={`Tài liệu đính kèm (${files.length})`}
      >
        <Input type="file" />
      </Form.Item>
      <Form.Item name="nodes" label="Ghi chú">
        <Input.TextArea rows={4} />
      </Form.Item>
      <div className="flex items-center gap-2 justify-end mt-4">
        <Button htmlType="reset" onClick={() => form.resetFields()}>
          Hủy
        </Button>
        <Button type="primary" htmlType="submit">
          Gửi yêu cầu
        </Button>
      </div>
    </Form>
  );
}
