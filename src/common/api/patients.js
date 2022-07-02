const getPatient = async () => {
  try {
    await axios.get("patient", "");
    await axios.get("doctor", "");
  } catch (e) {
    console.log(e);
  }
};
