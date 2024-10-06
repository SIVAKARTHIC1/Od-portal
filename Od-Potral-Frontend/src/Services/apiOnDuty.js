import { API_BASE } from "../../Config/config";

const OD_API = `${API_BASE}/od`;

async function getAllOd_Api() {
  try {
    const res = await fetch(OD_API);
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.log(error);
  }
}

async function getOd_Api(id) {
  try {
    const res = await fetch(`${OD_API}/${id}`);
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.log(error);
  }
}
async function createOd_Api(data) {}
async function approveOd_Api(id) {}
async function rejectOd_Api(id, reason) {}
async function cancelOd_Api(id) {}

export {
  getAllOd_Api,
  getOd_Api,
  createOd_Api,
  approveOd_Api,
  rejectOd_Api,
  cancelOd_Api,
};
