const useFetch = async (url, query) => {
  const data = await fetch(url);
  const jsonData = await data.json();
  return jsonData;
};
