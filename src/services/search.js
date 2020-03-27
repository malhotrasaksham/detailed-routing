import axios from "axios";

export const SearchService = {
  async GetUsers() {
    let users = await axios.get("/users");
    return Promise.resolve(
      users.data.map(user => ({ id: user.id, name: user.name }))
    );
  },
  GetTodosByUserIDs(userIds) {
    let params = new URLSearchParams();
    for (let userId of userIds) {
      params.append("userId", userId);
    }
    return axios
      .get("/todos", {
        params: params
      })
      .then(res => Promise.resolve(res.data));
  }
};
