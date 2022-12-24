import axiosClient from "./axios";
export const getJobList = async (page, location, description) => {
  if (page > 0) {
    const data = await axiosClient
      .get(`/recruitment/positions.json?page=${page}${location ? "&location=" + location : ""}${description ? "&description=" + description : ""}`)
      .then((response) => {
        const data = response.data;
        return data;
      });
    return data;
  } else{
    const data = await axiosClient
      .get(
        `/recruitment/positions.json?${location ? "location=" + location : ""}${description ? "&description=" + description : ""}`
      )
      .then((response) => {
        const data = response.data;
        return data;
      });
    return data;
  }
};

export const getJobDetail = async (id) => {
  if (!id) return;
  const data = await axiosClient
    .get(`/recruitment/positions/${id}`)
    .then((response) => {
      const data = response.data;
      return data;
    });
  return data;
};
