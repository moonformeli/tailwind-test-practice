type Get = 'get' | 'GET';
type Post = 'post' | 'POST';
type HttpMethod = Get | Post;

interface Options extends Omit<RequestInit, 'method'> {
  method: HttpMethod;
  ignorePath?: boolean;
}

export default class BaseAPI {
  baseURL: string = process.env.NEXT_PUBLIC_NEXT_API_URL || '';

  protected async call<T>(url: string, options: Options = {} as Options) {
    const requestPath = this.baseURL + url.startsWith('/') ? url.slice(1) : url;

    if (options.ignorePath) {
      return await fetch(url, options).then<T>((res) => res.json());
    }

    return await fetch(requestPath, options).then<T>((res) => res.json());
  }
}
