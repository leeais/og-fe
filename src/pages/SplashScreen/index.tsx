import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SplashScreen() {
  return (
    <div className="size-full h-screen flex flex-col gap-4 items-center justify-center">
      <div>Logo</div>
      <FontAwesomeIcon
        className="animate-spin text-primary"
        icon={faSpinner}
        size="3x"
      />
    </div>
  );
}
