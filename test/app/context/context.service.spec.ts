import {ContextService, ORDERS_FOR_PATIENT_URL_REL} from '../../../src/app/context/context.service';
import {OrderWithResults} from '../../../src/app/domain/orderWithResults';
import {HateoasUtil} from '../../../src/app/core/services/hateoas.util';
import {instance, mock, when} from 'ts-mockito';

describe('Context Service', () => {
  const doctorNumber = '57761';
  const requestNumber = '322343242';
  const orderDetailUrl = `/v1/doctors/${doctorNumber}/orders/${requestNumber}`;
  const hateoasUtilMock = mock(HateoasUtil);
  let order: OrderWithResults;

  let contextService: ContextService;

  beforeEach(() => {
    order = {} as OrderWithResults;

    contextService = new ContextService(instance(mock(HateoasUtil)));
  });

  describe('Has context', () => {
    it('False when baseUrl not filled out', () => {
      contextService.baseUrl = '';

      expect(contextService.hasContext()).toBeFalsy();
    });

    it('False when orderDetailUrl not filled out', () => {
      contextService.orderDetailUrl = '';

      expect(contextService.hasContext()).toBeFalsy();
    });

    it('True when baseUrl and orderDetailUrl filled out', () => {
      contextService.orderDetailUrl = 'something';
      contextService.baseUrl = 'something';

      expect(contextService.hasContext()).toBeTruthy();
    });
  });

  describe('Is copy doctor', () => {
    it('False when no order present', () => {
      contextService.order = null;

      expect(contextService.isCopyDoctor()).toBeFalsy();
    });

    it('False when doctor from order different than doctor from url', () => {
      contextService.orderDetailUrl = orderDetailUrl;
      contextService.order = {orderingDoctor: {doctorNumber: doctorNumber + '4'}} as OrderWithResults;

      expect(contextService.isCopyDoctor()).toBeFalsy();
    });

    it('True when doctor from order same as doctor from url', () => {
      contextService.orderDetailUrl = orderDetailUrl;
      contextService.order = {orderingDoctor: {doctorNumber: doctorNumber}} as OrderWithResults;

      expect(contextService.isCopyDoctor()).toBeTruthy();
    });
  });

  describe('Has orders-for-patient url', () => {
    it('Returns false when link not present', () => {
      when(hateoasUtilMock.getLink(order, ORDERS_FOR_PATIENT_URL_REL)).thenReturn(null);
      contextService = new ContextService(instance(hateoasUtilMock));
      contextService.order = order;

      expect(contextService.hasOrdersForPatientUrl()).toBeFalsy();
    });

    it('Returns true when link present', () => {
      when(hateoasUtilMock.getLink(order, ORDERS_FOR_PATIENT_URL_REL)).thenReturn('');
      contextService = new ContextService(instance(hateoasUtilMock));
      contextService.order = order;

      expect(contextService.hasOrdersForPatientUrl()).toBeTruthy();
    });
  });

  describe('Get orders-for-patient url', () => {
    it('Uses HateoasUtil to get url', () => {
      const url = 'url';
      when(hateoasUtilMock.getLink(order, ORDERS_FOR_PATIENT_URL_REL)).thenReturn(url);
      contextService = new ContextService(instance(hateoasUtilMock));
      contextService.order = order;

      expect(contextService.getOrdersForPatientUrl()).toEqual(url);
    });
  });
});
