export default class Request {
  static async getOne(id) {
    try {
      let response = await fetch(`https://dummyjson.com/products/${id}`);
      let json = await response.json();
      console.log(json);
      return json;
    } catch (err) {
      alert(err);
    }
  }

  static async getAll() {
    try {
      let response = await fetch(`https://dummyjson.com/products`);
      let json = await response.json();
      console.log(json);
      return json;
    } catch (err) {
      alert(err);
    }
  }

  /* static async updateOne(id, data) {
      let response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    let json = await response.json();
    return json;
  } */
}
