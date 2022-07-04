import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/greetings/greetings_data';
const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div>
      <h1>Greeting: {greeting}</h1>
    </div>
  );
};

export default Greeting;
