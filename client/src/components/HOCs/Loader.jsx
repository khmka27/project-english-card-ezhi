import SpinnerUi from "../ui/SpinnerUI";

export default function Loader({ showSpinner, children }) {
  if (showSpinner) return <SpinnerUi />;
  return children;
}
