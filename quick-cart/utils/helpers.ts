export function servermsgOr(body: any): string {
    if (!body) return "No response body";
    if (typeof body === "string") return body;
    if (body.error) return body.error;
    if (body.detail) return body.detail;
    return JSON.stringify(body);
  }
  