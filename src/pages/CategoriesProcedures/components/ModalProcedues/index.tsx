import LgModal from "@/components/_common/LgModal";
import { Form, Input, message, Select } from "antd";
import type { ProcedureFormData } from "./utils";
import { useModal } from "@/hooks/useModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { procedureService } from "@/services/procedure.service";
import { departmentService } from "@/services/department.service";
import type { Department } from "@/pages/CategoriesDepartments/components/TableDepartments/utils";
import { facultyService } from "@/services/faculty.service";
import type { Faculty } from "@/pages/CategoriesFaculties/components/TableFaculties/utils";
import { useEffect } from "react";
import type { Procedure } from "../TableProcedures/utils";

interface ModalProceduresProps {
  name: string;
}

export default function ModalProcedures({ name }: ModalProceduresProps) {
  const { closeModal } = useModal();
  const [form] = Form.useForm();
  const { getData } = useModal();
  const queryClient = useQueryClient();
  const { active } = useModal();

  const procedure = getData() as Procedure;

  const { data: departments } = useQuery({
    queryKey: ["departments"],
    queryFn: departmentService.getDepartments,
  });

  const { data: faculties } = useQuery({
    queryKey: ["faculties"],
    queryFn: facultyService.getFaculties,
  });

  const { mutate } = useMutation({
    mutationFn: (data: ProcedureFormData) => {
      if (procedure) {
        return procedureService.updateProcedure(procedure.id, data);
      }
      return procedureService.createProcedure(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["procedures"],
      });
      form.resetFields();
      closeModal();
      message.success(
        procedure ? "Cập nhật thành công" : "Thêm mới thành công"
      );
    },
  });

  useEffect(() => {
    if (procedure && active === name)
      form.setFieldsValue({
        ...procedure,
        departmentId: procedure.department?.id,
        facultyId: procedure.faculty?.id,
      });
  }, [form, procedure, active, name]);

  function handleSubmit(values: ProcedureFormData) {
    mutate(values);
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
            <span>hoặc</span>
            <Form.Item className="flex-1 m-0" name="departmentId">
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
            required
          >
            <Input className="text-right" type="number" />
          </Form.Item>
        </div>
      </Form>
    </LgModal>
  );
}
