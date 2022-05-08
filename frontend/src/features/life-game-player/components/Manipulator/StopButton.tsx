import { Button } from "~/components/Elements/Button";
import { useManipulation } from "~/features/life-game-player/hooks/useManipulation";

export const StopButton = () => {
  const {
    action: { stop },
  } = useManipulation();

  const handleClick = () => {
    stop();
  };

  return <Button onClick={handleClick}>停止 [s]</Button>;
};
