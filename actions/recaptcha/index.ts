"use server";
export async function verify(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
  });
  const json = await response.json();

  if (!json.success) {
    return {
      ...json,
      error: new Error("Failed to verify recaptcha token"),
    };
  }

  if (json.score < 0.5) {
    return {
      ...json,
      error: new Error("Recaptcha score too low"),
    };
  }

  return json;
}
