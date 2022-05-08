import { Button } from "~/components/Elements/Button";
import { useManipulation } from "~/features/life-game-player/hooks/useManipulation";

export const PlayButton = () => {
  const {
    action: { play },
  } = useManipulation();

  const handleClick = () => {
    play();
  };

  return <Button onClick={handleClick}>再生 [p]</Button>;
};
