import {TranslationService, URL} from '../../../../src/app/translate/services/translate.service';
import {async, getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('Translation service', () => {
  describe('Fetch translations', () => {
    let injector: TestBed;
    let translationService: TranslationService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [TranslationService]
      });
      injector = getTestBed();
      translationService = injector.get(TranslationService);
      httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('Can fetch', async(() => {
      const expectedTranslations = {'a': 'b', 'c': 'd'};

      const promise = translationService.fetchTranslations();
      httpMock.expectOne(URL)
        .flush(expectedTranslations);

      promise.then(() => {
        expect(translationService.translations.size).toEqual(2);
        expect(translationService.translations.get('a')).toEqual(expectedTranslations['a']);
        expect(translationService.translations.get('c')).toEqual(expectedTranslations['c']);
      });

    }));
  });

  describe('Translate', () => {
    const translations = new Map<string, string>([['someKey', 'someValue'], ['otherKey', 'bla {0} blabla {1}']]);

    let translationService: TranslationService;

    beforeEach(() => {
      translationService = new TranslationService(null);
    });

    it('If no translation found, return key with question  marks', () => {
      const key = 'unknownKey';

      const actual = translationService.translate(key);

      expect(actual).toEqual(`???${key}???`);
    });

    it('Can translate if key exists', () => {
      translationService.translations = translations;

      const actual = translationService.translate('someKey');

      expect(actual).toEqual('someValue');
    });

    it('Can translate with parameters', () => {
      translationService.translations = translations;

      const actual = translationService.translate('otherKey', ['a', 'b']);

      expect(actual).toEqual('bla a blabla b');
    });
  });
});
