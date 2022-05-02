// This function calls the backend API.
export async function callBlogAPI(url, header, methodName = "GET", data = {}) {
  let response = null;

  if (methodName !== "GET") {
    response = await fetch(url, {
      method: methodName,
      headers: header,
      body: JSON.stringify(data),
    });
  } else {
    response = await fetch(url, {
      method: methodName,
      headers: header,
    });
  }

  return response.json();
}

// This fuction returns the JSON request header.
export function getJSONHeader() {
  return new Headers({
    "Content-Type": "application/json",
  });
}
