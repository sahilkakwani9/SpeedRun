import React from 'react';
import {View, Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

const water = require('../assets/floor.jpeg');

const Floor = ({body, size, color}) => {
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
        height: height,
        backgroundColor: color || 'pink',
      }}>
      <Image
        style={{width: width, height: height}}
        source={water}
        resizeMode="stretch"
      />
    </View>
  );
};

const createFloor = (world, color, pos, size) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      isStatic: true,
      friction: 1,
    },
  );
  Matter.World.add(world, [initialFloor]);

  return {
    body: initialFloor,
    size: [size.width, size.height],
    color: color,
    renderer: <Floor />,
  };
};

export default createFloor;

Floor.propTypes = {
  size: array,
  body: object,
  color: string,
};
