import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export const URL = 'http://0.0.0.0:8882/v1/translations';

const PARAM_REGEX = /({\d+}?)/g;
const NUMBER_REGEX = /\d+/;

@Injectable()
export class TranslationService {
  translations = new Map<string, string>();

  constructor(private httpClient: HttpClient) {
  }

  translate(key: string, params: Array<string> = []) {
    if (this.translations.has(key)) {
      return this.replace(this.translations.get(key), params);
    }

    return '???' + key + '???';
  }

  private replace(text: string, params: Array<string>) {
    if (params.length === 0) {
      return text;
    }

    return text.replace(PARAM_REGEX, param => {
      const index = param.match(NUMBER_REGEX)[0];

      return params[index];
    });
  }

  fetchTranslations() {
    const translationsObservable = this.httpClient.get(URL).toPromise();

    translationsObservable.then(data => {
      this.translations = new Map<string, string>();

      for (const key in data) {
        this.translations.set(key, data[key]);
      }
    });

    return translationsObservable;
  }
}
