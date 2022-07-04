const getGreeting = async () => {
  const response = await fetch('http://127.0.0.1:3000/greeting');
  const data = await response.json();
  return data.message;
};

export default getGreeting;
