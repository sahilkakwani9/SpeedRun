import React from 'react';
import {View} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

const Obstacle = ({body, size}) => {
  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  return (
    <View
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        borderRadius: 20,
        height: height,
        backgroundColor: 'white',
      }}
    />
  );
};

const createObstacle = (world, type, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      isStatic: true,
      friction: 1,
    },
  );
  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    size: [size.width, size.height],
    type: type,
    scored: false,
    renderer: <Obstacle />,
  };
};

export default createObstacle;

Obstacle.propTypes = {
  size: array,
  body: object,
  color: string,
};
