import useSmartToast from "../hooks/useSmartToast";
import Button from "../components/button";
import { buttonList } from "../constants/buttonList";
import { IToastTypes } from "../components/smartToast";
import PositionSelector from "../components/positionSelector";

const ToastModule = () => {
  const { toastSmart, toastPosition, setToastPosition, SmartToastComponent } =
    useSmartToast({
      position: "bottom-right",
    });

  const handleClick = ({
    title,
    description,
    variant,
  }: Omit<IToastTypes, "id">) => {
    toastSmart(title, {
      type: variant,
      subDesc: description,
    });
  };

  return (
    <>
      <div className="h-screen border-b-orange-200">
        <p className="text-3xl font-bold underline pt-3 mb-5 text-center">
          Smart Toaster
        </p>
        <p className="text-xl font-semibold md:mt-40 pt-3 mb-3 md:mb-2 text-center">
          Select Toast Position
        </p>
        <PositionSelector
          {...{
            selectedPosition: toastPosition,
            setSelectedPosition: setToastPosition,
          }}
        />
        <div className="flex items-center justify-center">
          <div className="mx-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5 h-max">
            {buttonList.map((item) => {
              return (
                <Button
                  className="hover:shadow-lg"
                  onClick={() => handleClick(item)}
                  color={item.variant}
                >
                  {item.title}
                </Button>
              );
            })}
          </div>
        </div>
        {SmartToastComponent}
      </div>
    </>
  );
};

export default ToastModule;
