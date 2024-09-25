import axios from 'axios';
import { appConfig } from 'config/app-config';

export const restClient = axios.create({
  baseURL: appConfig.apiUrl,
});
