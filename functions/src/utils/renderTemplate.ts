// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderTemplate(template: string, data: any): string {
  let result = template;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function replace(obj: any, path = "") {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        replace(obj[key], path + key + ".");
      } else if (result.includes("{" + path + key + "}")) {
        result = result.replace(new RegExp(`{${path + key}}`, "g"), obj[key]);
      }
    }
  }

  replace(data);

  return result;
}
