import LgModal from "@/components/_common/LgModal";
import { Form, Input, Select } from "antd";
import type { ProcedureFormValues } from "./utils";
import { useModal } from "@/hooks/useModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { procedureService } from "@/services/procedure.service";
import { departmentService } from "@/services/department.service";
import type { Department } from "@/pages/CategoriesDepartment/components/TableDepartments/utils";
import { facultyService } from "@/services/faculty.service";
import type { Faculty } from "@/pages/CategoriesFaculties/components/TableFaculties/utils";

interface ModalProceduresProps {
  name: string;
}

export default function ModalProcedures({ name }: ModalProceduresProps) {
  const { closeModal } = useModal();
  const [form] = Form.useForm();

  const mutation = useMutation({
    mutationFn: procedureService.createProcedure,
    onSuccess: () => {
      closeModal();
      form.resetFields();
    },
  });
  const { data: departments } = useQuery({
    queryKey: ["departments"],
    queryFn: departmentService.getDepartments,
  });
  const { data: faculties } = useQuery({
    queryKey: ["faculties"],
    queryFn: facultyService.getFaculties,
  });

  function handleSubmit(values: ProcedureFormValues) {
    mutation.mutate(values);
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
              <Select
                options={
                  faculties?.data.map((item: Faculty) => ({
                    label: item.name,
                    value: item.id,
                  })) || []
                }
                placeholder="Khoa"
              />
            </Form.Item>
            <span>hoặc</span>
            <Form.Item className="flex-1 m-0" name="departmentId">
              <Select
                options={
                  departments?.data.map((item: Department) => ({
                    label: item.name,
                    value: item.id,
                  })) || []
                }
                placeholder="Phòng ban"
              />
            </Form.Item>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Form.Item className="flex-1 m-0" name="fee" label="Lệ phí (nếu có)">
            <Input
              className="text-right"
              step={1000}
              type="number"
              placeholder="Đơn vị VND"
            />
          </Form.Item>
          <Form.Item
            className="flex-1 m-0"
            name="estimatedTime"
            label="Số ngày xử lý ước tính"
          >
            <Input className="text-right" type="number" />
          </Form.Item>
        </div>
      </Form>
    </LgModal>
  );
}
