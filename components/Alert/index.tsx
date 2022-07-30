import { useAlert } from "../../context/AlertContext";

export default function Alert() {
  const { alert, setAlert }: any = useAlert();
  const { show, type, message } = alert;

  if (show) {
    setTimeout(() => {
      setAlert({
        show: false,
        type: "",
        message: "",
      });
    }, 10000);
  }

  if (type === "success" && show) {
    return (
      <div
        className="w-fit flex items-center gap-4 p-4 text-white bg-gray-900 rounded transition-all absolute left-0"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>

        <strong className="text-sm font-normal">{message}</strong>
      </div>
    );
  }
  if (type === "error" && show) {
    return (
      <div
        className="w-fit flex items-center gap-4 p-4 text-white bg-gray-900 rounded absolute left-0"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
          />
        </svg>

        <strong className="text-sm font-normal">{message}</strong>
      </div>
    );
  }
  return <></>;
}
