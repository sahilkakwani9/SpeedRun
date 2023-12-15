import Plane from '../components/Plane';
import Matter from 'matter-js';
import Floor from '../components/Floor';
import Ceiling from '../components/Ceiling';
import Obstacle from '../components/Obstacle';
import {
  getRandom,
  topObstacleHeight,
  bottomObstacleHeight,
} from '../utils/random';
import Constants from '../utils/constants';

Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement
export default (height, width) => {
  //-- Cleanup existing entities..
  //   if (restart) {
  //     Matter.Engine.clear(restart.physics.engine);
  //   }

  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  world.gravity.y = 0.1;
  const boxSize = 50;

  return {
    physics: {engine: engine, world: world},
    Plane: Plane(
      world,
      'pink',
      {x: 220, y: 400},
      {height: boxSize, width: boxSize},
    ),
    Floor: Floor(
      world,
      'white',
      {x: width / 2, y: height - 50},
      {height: 100, width: width},
    ),
    Ceiling: Ceiling(
      world,
      'white',
      {x: width / 2, y: 0},
      {height: 100, width: width},
    ),
    Obstacle1: Obstacle(
      world,
      'top',
      {
        x: width * 2 - Constants.TOP_PIPE_WIDTH / 2 + 200,
        y: getRandom(100, 400),
      },
      {height: topObstacleHeight, width: Constants.TOP_PIPE_WIDTH},
    ),
    Obstacle2: Obstacle(
      world,
      'bottom',
      {
        x: width - Constants.BOTTOM_PIPE_WIDTH / 2 + 200,
        y: getRandom(400, 700),
      },
      {height: bottomObstacleHeight, width: Constants.BOTTOM_PIPE_WIDTH},
    ),
  };
};
