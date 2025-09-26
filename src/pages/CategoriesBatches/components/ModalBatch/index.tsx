import LgModal from "@/components/_common/LgModal";
import { DatePicker, Form, Input, message } from "antd";
import type { BatchFormData } from "./utils";
import { useModal } from "@/hooks/useModal";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { batchService, type BatchPayload } from "@/services/batch.service";
import type { Batch } from "../TableBatches/utils";
import dayjs from "dayjs";

interface ModalBatchProps {
  name: string;
}

export default function ModalBatch({ name }: ModalBatchProps) {
  const { closeModal, getData } = useModal();
  const [form] = Form.useForm<BatchFormData>();
  const queryClient = useQueryClient();
  const { active } = useModal();

  const batch = getData() as Batch;

  const { mutate } = useMutation({
    mutationFn: (data: BatchPayload) => {
      if (batch) {
        return batchService.updateBatch(batch.id, data);
      }
      return batchService.createBatch(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["batches"],
      });
      form.resetFields();
      closeModal();
      message.success(batch ? "Cập nhật thành công" : "Thêm mới thành công");
    },
  });

  useEffect(() => {
    if (batch && active === name)
      form.setFieldsValue({
        ...batch,
        startYear: batch.startYear ? dayjs().year(batch.startYear) : undefined,
        endYear: batch.endYear ? dayjs().year(batch.endYear) : undefined,
      });
  }, [form, batch, active, name]);

  function handleSubmit(values: BatchFormData) {
    const payload: BatchPayload = {
      ...values,
      startYear: values.startYear?.year(),
      endYear: values.endYear?.year(),
    };
    mutate(payload);
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
        <Form.Item label="Tên khóa học" name="name" required>
          <Input />
        </Form.Item>
        <Form.Item label="Tên ngắn gọn" name="shortName" required>
          <Input />
        </Form.Item>
        <div className="flex items-center gap-4">
          <Form.Item
            className="flex-1"
            label="Năm bắt đầu"
            name="startYear"
            required
          >
            <DatePicker picker="year" className="w-full" allowClear />
          </Form.Item>
          <Form.Item
            className="flex-1"
            label="Năm kết thúc"
            name="endYear"
            required
          >
            <DatePicker picker="year" className="w-full" allowClear />
          </Form.Item>
        </div>
      </Form>
    </LgModal>
  );
}
