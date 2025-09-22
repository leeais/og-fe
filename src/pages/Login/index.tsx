import { Button, Form, Input } from "antd";
import type { LoginFormValues } from "./utils";
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth.service";
import GuestOnlyRoute from "@/components/GuestOnlyRoute";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/utils";

export default function Login() {
  const [form] = Form.useForm();
  const { setCredentials } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      const user = data.data.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const roles = user.accountRoles.map((item: any) => {
        return item.role.name.toUpperCase();
      });
      const token = data.data.token;
      setCredentials({ ...user, roles }, token);
      navigate(ROUTES.ROOT);
    },
  });

  function handleSubmit(values: LoginFormValues) {
    mutation.mutate(values);
  }
  return (
    <GuestOnlyRoute>
      <div className="size-full h-screen flex items-center justify-center bg-accent">
        <Form
          className="bg-background shadow rounded p-8 w-md"
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            username: "2100878",
            password: "1111",
          }}
        >
          <h2 className="text-lg font-semibold my-6">Chào mừng trở lại</h2>
          <Form.Item label="Username" name="username" required>
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Mật khẩu" name="password" required>
            <Input.Password size="large" />
          </Form.Item>
          <Button
            className="w-full mt-4 disabled:bg-accent disabled:text-accent-foreground"
            size="large"
            type="primary"
            htmlType="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Đang đăng nhập" : "Đăng nhập"}
          </Button>
        </Form>
      </div>
    </GuestOnlyRoute>
  );
}
