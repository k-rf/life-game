import { Button } from "~/components/Elements/Button";
import { useManipulation } from "~/features/life-game-player/hooks/useManipulation";

export const ResetButton = () => {
  const {
    action: { resetBoard },
  } = useManipulation();

  const handleClick = () => {
    resetBoard();
  };

  return (
    <Button onClick={handleClick} data-testid="clear-button">
      リセット [r]
    </Button>
  );
};
