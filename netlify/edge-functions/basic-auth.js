export default async (request, context) => {
  const auth = request.headers.get("authorization");

  // ここでユーザー名とパスワードを設定（例: user / password）
  // Base64エンコードされた値と比較します（btoa("user:password") の結果）
  const expectedAuth = `Basic ${btoa("a779223:swm008")}`;

  if (auth !== expectedAuth) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return await context.next();
};