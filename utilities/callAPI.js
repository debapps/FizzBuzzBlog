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

// This function calls cloudinary API to upload the media files.
export async function callCloudAPI(url, formData) {
  let response = null;

  response = await fetch(url, {
    method: "POST",
    body: formData,
  }).then((res) => res.json());

  return response;
}

// This fuction returns the JSON request header.
export function getJSONHeader() {
  return new Headers({
    "Content-Type": "application/json",
  });
}

// This function returns the request header with input auth-token.
export function getAuthHeader(authToken) {
  return new Headers({
    "Content-Type": "application/json",
    "auth-token": authToken,
  });
}
