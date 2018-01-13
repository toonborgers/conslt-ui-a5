import {Injectable} from '@angular/core';
import {OrderWithResults} from '../domain/orderWithResults';
import {HateoasUtil} from '../core/services/hateoas.util';

export const ORDERS_FOR_PATIENT_URL_REL = 'orders.for.patient';

@Injectable()
export class ContextService {
  orderDetailUrl: string;
  requestedOrderDetailUrl: string;
  baseUrl: string;
  order: OrderWithResults;

  constructor(private hateoasUtil: HateoasUtil) {

  }

  hasContext(): boolean {
    return this.orderDetailUrl !== '' && this.baseUrl !== '';
  }

  isCopyDoctor(): boolean {
    return this.order !== null && this.getDoctorNumberFromUrl() === this.order.orderingDoctor.doctorNumber;
  }

  hasOrdersForPatientUrl(): boolean {
    return this.getOrdersForPatientUrl() !== null;
  }

  getOrdersForPatientUrl(): string {
    return this.hateoasUtil.getLink(this.order, ORDERS_FOR_PATIENT_URL_REL);
  }

  private getDoctorNumberFromUrl(): string {
    return this.orderDetailUrl.split('/')[3];
  }
}
