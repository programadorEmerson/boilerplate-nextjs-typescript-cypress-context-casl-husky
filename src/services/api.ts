import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

import { EnvironmentEnum } from '@enums/environment';

import { returnEnv } from '@utils/returnEnv';
import { TOKEN_PREFIX } from '@utils/tokens';

import { destroyCookie, parseCookies } from 'nookies';

export class ApiService {
  constructor(
    private cookies = parseCookies(),
    private token = cookies[`${TOKEN_PREFIX}`],
    private apiConfig = axios.create({
      baseURL: returnEnv(EnvironmentEnum.DB_URL),
    }),
  ) {
    this.initConfig();
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.apiConfig.get<T>(url, config);
    return response.data;
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.apiConfig.post<T>(url, data, config);
    return response.data;
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.apiConfig.put<T>(url, data, config);
    return response.data;
  }

  public async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.apiConfig.patch<T>(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.apiConfig.delete<T>(url, config);
    return response.data;
  }

  public async interceptorsRequest(
    config: AxiosRequestConfig,
  ): Promise<AxiosRequestConfig> {
    if (this.token && config.headers) {
      config.headers['Authorization'] = this.token;
    }
    return config;
  }

  public async interceptorsResponse(
    config: AxiosResponse,
  ): Promise<AxiosResponse> {
    if (config.data.statusCode === 401) {
      destroyCookie(null, `${TOKEN_PREFIX}`);
    }
    return config;
  }

  public async initInterceptors(): Promise<void> {
    this.apiConfig.interceptors.request.use(
      this.interceptorsRequest.bind(this),
    );
    this.apiConfig.interceptors.response.use(
      this.interceptorsResponse.bind(this),
    );
  }

  public async initConfig(): Promise<AxiosInstance> {
    await this.initInterceptors();
    return this.apiConfig;
  }

  public async getApiToken(): Promise<string> {
    return this.token;
  }

  public async getApiCookie(cookie: string): Promise<string> {
    return this.cookies[cookie];
  }
}
