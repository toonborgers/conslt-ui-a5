import {TranslatePipe} from '../../../src/app/translate/translate.pipe';
import {anyString, anything, instance, mock, when} from 'ts-mockito';
import {TranslationService} from '../../../src/app/translate/services/translate.service';

describe('Translate pipe', () => {
  const translation = 'translation';

  let translatePipe: TranslatePipe;

  beforeEach(() => {
    const translationService = mock(TranslationService);
    when(translationService.translate(anyString(), anything())).thenReturn(translation);

    translatePipe = new TranslatePipe(instance(translationService));
  });

  it('Uses service to translate', () => {
    expect(translatePipe.transform('key', ['params'])).toEqual(translation);
  });
});
