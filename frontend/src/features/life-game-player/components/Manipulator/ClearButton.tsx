import { Button } from "~/components/Elements/Button";
import { useManipulation } from "~/features/life-game-player/hooks/useManipulation";

export const ClearButton = () => {
  const {
    action: { clear },
  } = useManipulation();

  const handleClick = () => {
    clear();
  };

  return (
    <Button onClick={handleClick} data-testid="clear-button">
      クリア [c]
    </Button>
  );
};
