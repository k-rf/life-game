import { Button } from "~/components/Elements/Button";
import { useManipulation } from "~/features/life-game-player/hooks/useManipulation";

export const RandomButton = () => {
  const {
    action: { randomize },
  } = useManipulation();

  const handleClick = () => {
    randomize();
  };

  return <Button onClick={handleClick}>ランダム生成 [g]</Button>;
};
