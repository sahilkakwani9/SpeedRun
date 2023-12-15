import React from 'react';
import {Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

const airplane = require('../assets/airplane.png');

const Plane = ({body, size}) => {
  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  return (
    <Image
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
      }}
      resizeMode="stretch"
      source={airplane}
    />
  );
};

const createPlane = (world, color, pos, size) => {
  const initialPlane = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
  );
  Matter.World.add(world, [initialPlane]);

  return {
    body: initialPlane,
    size: [size.width, size.height],
    color: color,
    renderer: <Plane />,
  };
};

export default createPlane;

Plane.propTypes = {
  size: array,
  body: object,
  color: string,
};
