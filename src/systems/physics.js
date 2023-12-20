import Matter from 'matter-js';
import {getRandom} from '../utils/random';

const Physics = (entities, {time, dispatch}) => {
  let engine = entities.physics.engine;
  Matter.Engine.update(engine, time.delta);
  Matter.Events.on(engine, 'collisionStart', event => {
    console.log('we have a collision');
    const {pairs} = event;
    pairs.forEach(collision => {
      const {bodyA, bodyB} = collision;
      // Check if collision involves Plane and Obstacle entities

      // Decrement the score
      dispatch({type: 'Game-Over'});
      dispatch({type: 'score', value: -1});
      //   console.log('this is entities', entities);

      // Reset the position of Plane and Obstacle entities
      const newPlanePosition = {x: 50, y: 400};
      //   const newObstaclePosition = {
      //     x: entities.Obstacle1.body.position.x,
      //     y: getRandom(100, 400),
      //   };

      Matter.Body.setPosition(entities.Plane.body, newPlanePosition);
      //   Matter.Body.setPosition(entities.Obstacle1.body, newObstaclePosition);
    });
  });
  return entities;
};

export default Physics;
