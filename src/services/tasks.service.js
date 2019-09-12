import BaseHttpService from "./base-http.service";
import queryString from "query-string";

export default class TasksService extends BaseHttpService {
  async fetchTasks({ status, search }) {
    const queryObj = {};

    if (status.length) {
      queryObj.status = status;
    }

    if (search.length) {
      queryObj.search = search;
    }

    const queryStr = queryString.stringify(queryObj);
    const result = await this.get("tasks" + (queryStr ? `?${queryStr}` : ""));

    if (result) {
      const bearerToken = result.headers.authorization;
      const accessToken = bearerToken.split(" ")[1];

      this.saveToken(accessToken);
    }

    return result;
  }

  async deleteTask(id) {
    const result = await this.delete(`tasks/${id}`);

    if (result) {
      const bearerToken = result.headers.authorization;
      const accessToken = bearerToken.split(" ")[1];

      this.saveToken(accessToken);
    }
  }

  async updateTaskStatus(id, status) {
    const result = await this.patch(`tasks/${id}/status`, { status });

    if (result) {
      const bearerToken = result.headers.authorization;
      const accessToken = bearerToken.split(" ")[1];

      this.saveToken(accessToken);
    }

    return result;
  }

  async createTask(title, description) {
    const result = await this.post(`tasks`, { title, description });

    if (result) {
      const bearerToken = result.headers.authorization;
      const accessToken = bearerToken.split(" ")[1];

      this.saveToken(accessToken);
    }

    return result;
  }
}
