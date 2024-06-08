const BASE_URL = `http://54.91.128.212:8000`;

const show = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default { show };
// show();