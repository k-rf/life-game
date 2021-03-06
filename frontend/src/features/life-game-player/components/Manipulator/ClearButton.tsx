import { Button } from "~/components/Elements/Button";
import { useManipulation } from "~/features/life-game-player/hooks/useManipulation";

export const ClearButton = () => {
  const {
    action: { clearBoard },
  } = useManipulation();

  const handleClick = () => {
    clearBoard();
  };

  return (
    <Button onClick={handleClick} data-testid="clear-button">
      クリア [c]
    </Button>
  );
};
