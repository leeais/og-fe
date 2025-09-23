import FormRequest from "./components/FormRequest";

export default function RequestCreation() {
  return (
    <div className="flex gap-4 space-y-2 p-4">
      <div className="flex-1">
        <FormRequest />
      </div>
      <div className="flex-1">
        <div className="size-full bg-background rounded border flex flex-col h-max">
          <div className="border-b p-4">
            <h3 className="font-semibold">Các yêu cầu đang được hỗ trợ</h3>
          </div>
          <div className="p-4">content</div>
        </div>
      </div>
    </div>
  );
}
