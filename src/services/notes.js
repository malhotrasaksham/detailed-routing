import axios from "axios";

export const NotesService = {
  GetNotesList() {
    return axios
      .get("/todos", {
        params: {
          _limit: 5
        }
      })
      .then(res => Promise.resolve(res.data));
  },
  GetNoteByID(id) {
    return axios
      .get("/todos", {
        params: {
          id: id
        }
      })
      .then(res => Promise.resolve(res.data.length ? res.data[0] : null));
  }
};
